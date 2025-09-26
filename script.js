let buttonPics = document.querySelector("#buttonPics");
let buttonPosts = document.querySelector("#buttonPosts");
let buttonPlus = document.querySelector("#buttonPlus");

let divPics = document.querySelector("#divPics");
let divPosts = document.querySelector("#divPosts");

buttonPics.addEventListener("click", (event) => {
    divPics.classList.toggle("ocultar");
});

buttonPosts.addEventListener("click", (event) => {
    divPosts.classList.toggle("ocultar");
});


// Modo oscuro
let darkButton = document.querySelector("#dark-button");

darkButton.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
})

// Boton de likes
contadorLikes = document.querySelector(".contador-likes");
let contador = 0;
let clickear = false;

buttonPlus.addEventListener("click", (event) => {
    if (clickear) return;
    clickear = true;
    contador++;
    contadorLikes.classList.toggle("ocultar");
    contadorLikes.innerHTML = "Likes: " + contador;

    setTimeout(() => {
        contadorLikes.classList.toggle("ocultar");
        clickear = false;
    },500);
});
