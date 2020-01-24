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

			<div class="contentPage hide">
				<div class="whiteBox scoreListHolder"></div>
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

			<div class="contentPage">
				<div class="whiteBox connectionKeyHolder">
					<input class="inputField text" placeholder="Displaykey" maxlength="5">
					<br>
					<div class="text button bDefault" onclick="Page.connectionPage.attemptToConnect()">Next</div>
				</div>
				
			</div>
		</div>


		<script src="js/jQuery.js"></script>
		<script src="js/extraFunctions.js"></script>
		<script src="js/server.js"></script>

		<script src="js/displayer.js"></script>
		

		<script>
			let displayKey = (<?php
				echo (int)$_GET["key"];
			?>);

			Page.connectionPage.open();
			if (displayKey)
			{
				$(".connectionKeyHolder .inputField")[0].value = displayKey;
				setTimeout(function () {Page.connectionPage.attemptToConnect();}, 500);
			}
		</script>

	</body>
</html>