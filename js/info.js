

const catagories = [];
catagories["Kerk"] 								= {name: "Kerk", color: "#069"};
catagories["Algemene kennis"]					= {name: "Algemene kennis", color: "rgb(161, 0, 212)"};
catagories["Media en Amusement"]				= {name: "Media en Amusement", color: "#11e182"};

catagories["Aardrijkskunde en Geschiedenis"] 	= {name: "Aardrijkskunde en Geschiedenis", color: "#e00000"};
catagories["Muziek"] 							= {name: "Muziek", color: "rgb(155, 70, 156)"};

catagories["Cultuur"] 							= {name: "Cultuur", color: "#11B1B2"};
catagories["Sport"] 							= {name: "Sport", color: "rgb(255, 177, 0)"};

catagories["Politiek"] 							= {name: "Politiek", color: "rgb(77, 120, 238)"};
catagories["Lokaal"] 							= {name: "Lokaal", color: "rgb(128, 144, 153)"};
	



const questions = [
	{question: "-- catagoryholder --", 											catagory: catagories["Kerk"]},

	// algemene kennis
	{question: "Wat is de hoofdstad van Noord-Holland?", 						catagory: catagories["Algemene kennis"]},
	{question: "Waar staat de afkorting HEMA voor?", 							catagory: catagories["Algemene kennis"]},
	{question: "Wat is het hoofdbestanddeel van de Italiaanse groene pesto?", catagory: catagories["Algemene kennis"]},
	{question: "Wat hebben onze koning Willem Alexander en onze minister president Mark Rutte gemeen?", 	catagory: catagories["Algemene kennis"]},
	{question: "Wat is het meest bijzondere aan jaar 2020? Twee antwoorden mogelijk.", 						catagory: catagories["Algemene kennis"]},
	{question: "Heeft Nederland meer inwoners of meer fietsen?", 				catagory: catagories["Algemene kennis"]},
	{question: "Wat betekent het Chinese woord ‘long’?", 						catagory: catagories["Algemene kennis"]},
	{question: "Hoeveel grassoorten zijn er?", 									catagory: catagories["Algemene kennis"]},
	{question: "Welke van de volgende dieren is geen insect?", 					catagory: catagories["Algemene kennis"]},
	{question: "Hoe heet de oudste luchtvaartmaatschappij ter wereld?", 		catagory: catagories["Algemene kennis"]},

	// media en amusement
	{question: "Hoe heeft het hoofd van de afdeling Griffoendor?", 				catagory: catagories["Media en Amusement"]},
	{question: "We kennen James Bond, we kennen Miss Moneypenny, we kennen Q. Maar wie was eigenlijk M in de James Bondfilms?", 						catagory: catagories["Media en Amusement"]},
	{question: "In welke film speelt de sneeuwpop Olaf?", 						catagory: catagories["Media en Amusement"]},
	{question: "De langstlopende musical in Nederland is Soldaat van Oranje. In welke stad in Nederland begint het verhaal?", 						catagory: catagories["Media en Amusement"]},
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


	{question: "-- Pauze --", 												catagory: catagories["Kerk"]},





	// AK en geschiedenis
	{question: "1600 – dan roept iedereen Slag bij Nieuwpoort, maar wie vochten er eigenlijk tegen wie?", catagory: catagories["Aardrijkskunde en Geschiedenis"]},
	{question: "Aan welke vijf landen grenst Roemenië?", catagory: catagories["Aardrijkskunde en Geschiedenis"]},
	{question: "Een groep jongeren gaat van Dieren met de trein naar Roemenië. Door welke landen komen zij met de trein?", catagory: catagories["Aardrijkskunde en Geschiedenis"]},
	{question: "Van welk land is Wenen de hoofdstad?", catagory: catagories["Aardrijkskunde en Geschiedenis"]},
	{question: "In welke stad eindigde de Oriënt Express?", catagory: catagories["Aardrijkskunde en Geschiedenis"]},
	{question: "Wat is de hoogste berg ter wereld?", catagory: catagories["Aardrijkskunde en Geschiedenis"]},
	{question: "Wat is in de geschiedenis het grootste land in landoppervlakte geweest?", catagory: catagories["Aardrijkskunde en Geschiedenis"]},
	{question: "Waar ligt Catanzaro?", 	catagory: catagories["Aardrijkskunde en Geschiedenis"]},
	{question: "Wat was dan het meest waardevolle bedrijf ooit?", catagory: catagories["Aardrijkskunde en Geschiedenis"]},
	{question: "Van welk land is dit de vlag?", catagory: catagories["Aardrijkskunde en Geschiedenis"], url: "images/uploads/7.png"},
	{question: "Van welk land is dit de vlag?", catagory: catagories["Aardrijkskunde en Geschiedenis"], url: "images/uploads/15.jpg"},
	{question: "Van welk land is dit de vlag?", catagory: catagories["Aardrijkskunde en Geschiedenis"], url: "images/uploads/9.png"},
	{question: "Van welk land is dit de vlag?", catagory: catagories["Aardrijkskunde en Geschiedenis"], url: "images/uploads/8.jpeg"},
	{question: "Van welk land is dit de vlag?", catagory: catagories["Aardrijkskunde en Geschiedenis"], url: "images/uploads/3.jpg"},

	{question: "-- catagoryholder --", 									catagory: catagories["Muziek"]},

	{question: "-- Pauze --", 												catagory: catagories["Kerk"]},





	// Cultuur
							{question: "Op het leesplankje (aap, noot, mies enzovoort) komen vier jongensnamen voor: Wim, Teun, Gijs en Kees. Welke van deze was op het plankje eigenlijk geen jongensnaam?", catagory: catagories["Cultuur"]},
	{question: "In welke strip speelt Krimson een rol?", catagory: catagories["Cultuur"]},
	{question: "Van wie zijn de volgende uitspraken: ‘Als je begrijpt wat ik bedoel’ en ‘Verzin toch eens een list, jonge vriend’.", catagory: catagories["Cultuur"]},
	{question: "Recent is aangetoond dat een zelfportret toehoort aan een bekende Nederlandse schilder. Wie was deze schilder?", catagory: catagories["Cultuur"]},
	{question: "Op welke universiteit ontstond Facebook?", catagory: catagories["Cultuur"]},
	{question: "Deze vraag gaat over het duivelsakkoord. Wat houdt het duivelsakkoord in?", catagory: catagories["Cultuur"]},
	{question: "Tot welke taalgroep hoort het Roemeens?", catagory: catagories["Cultuur"]},
	{question: "De Roemeense munteenheid is leu. Wat betekent dit woord?", catagory: catagories["Cultuur"]},
	{question: "Welke van de volgende kleuren is niet roodachtig?", catagory: catagories["Cultuur"]},
	{question: "Wat zijn de drie (ouderwetse) betekenissen van een Talent?", catagory: catagories["Cultuur"]},

	// Sport
	{question: "De laatste Elfstedentocht werd gereden in 1997. Maar wanneer werd de eerste officiële Elfstedentocht gehouden?", catagory: catagories["Sport"]},
	{question: "Iedereen kent bondscoaches als Guus Hiddink, Dick Advocaat, Louis van Gaal, Rinus Michels. Welke van de volgende namen was geen bondscoach?", catagory: catagories["Sport"]},
	{question: "Wanneer was hij wereldkampioen op de weg? Bonuspunt voor de naam van opa.", catagory: catagories["Sport"]},
	{question: "Welke sport speelt het amputatieteam?", catagory: catagories["Sport"]},
	{question: "Wie is de speler wiens doelpoging Nederland een WK-titel bij het voetbal had opgeleverd als de doelpaal niet in de weg had gestaan?", catagory: catagories["Sport"]},
	{question: "Welke coureur raakte zijn plek kwijt?", catagory: catagories["Sport"]},
	{question: "De wereldrecordhouder op de 100 meter sprint is Usain Bolt. Hoeveel kilometer per uur liep hij toen?", catagory: catagories["Sport"]},
	{question: "De Oostenrijker Max Hauke werd betrapt bij het ontvangen van bloeddoping. Welke sport beoefende Hauke?", catagory: catagories["Sport"]},
	{question: "Welke atleet is het gelukt om meerdere Olympisch goud te halen op zowel de sprint als verspringen?", catagory: catagories["Sport"]},
	{question: "Welke basketbal-legende is vrij recent overleden?", catagory: catagories["Sport"]},





	{question: "-- Pauze --", 												catagory: catagories["Kerk"]},




	// Politiek
	{question: "Welke kabinet is gesneuveld op het feit dat de regeringspartijen het niet eens konden worden over verlenging van de missie in Uruzgan (Afghanistan)?", catagory: catagories["Politiek"]},
	{question: "Hoe heet de huidige president van Italië?", catagory: catagories["Politiek"]},
	{question: "Je mag vanaf je 18de kiezen, vanaf welke leeftijd mag je gekozen worden?", catagory: catagories["Politiek"]},
	{question: "Wat is het meest gebruikte woord door John Bercow, de voormalige speaker van the House of Commons in Engeland?", catagory: catagories["Politiek"]},
	{question: "Welke landen maken aanspraak op de zuidpool - Antarctica? Noem er drie.", catagory: catagories["Politiek"]},
	{question: "Voor welk verdrag heeft het Nederlandse Plakaat van Verlatinghe uit 1581 als blauwdruk gediend?", catagory: catagories["Politiek"]},
	{question: "Het laatste politieke slachtoffer in de Nederlandse politiek. Wie was dat?", catagory: catagories["Politiek"]},
	{question: "De hoeveelste president van de Verenigde Staten is Donald Trump?", catagory: catagories["Politiek"]},
	{question: "Sinds wanneer zit Roemenië in de EU?", catagory: catagories["Politiek"]},
	{question: "Hoe heet de voorzitter van de Tweede Kamer?", catagory: catagories["Politiek"]},

	// lokaal
	{question: "Welke gemeentepartij is de grootste?", catagory: catagories["Lokaal"]},
	{question: "Hoe heette het grote bouwproject rond spoor en wegennet tussen Dieren Noord en Zuid?", catagory: catagories["Lokaal"]},
	{question: "Hoeveel lintjes regende het in de gemeente Rheden in 2019?", catagory: catagories["Lokaal"]},
	{question: "Waar in Dieren vinden we de Koningsmuur en buitengracht?", catagory: catagories["Lokaal"]},
	{question: "Waaraan ontleend deze Schweer bey der Beckehof zijn naam?", catagory: catagories["Lokaal"]},
	{question: "In de vorige locatie van het filmhuis werden alle films vertoond onder de keurende blikken van twee personen. Wie waren dat?", catagory: catagories["Lokaal"]},
	{question: "Hoeveel supermarkten telt Dieren?", catagory: catagories["Lokaal"]},
	{question: "Wat zijn namen van Dieren voordat het Dieren heette?", catagory: catagories["Lokaal"]},
	{question: "Wat is het verband tussen de Spelerij/Uitvinderij en de toegangswegen van het dorp Dieren?", catagory: catagories["Lokaal"]},
	{question: "Welke prinses is in Dieren geboren?", catagory: catagories["Lokaal"]}
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


