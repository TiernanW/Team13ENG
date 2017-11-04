var droppers = document.getElementsByClassName("drop-info");

var workIt = function(dropId) {
	var para = document.getElementById(dropId).getElementsByTagName("p")[0];
	var wholeBlock = document.getElementById(dropId).getElementsByTagName("h2")[0];
	if (para.style.display === "none") {
		para.style.display = "block";
		wholeBlock.style.backgroundImage = "url('images/up-arrow.png')";
	} else {
		para.style.display = "none";
		wholeBlock.style.backgroundImage = "url('images/down-arrow.png')";
	}
}

for (var i = 0; i < droppers.length; i++) {
	droppers[i].getElementsByTagName("h2")[0].addEventListener("click", workIt.bind(this, droppers[i].id));
	droppers[i].getElementsByTagName("p")[0].style.display = "none";
}