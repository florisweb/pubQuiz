<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/mainUI.css">
		<link rel="stylesheet" type="text/css" href="css/displayer.css">
		<meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' name='viewport'/>
		<meta name="theme-color" content="#636ad5">
		

		<title>Pubquiz screen 2020</title>

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
				<div class="whiteBox scoreListHolder">
					<div class="listItem scoreUp">
						<div class="text positionIndicator">1</div>
						<div class="text teamNameHolder">Team Bolsons</div>
						<div class="text scoreHolder">▲ 23</div>
						<div class="lineHolder"></div>
					</div>
					<div class="listItem scoreDown">
						<div class="text positionIndicator">2</div>
						<div class="text teamNameHolder">Team Nieuwlandjes</div>
						<div class="text scoreHolder">▼ 21</div>
						<div class="lineHolder"></div>
					</div>

					<div class="listItem scoreUp">
						<div class="text positionIndicator">3</div>
						<div class="text teamNameHolder">Team Why though?</div>
						<div class="text scoreHolder">▲ 19</div>
						<div class="lineHolder"></div>
					</div>

					<div class="listItem scoreUp">
						<div class="text positionIndicator">4</div>
						<div class="text teamNameHolder">Team Why though 2?</div>
						<div class="text scoreHolder">▲ 18</div>
						<div class="lineHolder"></div>
					</div>

					<div class="listItem">
						<div class="text positionIndicator">5</div>
						<div class="text teamNameHolder">Team Why though 2?</div>
						<div class="text scoreHolder">15</div>
						<div class="lineHolder"></div>
					</div>

					<div class="listItem">
						<div class="text positionIndicator">6</div>
						<div class="text teamNameHolder">Team Why though 2?</div>
						<div class="text scoreHolder">14</div>
						<div class="lineHolder"></div>
					</div>

					<div class="listItem">
						<div class="text positionIndicator">7</div>
						<div class="text teamNameHolder">Team Why though 2?</div>
						<div class="text scoreHolder">12</div>
						<div class="lineHolder"></div>
					</div>

					<div class="listItem">
						<div class="text positionIndicator">8</div>
						<div class="text teamNameHolder">Team Why though 2?</div>
						<div class="text scoreHolder">11</div>
						<div class="lineHolder"></div>
					</div>

					<div class="listItem">
						<div class="text positionIndicator">9</div>
						<div class="text teamNameHolder">Team Why though 2?</div>
						<div class="text scoreHolder">10</div>
						<div class="lineHolder"></div>
					</div>

					<div class="listItem">
						<div class="text positionIndicator">10</div>
						<div class="text teamNameHolder">Team Why though 2?</div>
						<div class="text scoreHolder">10</div>
						<div class="lineHolder"></div>
					</div>

					<div class="listItem">
						<div class="text positionIndicator">11</div>
						<div class="text teamNameHolder">Team Why though 2?</div>
						<div class="text scoreHolder">16</div>
						<div class="lineHolder"></div>
					</div>

					<div class="listItem">
						<div class="text positionIndicator">12</div>
						<div class="text teamNameHolder">Team Why though 2?</div>
						<div class="text scoreHolder">13</div>
						<div class="lineHolder"></div>
					</div>

					<div class="listItem">
						<div class="text positionIndicator">13</div>
						<div class="text teamNameHolder">Team Why though 2?</div>
						<div class="text scoreHolder">12</div>
						<div class="lineHolder"></div>
					</div>
					
				</div>
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


		<script src="/JS/jQuery.js"></script>
		<script src="js/extraFunctions.js"></script>
		<script src="js/displayer.js"></script>

		<script src="js/server.js"></script>

		<script>
			let displayKey = (
			<?php
				echo (int)$_GET["key"];
			?>);

			const Server = new _Server_displayer(displayKey);
		</script>

	</body>
</html>