var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    setTimeout(closepreloader, 2000);
    loader.style.display = "none";
});