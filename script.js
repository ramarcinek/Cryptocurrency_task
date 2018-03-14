if (screen.width < 768) {
	document.location = "mobile_index.html";
}

let eye = document.querySelector("#oko");
let scales = document.querySelector("#waga");

eye.addEventListener("mouseover", function(){
	this.setAttribute("src", "img/okohover.png")
});

eye.addEventListener("mouseout", function(){
	this.setAttribute("src", "img/oko.png")
});

scales.addEventListener("mouseover", function(){
	this.setAttribute("src", "img/wagahover.png")
});

scales.addEventListener("mouseout", function(){
	this.setAttribute("src", "img/waga.png")
});