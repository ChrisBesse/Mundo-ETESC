// Making archor tag scroll smoother when clinking
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Showing or closing the menu div in smaller screen devices
const navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// Changing Header properties when scrolling
const header = document.querySelector('.HeaderClass');

window.onscroll = function(){
    var top = window.scrollY;
    // console.log(top)

    if (top >= 100){
        header.classList.add('active');
    } else {
        header.classList.remove('active');

    }

}















