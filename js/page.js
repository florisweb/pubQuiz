const Page = new function() {

	this.scorePage = new Page_scoreBoard();
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


let index = 0;
let loop = function () {
	if (index >= teams.length) return;
	Page.scorePage.setScoresByTeam(teams[index]);
	index++;
	setTimeout(loop, 2000);
};

setTimeout(loop, 100);


function Page_scoreBoard() {
	const This = this;
	const HTML = {
		scoreBars: $(".contentPage .scoreBar")
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
