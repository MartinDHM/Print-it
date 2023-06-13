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
/* élément à modifiés*/

const flecheGauche = document.querySelector(".arrow_left")
flecheGauche.addEventListener("click", slidegauche );

const flecheDroite = document.querySelector(".arrow_right")
flecheDroite.addEventListener("click", slidedroite);

const bannerImage = document.querySelector(".banner-img");

const bannerTitle = document.querySelector("#banner>p")

/* creation des points*/
const dotsDiv = document.querySelector(".dots")

for ( let i = 0; i < slides.length; i++) {
	
	const dot = document.createElement("div")
	dot.className = "dot"

	dotsDiv.appendChild(dot)
}

let dotselect = document.querySelectorAll(".dot")
dotselect[i].classList.add("dot_selected")

/* fonction fleche de droite*/
function slidedroite() {
	
	dotselect[i].classList.remove("dot_selected");
	// si i est supérieur ou égal à la longueur du tableau slides alors on revient au premier slide
	if (i >= slides.length - 1) {
		i = 0
	}
	else {
		// sinon on incrémente i 
		i++
	}
	// On ajoute la classe "dot_selected" au nouveau dot correspondant au slide affiché
	dotselect[i].classList.add("dot_selected");
	
	// On change l'image et la titre
	bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
	
	bannerTitle.innerHTML = slides[i].tagLine;
	
	}
		console.log(i)
	
		
		

/* fonction fleche de gauche*/
function slidegauche() {
	dotselect[i].classList.remove("dot_selected");
	// si i est inférieur ou égal à la longueur du tableau slides alors on revient au premier slide
	if (i <= 0) {
		i = slides.length - 1;
	} 
	else {
		// sinon on décrémente i 
		i--			
	}	
	
	// On ajoute la classe "dot_selected" au nouveau dot correspondant au slide affiché
	
	dotselect[i].classList.add("dot_selected");
	
	// On change l'image et la titre
	bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
	
	bannerTitle.innerHTML = slides[i].tagLine;
	
	
}

console.log(i)
  

