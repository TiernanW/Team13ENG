var droppers = document.getElementsByClassName("drop-info");

var workIt = function(dropId) {
	var para = document.getElementById(dropId).getElementsByClassName("expanse")[0];
	var wholeBlock = document.getElementById(dropId).getElementsByTagName("h2")[0];
	if (para.style.display === "none") {
		para.style.display = "block";
		wholeBlock.style.backgroundImage = "url('img/up-arrow.png')";
	} else {
		para.style.display = "none";
		wholeBlock.style.backgroundImage = "url('img/down-arrow.png')";
	}
}

droppers[0].getElementsByTagName("h2")[0].addEventListener("click", workIt.bind(this, droppers[0].id));
droppers[0].getElementsByClassName("expanse")[0].style.display = "block";

for (var i = 1; i < droppers.length; i++) {
	droppers[i].getElementsByTagName("h2")[0].addEventListener("click", workIt.bind(this, droppers[i].id));
	droppers[i].getElementsByClassName("expanse")[0].style.display = "none";
}