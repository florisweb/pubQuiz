// const Page = new function() {

// 	this.curPage 		= this.questionPage;
// 	this.scorePage 		= new Page_scoreBoard();
// 	this.questionPage 	= new Page_questionPage();
// }






const Server = new _Server_controller();
Server.onConnect = function() {document.title = "Displaykey: " + Server.key; displayerFrame.src = "/?key=" + Server.key;}


const Controller = new function() {
	this.questionHolder = new Controller_questionHolder();
	this.teamHolder = new Controller_teamHolder();
	

	this.addListItem = function(_object, _listHolder) {
		let html = 	document.createElement("div");
		html.className = "listItem";
		html.innerHTML ='<div class="text positionIndicator"></div>' + 
						'<div class="text titleHolder"></div>' +
						'<div class="text statusHolder"></div>' +
						'<div class="lineHolder"></div>';

		setTextToElement(html.children[0], _object.indicator);
		setTextToElement(html.children[1], _object.title);

		
		html.children[2].style.background = _object.flagColor;
		setTextToElement(html.children[2], _object.flagText);

		_listHolder.append(html);
		return html;
	}
}



function Controller_questionHolder() {
	let HTML = {
		questionListHolder: $(".questionListHolder")[0],
	}
	this.questions = [];
	this.selectedQuestion = false;

	this.setQuestionList = function(_questionList) {
		this.questions = [];
		HTML.questionListHolder.innerHTML = "";

		for (let i = 0; i < _questionList.length; i++)
		{
			this.addQuestion(_questionList[i], i + 1);
		}
	}

	this.addQuestion = function(_question, _index = 0) {
		let html = Controller.addListItem(
		{
			title: _question.question,
			indicator: _index,
			flagColor: _question.catagory.color,
			flagText: _question.catagory.name
		}, HTML.questionListHolder);
		
		this.questions.push(new _questionObject(
			_question,
			html
		));
	}

	function _questionObject(_question, _html) {
		this.question = _question;
		this.index = Controller.questionHolder.questions.length;

		let This = this;
		const HTML = {
			Self: _html
		}

		HTML.Self.onclick = function() {
			This.displayOnDisplayerScreen();
			
			if (Controller.questionHolder.selectedQuestion) Controller.questionHolder.selectedQuestion.deselect();
			Controller.questionHolder.selectedQuestion = This;

			HTML.Self.classList.add("selected");
		}

		this.displayOnDisplayerScreen = function() {
			Server.showQuestion(this.question);
		}
		
		this.deselect = function() {
			HTML.Self.classList.remove("selected");
		};
	}
}






function Controller_teamHolder() {
	let HTML = {
		teamListHolder: $(".teamListHolder")[0],
	}

	this.teams = [
		{
			name: "team A",
			score: 0,
		},
		{
			name: "team B",
			score: 0,
		},
		{
			name: "team C",
			score: 0,
		},
		{
			name: "De Nieuwlandjes",
			score: 0,
		},
		{
			name: "Team Bolsons",
			score: 0,
		},
		{
			name: "Team Ellen?",
			score: 0,
		},
		{
			name: "Pos 1?",
			score: 0,
		},
		{
			name: "We are number one!",
			score: 0,
		}
	];

	this.teams.commitScores = function() {
		for (team of this) 
		{
			if (!team.newScore && typeof team.newScore != "number") continue;
			team.score = team.newScore; 
			delete team.newScore;
		}
		this.sort(function (a, b) {
			if (a.score > b.score) return -1; 
			return 1;
		});
	}


	this.commitScores = function() {
		this.teams.commitScores();
		this.setTeamList(this.teams);
	}


	this.setTeamList = function(_teamList) {
		HTML.teamListHolder.innerHTML = "";
		for (let i = 0; i < _teamList.length; i++)
		{
			this.addTeam(_teamList[i]);
		}
	}

	this.addTeam = function(_team) {
		let team = new _Team(_team);
	}



	function _Team(_team) {
		let This = this;
		let teamHTML = {
			Self: Controller.addListItem(
			{
				title: _team.name,
				indicator: HTML.teamListHolder.children.length + 1,
				flagColor: "rgb(148, 148, 148)",
				flagText: false,
			}, HTML.teamListHolder)
		}
		this.team = _team;
		

		teamHTML.Self.children[2].innerHTML = "<input class='scoreEditingInput text'>";
		teamHTML.scoreHolder				= teamHTML.Self.children[2];
		teamHTML.inputField 				= teamHTML.scoreHolder.children[0];
		teamHTML.inputField.value 			= _team.score;
		teamHTML.scoreHolder.onclick 		= function () {This.openScoreEditMode()}
		teamHTML.inputField.onfocus 		= teamHTML.scoreHolder.onclick;
		teamHTML.inputField.onblur		 	= function () {This.updateScore()}



		this.openScoreEditMode = function() {
			teamHTML.inputField.value = this.team.score;
			teamHTML.inputField.select();
		}


		this.updateScore = function() {
			let newScore 		= parseInt(teamHTML.inputField.value);
			let dScore 			= newScore - this.team.score;
			this.team.newScore 	= newScore;

			teamHTML.scoreHolder.classList.remove("scoreUp");
			teamHTML.scoreHolder.classList.remove("scoreDown");

			let newScoreText = this.team.newScore;
			if (dScore > 0)
			{
				newScoreText += "  ▲" + dScore;
				teamHTML.scoreHolder.classList.add("scoreUp");
				
			} else if (dScore < 0) {
				newScoreText += "  ▼" + -dScore;
				teamHTML.scoreHolder.classList.add("scoreDown");
			}

			teamHTML.inputField.value = newScoreText;
		}
	}
}









