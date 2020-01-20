const Server = new _Server_displayer();


const Page = new function() {

	this.curPage 		= this.connectionPage;
	this.top3ScorePage 	= new Page_top3Score();
	this.scoreListPage 	= new Page_scoreList();
	this.questionPage 	= new Page_questionPage();

	this.connectionPage = new Page_connectionPage();
}


function _Page(_config) {
	let Config = _config;
	this.name = _config.name;
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
		name: "top3Score",
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
		let maxScore = 30;
		for (team of _teams) if (team.score > maxScore) maxScore = team.score;


		for (let i = 0; i < _teams.length; i++)
		{
			updateScoreBar(
				i, 
				_teams[i],
				_teams[i].score / maxScore
			);
		}
	}

	const positionClasses = ["first", "second", "third"];
	function updateScoreBar(_scoreBarIndex, _team, _scorePerc) {
		let scoreBar = HTML.scoreBars[_scoreBarIndex];
		
		for (Class of positionClasses) scoreBar.classList.remove(Class);
		scoreBar.classList.add(positionClasses[_team.position]);

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
			if (curScore >= _score) return;

			setTimeout(function () {update()}, 50);
		}
	}



	function setScoreBarHeight(_scoreBar, _percentage) {
		const min = .14;
		const max = .75;
		
		let percentage = mapValue(_percentage, 0, 1, min, max);
		_scoreBar.style.top = (1 - percentage) * 100 + "%";
		_scoreBar.style.height = percentage * 100 + "%";
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


let teams = [
	[
		{
			name: "team A",
			scoreChange: 3,
			score: 3,
		},
		{
			name: "team B",
			scoreChange: -2,
			score: 7,
		},
		{
			name: "team C",
			scoreChange: 1,
			score: 4,
		},
		{
			name: "team D",
			score: 5,
		},
		{
			name: "team E",
			score: 38,
		},
		{
			name: "team F",
			score: 41,
		}
	],
	[
		{
			name: "team A",
			score: 7,
		},
		{
			name: "team B",
			score: 9,
		},
		{
			name: "team C",
			score: 8,
		}
	],
	[
		{
			name: "team A",
			score: 10,
		},
		{
			name: "team B",
			score: 11,
		},
		{
			name: "team C",
			score: 9,
		}
	],
	[
		{
			name: "team A",
			score: 12,
		},
		{
			name: "team B",
			score: 13,
		},
		{
			name: "team C",
			score: 10,
		}
	],
	[
		{
			name: "team A",
			score: 13,
		},
		{
			name: "team B",
			score: 15,
		},
		{
			name: "team C",
			score: 11,
		}
	],
	[
		{
			name: "team A",
			score: 15,
		},
		{
			name: "team B",
			score: 16,
		},
		{
			name: "team C",
			score: 15,
		}
	],

	[
		{
			name: "team A",
			score: 16,
		},
		{
			name: "team B",
			score: 19,
		},
		{
			name: "team C",
			score: 17,
		}
	],
	[
		{
			name: "team A",
			score: 19,
		},
		{
			name: "team B",
			score: 20,
		},
		{
			name: "team C",
			score: 21,
		}
	],
	[
		{
			name: "team A",
			score: 23,
		},
		{
			name: "team B",
			score: 27,
		},
		{
			name: "team C",
			score: 28,
		}
	],
	[
		{
			name: "team A",
			score: 28,
		},
		{
			name: "team B",
			score: 31,
		},
		{
			name: "team C",
			score: 35,
		}
	],
	[
		{
			name: "team A",
			score: 34,
		},
		{
			name: "team B",
			score: 38,
		},
		{
			name: "team C",
			score: 41,
		}
	],
];




function Page_scoreList() {
	const This = this;
	_Page.call(this, {
		name: "scoreList",
		index: 1,
		onOpen: function(_team) {
			HTML.body.style.background = "";
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

		
		let scoreText = parseInt(_team.score);
		if (_team.scoreChange < 0) {scoreText = "▼ " + scoreText; html.classList.add("scoreDown");}
		if (_team.scoreChange > 0) {scoreText = "▲ " + scoreText; html.classList.add("scoreUp");}

		setTextToElement(html.children[2], scoreText);

		HTML.scoreListHolder.append(html);
	}
}	









function Page_questionPage() {
	const This = this;
	_Page.call(this, {
		name: "question",
		index: 2,
		onOpen: function(_question) {
			if (!_question) return;
			This.showQuestion(_question);
		}
	});


	const HTML = {
		questionHolder: questionHolder,
		catagoryHolder: $(".contentPage .catagoryHolder")[0],
		body: document.body
	}


	this.showQuestion = function(_question) {

		writeQuestion(_question);
		setTimeout(function () {writeCatagory(_question.catagory)}, 500);

	}


	
	function writeQuestion(_question) {
		HTML.questionHolder.classList.add("hide");
		setTimeout(function () {
			setTextToElement(HTML.questionHolder, _question.question);
			HTML.questionHolder.classList.remove("hide");
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
		name: "connect",
		index: 3,
		onOpen: function(_question) {
			HTML.keyHolder.value = null;
		}
	});

	const HTML = {
		keyHolder: $(".connectionKeyHolder .inputField")[0],
	}

	Server.onConnect = function() {
		Page.top3ScorePage.open();	
	}

	Server.onConnectionError = function(_data) {
		let error = _data.error;
		alert(error);
	}



	this.attemptToConnect = function() {
		let key = parseInt(HTML.keyHolder.value);

		Server.register(key);
	}



}



