let i = 0
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
	
]
const flecheGauche = document.querySelector(".arrow_left")
flecheGauche.addEventListener("click", slidedroite );

const flecheDroite = document.querySelector(".arrow_right")
flecheDroite.addEventListener("click", slidedroite);

function slidedroite() {
	if (i>2){
		i=0
	}
	else {
		i=i+1
	}
	console.log(slides[i])
	let fondBanniere = document.querySelector(".banner-img") 
	fondBanniere.setAttribute("src","./assets/images/slideshow/"+slides[i].image)	
}

  

