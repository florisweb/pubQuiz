let Server;

connectServer();
function connectServer() {
	let reConnecting = false;	
	Server = new _Server_displayer();
	 
	Server.onConnectionOpen = function() {
		Server.register(10000);
	}
	
	Server.onConnectionDied = function() {
		if (reConnecting) return;
		reConnecting = true;
		
		console.log("-- connection died -- reconnecting..");
		setTimeout(connectServer, 5000);
	};
}



const Page = new function() {

	this.curPage 		= this.connectionPage;
	this.top3ScorePage 	= new Page_top3Score();
	this.scoreListPage 	= new Page_scoreList();
	this.questionPage 	= new Page_questionPage();

	this.connectionPage = new Page_connectionPage();
	this.catagoryPage 	= new Page_catagoryPage();
}


function _Page(_config) {
	let Config = _config;
	const HTML = {
		pages: $(".contentPage")
	}



	this.open = function() {
		Page.curPage = this;

		openPageByIndex(Config.index);
		Config.onOpen(...arguments);
	}

	
	function openPageByIndex(_index) {
		for (page of HTML.pages) page.classList.add("hide");
		HTML.pages[_index].classList.remove("hide");
	}
}








function Page_top3Score() {
	const This = this;
	_Page.call(this, {
		index: 0,
		onOpen: function(_team) {
			HTML.body.style.background = "";
			if (!_team) return;
			This.setScoresByTeam(_team);
		}
	});

	const HTML = {
		scoreBars: $(".contentPage .scoreBar"),
		body: document.body
	}
	


	this.setScoresByTeam = function(_teams) {
		_teams = Team.setTeamPositions(_teams);
		let maxScore = 0;
		let minScore = Infinity;

		for (let i = 0; i < 3; i++)
		{
			if (_teams[i].score > maxScore) maxScore = _teams[i].score;
			if (_teams[i].score < minScore) minScore = _teams[i].score;
		}

		const adjuster = maxScore / 200 * .1 + .2;
		for (let i = 0; i < 3; i++)
		{
			let perc = (_teams[i].score - minScore) / (maxScore - minScore) * (1 - adjuster);

			updateScoreBar(
				_teams[i],
				perc + adjuster
			); 
		}
	}

	function updateScoreBar(_team, _scorePerc) {
		let scoreBar = HTML.scoreBars[0];
		switch (_team.position)
		{
			case 0: scoreBar = HTML.scoreBars[1]; break;
			case 1: scoreBar = HTML.scoreBars[0]; break;
			case 2: scoreBar = HTML.scoreBars[2]; break;
		}

		setTextToElement(scoreBar.children[1], _team.name);

		setScoreBarHeight(scoreBar, _scorePerc);
		setTimeout(function () {
			animateScore(_team.score, scoreBar);
		}, 300);
	}

	function animateScore(_score, _scoreBar) {
		let curScore = parseInt(_scoreBar.children[2].innerHTML);
		if (isNaN(curScore)) curScore = 0;
		let startScore = curScore;


		update();
		function update() {
			let scoreVelocity = (_score - curScore) * .1;
			if (scoreVelocity < .5) scoreVelocity = 1;
			curScore += scoreVelocity;

			_scoreBar.children[2].innerHTML = Math.round(curScore) + "pts";
			if (curScore >= _score) return _scoreBar.children[2].innerHTML = Math.round(_score) + "pts";

			setTimeout(function () {update()}, 50);
		}
	}



	function setScoreBarHeight(_scoreBar, _percentage) {
		const min = .14;
		const max = .75;
		
		let percentage = mapValue(_percentage, 0, 1, min, max);
		_scoreBar.style.top = (1 - percentage) * 100 + "%";
	}
}


let Team = new function() {
	this.setTeamPositions = function(_teams) {
		let sortedTeams = this.sortTeams(_teams);

		for (let i = 0; i < sortedTeams.length; i++)
		{
			for (team of _teams)
			{
				if (sortedTeams[i].name != team.name) continue;
				team.position = i;
				break;
			}
		}

		return _teams;
	}

	
	this.sortTeams = function(_teams) {
		return Object.assign([], _teams).sort(
			function (a, b) {
				if (a.score > b.score) return -1; 
				return 1;
			}
		);
	}
}



