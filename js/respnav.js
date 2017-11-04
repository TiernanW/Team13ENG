var others = document.getElementById("nav").getElementsByTagName("a");
var nav = document.getElementById("nav");
document.getElementById("menuButton").addEventListener("click", displayMenu);

function displayMenu() {
	if(nav.className == "topNav") {
		nav.className += " resp";
	} else {
		nav.className = "topNav";
	}
}

function displayMenu2() {
	for(i = 0; i < 5; i++) {
		if(others[i].className == "other-link") {
			others[i].className += "resp";
		} else {
			others[i].className = "other-link";
		}
	}
}