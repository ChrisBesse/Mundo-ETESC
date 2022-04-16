const searchInput = document.getElementById("SearchBar")

let publications = [...document.getElementsByClassName("ContentDiv")];

// console.log(publications);

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    publications.forEach(publication => {
        const isVisible = publication.innerText.toLowerCase().includes(value) 
        publication.classList.toggle("hide-cards", !isVisible)
    });

})
