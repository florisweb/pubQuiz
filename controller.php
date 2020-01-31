<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/mainUI.css">
		<link rel="stylesheet" type="text/css" href="css/controller.css">
		<meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' name='viewport'/>
		<meta name="theme-color" content="#636ad5">
		

		<title>Pubquiz controller 2020</title>

		<style>
		</style>
	</head>
	<body>
	
		<div id="mainContentHolder">
			<div class="contentPage hide">
				<div class="scoreBar">
					<div class="positionIndicatorHolder"></div>
					<div class="text teamNameHolder"></div>
					<div class="text scoreHolder"></div>
				</div>
				<div class="scoreBar">
					<div class="positionIndicatorHolder"></div>
					<div class="text teamNameHolder"></div>
					<div class="text scoreHolder"></div>
				</div>
				<div class="scoreBar">
					<div class="positionIndicatorHolder"></div>
					<div class="text teamNameHolder"></div>
					<div class="text scoreHolder"></div>
				</div>
			</div>

			<div class="contentPage">
				<div class="infoBar">
					<div class="infoHalf leftHalf">
						<div class="text button clickable" style="width: 90px" onclick="Controller.questionHolder.showPreviousQuestion()">
							ᐊ Previous
						</div>
						<div class="text button bDefault bBoxy clickable" style="width: 70px" onclick="Controller.questionHolder.showNextQuestion()">
							Next ᐅ
						</div>
						<div class="button text" id="questionProgressHolder"></div>
					</div>

					<div class="whiteBox infoHalf">
						<button onclick="Server.showTop3Scores();">Show top 3 scores</button>
						<button onclick="Server.showScoreList();">Show scorelist</button>
					</div>
				</div>

				<div class="whiteBox questionListHolder"></div>
				<div class="whiteBox teamListHolder"></div>

				<iframe class="whiteBox" id="displayerFrame" src=""></iframe>
			</div>
			
			<div class="contentPage hide">
			
				<div class="centerAligner">
					<div class="text hide catagoryHolder">
					</div>
					<br>

					<div class="text hide whiteBox" id="questionHolder">
					</div>
				</div>
			</div>
		</div>


		<script src="js/jQuery.js"></script>
		<script src="js/extraFunctions.js"></script>
		<script src="js/server.js"></script>
		<script src="js/controller.js"></script>
		<script src="js/info.js"></script>

		

	</body>
</html>