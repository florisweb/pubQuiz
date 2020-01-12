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
		</style>
	</head>
	<body>
		<script src="/JS/jQuery.js"></script>
		<div id="mainContentHolder">
			<div class="contentPage">
				<div class="scoreBar second">Team A - 50 punten</div>
				<div class="scoreBar first">b</div>
				<div class="scoreBar third">c</div>
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
			];

let teamsB = [
				{
					name: "team A",
					score: 17,
				},
				{
					name: "team B",
					score: 16,
				},
				{
					name: "team C",
					score: 16,
				}
			]

			function Page_scoreBoard() {
				const This = this;
				const HTML = {
					scoreBars: $(".contentPage .scoreBar")
				}


				this.setScoresByTeam = function(_teams) {
					_teams = setTeamPositions(_teams);
					let scoreRange = getScoreRange(_teams);

					const percRange = 1 - scoreRange.min / scoreRange.max;//.5;

					for (let i = 0; i < _teams.length; i++)
					{
						updateScoreBar(
							i, 
							_teams[i],
							(_teams[i].score - scoreRange.min) / (scoreRange.max - scoreRange.min) * percRange + 1 - percRange
						);
					}
				}

				this.setTeamPositions = setTeamPositions;
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


				function getScoreRange(_teams) {
					let sortedTeams = sortTeams(teams);

					return {
						max: sortedTeams[0].score,
						min: sortedTeams[sortedTeams.length - 1].score
					}
				} 


				const positionClasses = ["first", "second", "third"];
				function updateScoreBar(_scoreBarIndex, _team, _scorePerc) {
					let scoreBar = HTML.scoreBars[_scoreBarIndex];
					
					for (Class of positionClasses) scoreBar.classList.remove(Class);
					scoreBar.classList.add(positionClasses[_team.position]);

					setScoreBarHeight(scoreBar, _scorePerc);
				}

				function setScoreBarHeight(_scoreBar, _percentage) {
					const maxHeight = .7;// 50 %

					_percentage *= maxHeight;
					if (_percentage < .01) _percentage = .01;
					if (_percentage > 1) _percentage = 1;

					_scoreBar.style.top = (1 - _percentage) * 100 + "%";
				}
			}



		</script>
	</body>
</html>