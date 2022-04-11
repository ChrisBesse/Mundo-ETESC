
const Artigoptbr = document.getElementById("Artigoptbr");
const Artigoesp = document.getElementById("Artigoesp");
const Artigoen = document.getElementById("Artigoen");

function ShowEspanholTranslation() {
	Artigoptbr.style.display = "none";
	Artigoen.style.display = "none";
	Artigoesp.style.display = "block";

}
function ShowBrasilTranslation() {
	Artigoen.style.display = "none";
	Artigoesp.style.display = "none";
	Artigoptbr.style.display = "block";
}
function ShowInglesTranslation() {
	Artigoptbr.style.display = "none";
	Artigoesp.style.display = "none";
	Artigoen.style.display = "block";
}

darktoggle2.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        darktoggle.innerHTML = "Light mode"

        // icon.src = "../img/SunIcon.png"
        // logo.src = "../img/logoWhite.png"
    } else {
        darktoggle.innerHTML = "Dark mode"

        // icon.src = "../img/MoonIcon.png"
        // logo.src = "../img/MainIcon.png"
    }
}