let catagories = [
	{name: "Algemene kennis", color: "#11B1B2"},
	{name: "Aardrijkskunde", color: "#08f7a8"},
	{name: "Geschiedenis", color: "#F0C808"},
	{name: "Cultuur", color: "#DD1C1A"},
	{name: "Lokaal", color: "#11B1B2"},
	{name: "Sport", color: "#11B1B2"},
	{name: "Muziek", color: "#11B1B2"},
	{name: "Politiek", color: "#11B1B2"},
	{name: "Kerk", color: "#11B1B2"},
];

let questions = [
	{question: "Wat is de hoofdstad van Noord-Holland?", catagory: catagories[0]},
	{question: "Een groep jongeren gaat van Dieren met de trein naar Roemenië. Door welke landen komen zij met de trein?", catagory: catagories[1]},
	{question: "Wat zijn de drie (ouderwetse) betekenissen van een Talent?", catagory: catagories[2]},
	{question: "Tot welke taalgroep hoort het Roemeens?", catagory: catagories[3]},
	{question: "Vraag over dracula?", catagory: catagories[3]},
	{question: "Van welk land is dit de vlag?", catagory: catagories[1], url: "images/uploads/1.gif"},
	{question: "Van welk land is dit de vlag?", catagory: catagories[1], url: "images/uploads/2.gif"},
	{question: "Van welk land is dit de vlag?", catagory: catagories[1], url: "images/uploads/3.jpg"},
	{question: "Van welk land is dit de vlag?", catagory: catagories[1], url: "images/uploads/4.jpeg"},
	{question: "Van welk land is dit de vlag?", catagory: catagories[1], url: "images/uploads/5.png"},
	{question: "Van welk land is dit de vlag?", catagory: catagories[1], url: "images/uploads/6.jpeg"},
	{question: "Van welk land is dit de vlag?", catagory: catagories[1], url: "images/uploads/7.png"},
	{question: "Van welk land is dit de vlag?", catagory: catagories[1], url: "images/uploads/8.jpeg"},
	{question: "Van welk land is dit de vlag?", catagory: catagories[1], url: "images/uploads/9.png"},
	{question: "Van welk land is dit de vlag?", catagory: catagories[1], url: "images/uploads/10.jpeg"},
	{question: "Van welk land is dit de vlag?", catagory: catagories[1], url: "images/uploads/11.png"},
	{question: "Van welk land is dit de vlag?", catagory: catagories[1], url: "images/uploads/12.gif"},
	{question: "Van welk land is dit de vlag?", catagory: catagories[1], url: "images/uploads/13.gif"},
	{question: "Van welk land is dit de vlag?", catagory: catagories[1], url: "images/uploads/14.gif"}
];






Controller.teamHolder.setTeamList(Controller.teamHolder.teams);
Controller.questionHolder.setQuestionList(questions);


// let index = 0;
// let loop = function () {
// 	if (index >= questions.length) index = 0;

// 	Server.send(JSON.stringify({
// 		action: "showQuestion",
// 		question: questions[index]
// 	}));

// 	index++;
// 	setTimeout(loop, 3000 * Math.random() + 1000);
// };

// setTimeout(loop, 100);


// function _Page(_config) {
// 	let Config = _config;
// 	this.name = _config.name;
// 	const HTML = {
// 		pages: $(".contentPage")
// 	}



