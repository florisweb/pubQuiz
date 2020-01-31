

const catagories = [];
catagories["Algemene kennis"]	= {name: "Algemene kennis", color: "rgb(161, 0, 212)"};
catagories["Media en Amusement"]= {name: "Media en Amusement", color: "#11e182"};
catagories["Geschiedenis"] 		= {name: "Geschiedenis", color: "#e00000"};
catagories["Sport"] 			= {name: "Sport", color: "rgb(255, 177, 0)"};
	catagories["Cultuur"] 			= {name: "Cultuur", color: "#11B1B2"};
	catagories["Muziek"] 			= {name: "Muziek", color: "rgb(155, 70, 156)"};

// 07e798
catagories["Lokaal"] 			= {name: "Lokaal", color: "rgb(128, 144, 153)"};
	// catagories["Kerk"] 				= {name: "Kerk", color: "rgb(252, 220, 0)"};
	catagories["Kerk"] 				= {name: "Kerk", color: "rgb(242, 220, 200)"};

catagories["Politiek"] 			= {name: "Politiek", color: "rgb(77, 120, 238)"};
// #08f7a8



const questions = [
	{question: "Wat is de hoofdstad van Noord-Holland?", 						catagory: catagories["Algemene kennis"]},
	{question: "Waar staat de afkorting HEMA voor?", 							catagory: catagories["Algemene kennis"]},
	{question: "Pesto is een Italiaanse saus. Pesto betekent gestampt en dat komt van het fijnstampen in een vijzel van de ingrediënten. Er zit bijvoorbeeld olijfolie en knoflook in maar wat is het hoofdbestanddeel van de Italiaanse groene pesto?", catagory: catagories["Algemene kennis"]},
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







	{question: "Een groep jongeren gaat van Dieren met de trein naar Roemenië. Door welke landen komen zij met de trein?", 
																				catagory: catagories["Aardrijkskunde"]},
	{question: "Wat zijn de drie (ouderwetse) betekenissen van een Talent?", 	catagory: catagories["Geschiedenis"]},
	{question: "Tot welke taalgroep hoort het Roemeens?", 						catagory: catagories["Sport"]},
	{question: "Vraag over dracula?", 											catagory: catagories["Cultuur"]},
	{question: "Van welk land is dit de vlag?",									catagory: catagories["Muziek"], url: "images/uploads/1.gif"},
	{question: "Van welk land is dit de vlag?", 								catagory: catagories["Lokaal"], url: "images/uploads/2.gif"},
	{question: "Van welk land is dit de vlag?", 								catagory: catagories["Kerk"], url: "images/uploads/3.jpg"},
	{question: "Van welk land is dit de vlag?", 								catagory: catagories["Politiek"], url: "images/uploads/4.jpeg"}
];








let teams = [
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

for (team of teams) Controller.teamHolder.teams.push(team);

Controller.teamHolder.setTeamList(Controller.teamHolder.teams);
Controller.questionHolder.setQuestionList(questions);


