
function _Server(_socketHandler) {
	let This = this;
	this.enabled = false;

	let socket = new WebSocket("wss://pubquiz.ga:8080/", "pubquiz-protocol");
	_socketHandler(socket);
	
	this.send = function (_str) {socket.send(_str)};

	socket.onclose = function(event) {
	  if (event.wasClean) {
	    console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
	  } else {
	    // e.g. server process killed or network down
	    // event.code is usually 1006 in this case
	    console.log('[close] Connection died');
	  }
	};

	socket.onerror = function(error) {
	  console.log(`[error] ${error.message}`);
	};

	this.onConnect = function() {console.log("[Connected]");}
	this.onConnectionError = function() {console.log("[Error]");}

	return This;
}


function _Server_controller() {
	let This = this;
	let socket;
	_Server.call(this, function (_socket) {socket = _socket});

	this.type = "controller";

	this.showQuestion = function(_question) {
		this.send(JSON.stringify({
			action: "showQuestion",
			question: _question
		}));
	}

	this.showTop3Scores = function() {
		Controller.teamHolder.commitScores()
		this.send(JSON.stringify({
			action: "showTop3Scores",
			scores: Controller.teamHolder.teams
		}));
	}

	this.showScoreList = function() {
		Controller.teamHolder.commitScores()
		this.send(JSON.stringify({
			action: "showScoreList",
			scores: Controller.teamHolder.teams
		}));
	}

	this.showCatagory = function(_catagory) {
		this.send(JSON.stringify({
			action: "showCatagory",
			catagory: _catagory
		}));
	}


	socket.onopen = function(e) {
	  console.log("[open] Connection established");
	  socket.send(JSON.stringify({type: "controller"}));
	};

	socket.onmessage = function(event) {
	  console.log(`[message] Data received from server: ${event.data}`);
	  let data = JSON.parse(event.data);
	  if (!This.enabled) return enableController(data);
	};


	function enableController(_data) {
		if (_data.connectionStatus != "OK") return This.onConnectionError(_data);
		This.key = _data.key;
	  	
	  	This.enabled = true;
	  	This.onConnect(_data);
	}
}





function _Server_displayer() {
	let This = this;
	let socket;
	_Server.call(this, function (_socket) {socket = _socket});

	this.type = "displayer";

	this.register = function(_key) {
		socket.send(JSON.stringify({type: "displayer", key: parseInt(_key)}));
	}

	socket.onopen = function(e) {
	  	console.log("[open] Connection established");
	};

	socket.onmessage = function(event) {
		console.log(`[message] Data received from server: ${event.data}`);
		let data = JSON.parse(event.data);
		if (!This.enabled) return enableDisplayer(data);

		switch (data.action)
		{
			case "showQuestion": Page.questionPage.open(data.question); break;
			case "showTop3Scores": Page.top3ScorePage.open(data.scores); break;
			case "showScoreList": Page.scoreListPage.open(data.scores); break;
			case "showCatagory": Page.catagoryPage.open(data.catagory); break;
			default: console.warn("Action " + data.action + " doesn't exist"); break;
		}
	};


	function enableDisplayer(_data) {
		if (_data.connectionStatus != "OK") return This.onConnectionError(_data);
		This.key = _data.key;
	  	This.enabled = true;
	  	This.onConnect(_data);
	}
}