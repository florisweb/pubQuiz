
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
			case "showScore": Page.scorePage.open(data.scores); break;
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