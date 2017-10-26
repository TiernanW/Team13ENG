document.getElementById("firstDrop").getElementsByTagName("h2")[0].addEventListener("click", openMenuOne);
						
function openMenuOne() {
	openMenu("firstDrop");
}

function openMenu(dropId) {
	var para = document.getElementById(dropId).getElementsByTagName("p")[0];
	if (para.style.display === "none") {
		para.style.display = "block";
	} else {
		para.style.display = "none";
	}
}