function Page_scoreList() {
	const This = this;
	_Page.call(this, {
		index: 1,
		onOpen: function(_team) {
			HTML.body.style.background = "";
			if (!_team) return;
			This.setScoreListByTeams(_team);
		}
	});

	const HTML = {
		scoreListHolder: $(".contentPage .scoreListHolder")[0],
		body: document.body
	}


	this.setScoreListByTeams = function(_teams) {
		HTML.scoreListHolder.innerHTML = "";
		this.addListItemsByTeams(_teams);
	}



	this.addListItemsByTeams = function(_teams) {
		let teams = Team.sortTeams(
			Team.setTeamPositions(_teams)
		);

		for (team of teams) this.addListItem(team);
	}


	this.addListItem = function(_team) {
		let html = 	document.createElement("div");
		html.className = "listItem";
		html.innerHTML ='<div class="text positionIndicator"></div>' + 
						'<div class="text titleHolder"></div>' +
						'<div class="text statusHolder"></div>' +
						'<div class="lineHolder"></div>';
		
		setTextToElement(html.children[0], parseInt(_team.position) + 1);
		setTextToElement(html.children[1], _team.name);
		setTextToElement(html.children[2], parseInt(_team.score));

		HTML.scoreListHolder.append(html);
	}

}








function Page_questionPage() {
	const This = this;
	_Page.call(this, {
		index: 2,
		onOpen: function(_question) {
			if (!_question) return;
			This.showQuestion(_question);
		}
	});


	const HTML = {
		contentPage: $(".contentPage")[2],
		questionHolder: questionHolder,
		imageHolder: imageHolder,
		catagoryHolder: $(".contentPage .catagoryHolder")[0],
		body: document.body
	}


	this.showQuestion = function(_question) {

		writeQuestion(_question);
		setTimeout(function () {writeCatagory(_question.catagory)}, 500);

	}


	
	function writeQuestion(_question) {
		HTML.questionHolder.classList.add("hide");
		HTML.contentPage.classList.remove("displayingImage");

		setTimeout(function () {

			setTextToElement(HTML.questionHolder, _question.question);
			HTML.questionHolder.classList.remove("hide");
			if (_question.url) 
			{
				HTML.contentPage.classList.add("displayingImage");
				HTML.imageHolder.style.backgroundImage = "url(" + _question.url + ")";
			}
		}, 500);
	}

	function writeCatagory(_catagory) {
		HTML.body.style.background = _catagory.color;
		setTextToElement(HTML.catagoryHolder, _catagory.name);
	}
}






function Page_connectionPage() {
	const This = this;
	_Page.call(this, {
		index: 3,
		onOpen: function(_question) {
			HTML.keyHolder.value = null;
			HTML.keyHolder.focus();
		}
	});

	const HTML = {
		keyHolder: $(".connectionKeyHolder .inputField")[0],
	}

	Server.onConnect = function(_data) {
		Page.top3ScorePage.open();
		changeurl("/?key=" + _data.key, "Pubquiz " + _data.key);
	}

	Server.onConnectionError = function(_data) {
		let error = _data.error;
		alert(error);
		HTML.keyHolder.focus();
	}



	this.attemptToConnect = function() {
		let key = parseInt(HTML.keyHolder.value);

		Server.register(key);
	}




	function changeurl(url, title) {
	    var new_url = '/' + url;
	    window.history.pushState('data', 'Title', new_url);
	    document.title = title;
	}
}





function Page_catagoryPage() {
	const This = this;
	_Page.call(this, {
		index: 4,
		onOpen: function(_catagory) {
			if (!_catagory) return;
			This.showCatagory(_catagory);
		}
	});

	const HTML = {
		catagoryHolder: $("#catagoryPage.contentPage .catagoryHolder")[0],
		body: document.body
	}


	this.showCatagory = function(_catagory) {
		HTML.catagoryHolder.classList.add("hide");

		setTimeout(function () {
			HTML.catagoryHolder.classList.remove("hide");
			setTextToElement(HTML.catagoryHolder, _catagory.name);
			HTML.body.style.background = _catagory.color;
		}, 500);
	}
	

}
