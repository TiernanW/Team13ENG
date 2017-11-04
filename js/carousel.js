var slide = 0;
var slides = document.getElementsByClassName("carSlide");
ticker();
			
function upSlide() {
	slide += 1;
	if (slide > slides.length - 1) {
		slide = 0;
	}
	changeSlide(slide);
}

function downSlide() {
	slide -= 1;
	if (slide < 0) {
		slide = slides.length - 1;
	}
	changeSlide(slide);
}

function changeSlide(n) {
	var i;
	for(i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[n].style.display = "block";
}

function ticker() {
	setTimeout(ticker, 6400);
	upSlide();
}