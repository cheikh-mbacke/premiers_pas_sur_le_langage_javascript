const slides = [
	{
		image:"slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image:"slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image:"slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image:"slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


//Création des BulletPoints
let dotContainer = document.querySelector("#banner .dots")
function addBulletPoints() {
	for(let i = 0; i < slides.length; i++ ) {
		//création de la div .dot
	const bulletpoint = document.createElement("div")
	//ajout de la classe .dot à la div
	bulletpoint.classList.add("dot")
	//placement de la div dans le container .dots
	dotContainer.appendChild(bulletpoint)
	}
}
//appel de la fonction
addBulletPoints()
console.log(dotContainer)

//définir la position dans le slider
let sliderPosition = 0
//incrémenter le slider
function sliderPositionPlus() {
	if (sliderPosition == 3) {
		sliderPosition = 0
	} else {
		sliderPosition ++
	}
}
//Décrémenter le slider
function sliderPositionMoins() {
	if (sliderPosition == 0) {
		sliderPosition = 3
	} else {
		sliderPosition --
	}
}
//Créer une liste des points créés pour le slider
let dotNumber = dotContainer.children
console.log(dotNumber)
//Création de la classe pour montrer le point sélectionné
function addClass() {
dotNumber[sliderPosition].classList.add("dot_selected")
}
//suppression de la classe
function deleteClass() {
	dotNumber[sliderPosition].classList.remove("dot_selected")
}
//placement de la classe sur le premier point au chargement
addClass()

//Récupération de la source de l'image afin de la modifier directement
function changeImage () {
	document.getElementById("bannerImage").src="./assets/images/slideshow/" + slides[sliderPosition].image
	console.log(slides[sliderPosition].image)
}
//On fait exactement la même chose pour l'innerHTML du texte
function changeText () {
	document.getElementById("bannerText").innerHTML = slides[sliderPosition].tagLine
	console.log(bannerText.innerHTML)
}

//Récupération de la flèche de gauche + eventlistener
let arrowLeft = document.querySelector("#banner .arrow_left")
arrowLeft.addEventListener("click", () => {
	console.log("clic sur la flèche de gauche")
	deleteClass()
	sliderPositionMoins()
	addClass()
	changeImage()
	changeText()
	console.log(sliderPosition)
});

//Récupération de la flèche de droite + eventlistener
let arrowRight = document.querySelector("#banner .arrow_right")
arrowRight.addEventListener("click", () => {
	console.log("clic sur la flèche de droite")
	deleteClass()
	sliderPositionPlus()
	addClass()
	changeImage()
	changeText()
	console.log(sliderPosition)
});