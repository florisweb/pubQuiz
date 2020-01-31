// const Page = new function() {

// 	this.curPage 		= this.questionPage;
// 	this.scorePage 		= new Page_scoreBoard();
// 	this.questionPage 	= new Page_questionPage();
// }






const Server = new _Server_controller();
// Server.onConnect = function() {document.title = "Displaykey: " + Server.key; displayerFrame.src = "/?key=" + Server.key;}
Server.onConnect = function() {document.title = "Displaykey: " + Server.key; displayerFrame.src = ".?key=" + Server.key;}


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
		questionProgressHolder: questionProgressHolder,
	}

	this.questions = [];
	this.selectedQuestion = false;

	this.showNextQuestion = function() {
		let curQuestionIndex = this.selectedQuestion ? this.selectedQuestion.index + 1 : 0;
		if (curQuestionIndex >= this.questions.length) return;

		setQuestionProgress(curQuestionIndex);
		this.questions[curQuestionIndex].select();
	}

	this.showPreviousQuestion = function() {
		let curQuestionIndex = this.selectedQuestion ? this.selectedQuestion.index - 1 : this.questions.length - 1;
		if (curQuestionIndex < 0) return;

		setQuestionProgress(curQuestionIndex);
		this.questions[curQuestionIndex].select();
	}

	

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
		HTML.Self.classList.add("clickable");

		HTML.Self.onclick = function() {This.select();}

		this.select = function() {
			this.displayOnDisplayerScreen();
			
			setQuestionProgress(this.index);
			
			
			if (Controller.questionHolder.selectedQuestion) Controller.questionHolder.selectedQuestion.deselect();
			Controller.questionHolder.selectedQuestion = this;

			HTML.Self.classList.add("selected");
		}

		this.displayOnDisplayerScreen = function() {
			Server.showQuestion(this.question);
		}
		
		this.deselect = function() {
			HTML.Self.classList.remove("selected");
		};
	}


	function setQuestionProgress(_index) {
		HTML.questionProgressHolder.innerHTML = _index + 1 +  "/" + Controller.questionHolder.questions.length;
	}
}






function Controller_teamHolder() {
	let HTML = {
		teamListHolder: $(".teamListHolder")[0],
	}

	this.teams = [];
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



