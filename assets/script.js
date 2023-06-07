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
flecheGauche.addEventListener("click", slidegauche );

const flecheDroite = document.querySelector(".arrow_right")
flecheDroite.addEventListener("click", slidedroite);

/* fonction fleche de droite*/
function slidedroite() {

	if (i>2){
		let pointNotTarget = document.getElementById(i)
		pointNotTarget.setAttribute("class","dot")
		
		i=0
		
		let pointTarget = document.getElementById(i)
		pointTarget.setAttribute("class","dot dot_selected")
	}
	
	else {
		let pointNotTarget = document.getElementById(i)
		pointNotTarget.setAttribute("class","dot")

		i=i+1

		let pointTarget = document.getElementById(i)
		pointTarget.setAttribute("class","dot dot_selected")
		
	}
		console.log(i)
	
	

	let fondBanniere = document.querySelector(".banner-img") 
	fondBanniere.setAttribute("src","./assets/images/slideshow/"+slides[i].image)
	
	let texteBanniere = document.querySelector(".text")
	texteBanniere.innerHTML= slides[i].tagLine
	
	let point = document.querySelector(".dots")
	}	

/* fonction fleche de gauche*/
function slidegauche() {
	if (i<1){
		let pointNotTarget = document.getElementById(i)
		pointNotTarget.setAttribute("class","dot")
		
		i=3

		let pointTarget = document.getElementById(i)
		pointTarget.setAttribute("class","dot dot_selected")
	}
	else {
		let pointNotTarget = document.getElementById(i)
		pointNotTarget.setAttribute("class","dot")

		i=i-1

		let pointTarget = document.getElementById(i)
		pointTarget.setAttribute("class","dot dot_selected")
	}
	console.log(i)
	let fondBanniere = document.querySelector(".banner-img") 
	fondBanniere.setAttribute("src","./assets/images/slideshow/"+slides[i].image)
	
	let texteBanniere = document.querySelector(".text")
	texteBanniere.innerHTML= slides[i].tagLine
	
}

  

