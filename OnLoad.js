$(window).on('load', function () {
    console.log("page loaded");
    document.querySelectorAll('.hide-while-loading').forEach(element => element.style.display = "block");
});