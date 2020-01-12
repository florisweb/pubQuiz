<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/mainUI.css">
		<meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' name='viewport'/>
		<meta name="theme-color" content="#636ad5">
		<title>Pubquiz screen 2020</title>

		<style>
			.contentPage {
				overflow: hidden;
			}
			.contentPage .scoreBar {
				position: relative;
				float: left;
				left: 17%;
				top: 100%;
				
				padding: 5px;
				margin: -5px 0;

				margin-left: calc((100% - 2 * 17% - 100% / 5 * 3) / 4);
				width: calc(100% / 5 - 5px * 2);
				height: 100%;


				border-radius: 10px 10px 0 0;
				
				transition: all .5s;
			}

			.contentPage .scoreBar.first {
				background: #fc5;
			}
			.contentPage .scoreBar.second {
				background: #D3D3D3;
			}
			.contentPage .scoreBar.third {
				background: #b87333;
			}


			.scoreBar .positionIndicatorHolder {
				position: absolute;
				top: -200px;
				
				width: 100%;
				height: 100%;

				background: url("images/trophy.png");
				background-size: 50% auto;
				background-position: 50% 15%;
				background-repeat: no-repeat;
			}
			
			.scoreBar .teamNameHolder {
				position: relative;
				padding-top: 20px;
				font-size: 25px;
				color: #444;
			}

			.scoreBar .scoreHolder {
				position: relative;
				
				margin: auto;
				margin-top: 20px;

				background: rgba(255, 255, 255, .5);
				width: 100px;

				padding: 5px;
				border-radius: 5px;


				font-size: 25px;
				color: #444;
			}


			.contentPage {
				height: calc(100vh - 30px * 2) !important;
			}
			

		</style>
	</head>
	<body>
		<script src="/JS/jQuery.js"></script>
		<script src="js/extraFunctions.js"></script>

		<div id="mainContentHolder">
			<div class="contentPage">
				<div class="scoreBar">
					<div class="positionIndicatorHolder"></div>
					<div class="text teamNameHolder">Team bolsons</div>
					<div class="text scoreHolder"></div>
				</div>
				<div class="scoreBar">
					<div class="positionIndicatorHolder"></div>
					<div class="text teamNameHolder">Team bolsons</div>
					<div class="text scoreHolder"></div>
				</div>
				<div class="scoreBar">
					<div class="positionIndicatorHolder"></div>
					<div class="text teamNameHolder">Team bolsons</div>
					<div class="text scoreHolder"></div>
				</div>
			</div>
			<div class="contentPage hide">
				b
			</div>
		</div>

		<script>
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



		</script>
	</body>
</html>