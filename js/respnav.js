var nav = document.getElementById("nav");
var arefs = document.getElementById("nav").getElementsByTagName("a");
document.getElementById("menuButton").addEventListener("click", displayMenu);

var topB = document.getElementById("top");

function colorNav() {
	var offset = window.pageYOffset;
	if(offset > 80 || window.innerWidth < 600) {
		topB.style.backgroundColor = "#fff";
		for(i = 0; i < arefs.length; i++) {
			arefs[i].style.color = "#222";
		}
	} else {
		topB.style.backgroundColor = "transparent";
		for(i = 0; i < arefs.length; i++) {
			arefs[i].style.color = "#fff";
		}
	}
}

window.addEventListener('scroll', colorNav);

function displayMenu() {
	if(nav.className == "topNav") {
		nav.className += " resp";
	} else {
		nav.className = "topNav";
	}
}