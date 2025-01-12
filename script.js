function backToTop(){
	document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})