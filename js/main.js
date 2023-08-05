
window.addEventListener('scroll', function(ev){
    let nav = document.querySelector("nav");

    nav.classList.toggle("pined", window.scrollY > 0);
});

function MostrarMenu(){
    let btnBurger = document.getElementById("icon");
    let menu = document.querySelector(".menu");

    btnBurger.addEventListener('click', function(){
        menu.classList.toggle("show");
    })
}

MostrarMenu();

console.log("hola mundo!")