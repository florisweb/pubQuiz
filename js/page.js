const Page = new function() {

	this.curPage 		= this.questionPage;
	this.scorePage 		= new Page_scoreBoard();
	this.questionPage 	= new Page_questionPage();
}


let teams = [
	[
		{
			name: "team A",
			score: 3,
		},
		{
			name: "team B",
			score: 7,
		},
		{
			name: "team C",
			score: 4,
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


// let index = 0;
// let loop = function () {
// 	if (index >= questions.length) index = 0;
// // Page.scorePage.setScoresByTeam(teams[index]);
// 	Page.questionPage.showQuestion(questions[index]);
// 	index++;
// 	setTimeout(loop, 3000 * Math.random() + 1000);
// };

// setTimeout(loop, 100);


function _Page(_config) {
	let Config = _config;
	this.name = _config.name;
	const HTML = {
		pages: $(".contentPage")
	}



	this.open = function() {
		Page.curPage = this;

		openPageByIndex(Config.index);
		Config.onOpen();
	}

	
	function openPageByIndex(_index) {
		for (page of HTML.pages) page.classList.add("hide");
		HTML.pages[_index].classList.remove("hide");
	}
}










function Page_scoreBoard() {
	const This = this;
	_Page.call(this, {
		name: "score",
		index: 0,
		onOpen: function() {
			HTML.body.style.background = "";
			This.setScoresByTeam(teams[0]);
		}
	});

	const HTML = {
		scoreBars: $(".contentPage .scoreBar"),
		body: document.body
	}
	


	this.setScoresByTeam = function(_teams) {
		_teams = setTeamPositions(_teams);
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

	function setTeamPositions(_teams) {
		let sortedTeams = sortTeams(_teams);

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

	
	function sortTeams(_teams) {
		return Object.assign([], _teams).sort(
			function (a, b) {
				if (a.score > b.score) return -1; 
				return 1;
			}
		);
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
];




function Page_questionPage() {
	const This = this;
	_Page.call(this, {
		name: "question",
		index: 1,
		onOpen: function() {This.showQuestion(questions[0])}
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