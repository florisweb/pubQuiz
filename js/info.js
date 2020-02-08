

const catagories = [];
catagories["Algemene kennis"]					= {name: "Algemene kennis", color: "rgb(161, 0, 212)"};
catagories["Media en Amusement"]				= {name: "Media en Amusement", color: "#11e182"};
catagories["Aardrijkskunde en Geschiedenis"] 	= {name: "Aardrijkskunde en Geschiedenis", color: "#e00000"};
catagories["Sport"] 							= {name: "Sport", color: "rgb(255, 177, 0)"};
	catagories["Cultuur"] 						= {name: "Cultuur", color: "#11B1B2"};
	catagories["Muziek"] 						= {name: "Muziek", color: "rgb(155, 70, 156)"};

// 07e798
catagories["Lokaal"] 						= {name: "Lokaal", color: "rgb(128, 144, 153)"};
	// catagories["Kerk"] 				= {name: "Kerk", color: "rgb(252, 220, 0)"};
	catagories["Kerk"] 				= {name: "Kerk", color: "rgb(242, 220, 200)"};

catagories["Politiek"] 			= {name: "Politiek", color: "rgb(77, 120, 238)"};
// #08f7a8



const questions = [
	{question: "Wat is de hoofdstad van Noord-Holland?", 						catagory: catagories["Algemene kennis"]},
	{question: "Waar staat de afkorting HEMA voor?", 							catagory: catagories["Algemene kennis"]},
	{question: "Wat is het hoofdbestanddeel van de Italiaanse groene pesto?", catagory: catagories["Algemene kennis"]},
	{question: "Wat hebben onze koning Willem Alexander en onze minister president Mark Rutte gemeen?", 						catagory: catagories["Algemene kennis"]},
	{question: "Wat is het meest bijzondere aan jaar 2020? Twee antwoorden mogelijk.", 						catagory: catagories["Algemene kennis"]},
	{question: "Heeft Nederland meer inwoners of meer fietsen?", 				catagory: catagories["Algemene kennis"]},
	{question: "Wat betekent het Chinese woord ‘long’?", 						catagory: catagories["Algemene kennis"]},
	{question: "Hoeveel grassoorten zijn er?", 									catagory: catagories["Algemene kennis"]},
	{question: "Welke van de volgende dieren is geen insect?", 					catagory: catagories["Algemene kennis"]},
	{question: "Hoe heet de oudste luchtvaartmaatschappij ter wereld?", 		catagory: catagories["Algemene kennis"]},



	{question: "Hoe heeft het hoofd van de afdeling Griffoendor?", 						catagory: catagories["Media en Amusement"]},
	{question: "We kennen James Bond, we kennen Miss Moneypenny, we kennen Q. Maar wie was eigenlijk M in de James Bondfilms?", 						catagory: catagories["Media en Amusement"]},
	{question: "In welke film speelt de sneeuwpop Olaf?", 						catagory: catagories["Media en Amusement"]},
	{question: "De langstlopende musical in Nederland is Soldaat van Oranje. In welke stad in Nederland begint de musical of de film of het boek?", 						catagory: catagories["Media en Amusement"]},
	{question: "Hoe overleed de eerste man die een val van de Niagara Falls overleefde?", 	catagory: catagories["Media en Amusement"]},
	{question: "Van welk bedrijf of van welke organisatie is dit het logo?", 	catagory: catagories["Media en Amusement"], url: "images/uploads/6.jpeg"},
	{question: "Van welk bedrijf of van welke organisatie is dit het logo?", 	catagory: catagories["Media en Amusement"], url: "images/uploads/12.gif"},
	{question: "Van welk bedrijf of van welke organisatie is dit het logo?", 	catagory: catagories["Media en Amusement"], url: "images/uploads/13.gif"},
	{question: "Van welk bedrijf of van welke organisatie is dit het logo?", 	catagory: catagories["Media en Amusement"], url: "images/uploads/14.gif"},
	{question: "Van welk bedrijf of van welke organisatie is dit het logo?", 	catagory: catagories["Media en Amusement"], url: "images/uploads/1.gif"},
	{question: "Van welk bedrijf of van welke organisatie is dit het logo?", 	catagory: catagories["Media en Amusement"], url: "images/uploads/2.gif"},
	{question: "Van welk bedrijf of van welke organisatie is dit het logo?", 	catagory: catagories["Media en Amusement"], url: "images/uploads/10.jpeg"},
	{question: "Van welk bedrijf of van welke organisatie is dit het logo?", 	catagory: catagories["Media en Amusement"], url: "images/uploads/4.jpeg"},
	{question: "Van welk bedrijf of van welke organisatie is dit het logo?", 	catagory: catagories["Media en Amusement"], url: "images/uploads/11.png"},
	{question: "Van welk bedrijf of van welke organisatie is dit het logo?", 	catagory: catagories["Media en Amusement"], url: "images/uploads/5.png"},





	{question: "1600 – dan roept iedereen Slag bij Nieuwpoort, maar wie vochten er eigenlijk tegen wie?", catagory: catagories["Aardrijkskunde en Geschiedenis"]},
	{question: "Aan welke vijf landen grenst Roemenië?", catagory: catagories["Aardrijkskunde en Geschiedenis"]},
	{question: "Een groep jongeren gaat van Dieren met de trein naar Roemenië. Door welke landen komen zij met de trein?", catagory: catagories["Aardrijkskunde en Geschiedenis"]},
	{question: "Van welk land is Wenen de hoofdstad?", catagory: catagories["Aardrijkskunde en Geschiedenis"]},
	{question: "In welk land eindigde de Oriënt Express?", catagory: catagories["Aardrijkskunde en Geschiedenis"]},
	{question: "Wat is de hoogste berg ter wereld?", catagory: catagories["Aardrijkskunde en Geschiedenis"]},
	{question: "Wat is in de geschiedenis het grootste land in landoppervlakte geweest?", catagory: catagories["Aardrijkskunde en Geschiedenis"]},
	{question: "Waar ligt Catanzaro?", 	catagory: catagories["Aardrijkskunde en Geschiedenis"]},
	{question: "Wat was dan het meest waardevolle bedrijf ooit?", catagory: catagories["Aardrijkskunde en Geschiedenis"]},
	{question: "Wat is in de geschiedenis het grootste land in landoppervlakte geweest? ",	catagory: catagories["Aardrijkskunde en Geschiedenis"]},
	{question: "Van welk land is dit de vlag?", catagory: catagories["Aardrijkskunde en Geschiedenis"], url: "images/uploads/7.png"},
	{question: "Van welk land is dit de vlag?", catagory: catagories["Aardrijkskunde en Geschiedenis"], url: "images/uploads/15.jpg"},
	{question: "Van welk land is dit de vlag?", catagory: catagories["Aardrijkskunde en Geschiedenis"], url: "images/uploads/9.png"},
	{question: "Van welk land is dit de vlag?", catagory: catagories["Aardrijkskunde en Geschiedenis"], url: "images/uploads/8.jpeg"},
	{question: "Van welk land is dit de vlag?", catagory: catagories["Aardrijkskunde en Geschiedenis"], url: "images/uploads/3.jpg"},


];








let teams = [
	{name: "de Nieuwlandjes", score: 0},
	{name: "Midlife café", score: 0},
	{name: "Ff denken...", score: 0},
	{name: "De chaos", score: 0},
	{name: "de lange-jans",score: 0},
	{name: "Dick en de dames", score: 0},
	{name: "M&M's", score: 0},
	{name: "Coenen & Coo", score: 0},
	{name: "Samen", score: 0},
	{name: "De restpartij",score: 0},
	{name: "Midlife café 2",score: 0},
	{name: "Bolson-schapen",score: 0},
	{name: "De heilige boontjes", score: 0}
];

for (team of teams) Controller.teamHolder.teams.push(team);

Controller.teamHolder.setTeamList(Controller.teamHolder.teams);
Controller.questionHolder.setQuestionList(questions);