// 	this.open = function() {
// 		Page.curPage = this;

// 		openPageByIndex(Config.index);
// 		Config.onOpen(...arguments);
// 	}

	
// 	function openPageByIndex(_index) {
// 		for (page of HTML.pages) page.classList.add("hide");
// 		HTML.pages[_index].classList.remove("hide");
// 	}
// }










// function Page_scoreBoard() {
// 	const This = this;
// 	_Page.call(this, {
// 		name: "score",
// 		index: 0,
// 		onOpen: function(_team) {
// 			HTML.body.style.background = "";
// 			This.setScoresByTeam(_team);
// 		}
// 	});

// 	const HTML = {
// 		scoreBars: $(".contentPage .scoreBar"),
// 		body: document.body
// 	}
	


// 	this.setScoresByTeam = function(_teams) {
// 		_teams = setTeamPositions(_teams);
// 		let maxScore = 30;
// 		for (team of _teams) if (team.score > maxScore) maxScore = team.score;


// 		for (let i = 0; i < _teams.length; i++)
// 		{
// 			updateScoreBar(
// 				i, 
// 				_teams[i],
// 				_teams[i].score / maxScore
// 			);
// 		}
// 	}

// 	function setTeamPositions(_teams) {
// 		let sortedTeams = sortTeams(_teams);

// 		for (let i = 0; i < sortedTeams.length; i++)
// 		{
// 			for (team of _teams)
// 			{
// 				if (sortedTeams[i].name != team.name) continue;
// 				team.position = i;
// 				break;
// 			}
// 		}

// 		return _teams;
// 	}

	
// 	function sortTeams(_teams) {
// 		return Object.assign([], _teams).sort(
// 			function (a, b) {
// 				if (a.score > b.score) return -1; 
// 				return 1;
// 			}
// 		);
// 	}


// 	const positionClasses = ["first", "second", "third"];
// 	function updateScoreBar(_scoreBarIndex, _team, _scorePerc) {
// 		let scoreBar = HTML.scoreBars[_scoreBarIndex];
		
// 		for (Class of positionClasses) scoreBar.classList.remove(Class);
// 		scoreBar.classList.add(positionClasses[_team.position]);

// 		setTextToElement(scoreBar.children[1], _team.name);

// 		setScoreBarHeight(scoreBar, _scorePerc);
// 		setTimeout(function () {
// 			animateScore(_team.score, scoreBar);
// 		}, 300);
// 	}

// 	function animateScore(_score, _scoreBar) {
// 		let curScore = parseInt(_scoreBar.children[2].innerHTML);
// 		if (isNaN(curScore)) curScore = 0;
// 		let startScore = curScore;


// 		update();
// 		function update() {
// 			let scoreVelocity = (_score - curScore) * .1;
// 			if (scoreVelocity < .5) scoreVelocity = 1;
// 			curScore += scoreVelocity;

// 			_scoreBar.children[2].innerHTML = Math.round(curScore) + "pts";
// 			if (curScore >= _score) return;

// 			setTimeout(function () {update()}, 50);
// 		}
// 	}



// 	function setScoreBarHeight(_scoreBar, _percentage) {
// 		const min = .14;
// 		const max = .75;
		
// 		let percentage = mapValue(_percentage, 0, 1, min, max);
// 		_scoreBar.style.top = (1 - percentage) * 100 + "%";
// 	}
// }













// function Page_questionPage() {
// 	const This = this;
// 	_Page.call(this, {
// 		name: "question",
// 		index: 1,
// 		onOpen: function(_question) {
// 			This.showQuestion(_question);
// 		}
// 	});


// 	const HTML = {
// 		questionHolder: questionHolder,
// 		catagoryHolder: $(".contentPage .catagoryHolder")[0],
// 		body: document.body
// 	}


// 	this.showQuestion = function(_question) {

// 		writeQuestion(_question);
// 		setTimeout(function () {writeCatagory(_question.catagory)}, 500);

// 	}


	
// 	function writeQuestion(_question) {
// 		HTML.questionHolder.classList.add("hide");
// 		setTimeout(function () {
// 			setTextToElement(HTML.questionHolder, _question.question);
// 			HTML.questionHolder.classList.remove("hide");
// 		}, 500);
// 	}

// 	function writeCatagory(_catagory) {
// 		HTML.body.style.background = _catagory.color;
// 		setTextToElement(HTML.catagoryHolder, _catagory.name);
// 	}
// }