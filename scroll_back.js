//Retour haut de page

let hiddenDiv = document.getElementById("hidden-div");
let firstPart = document.getElementById("first_part")


const goToTop = () => {
    firstPart.scrollIntoView({behavior: "smooth"});
  };

document.querySelector(".fa-circle-arrow-up").addEventListener("click", goToTop)



let burger = document.querySelector(".burger")
let menuBurger = document.querySelector("#hidden-div")

/*
burger.addEventListener("click", () =>{
    menuBurger.style.display = 'block'
    if (menuBurger.style.display == 'block'){
        burger.addEventListener("click", () =>{
        menuBurger.style.display = 'none'
    })}})
*/

burger.addEventListener("click", () =>{
    menuBurger.classList.toggle('visible-div');
})
