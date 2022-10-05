const hamMenu = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".navbar");
console.log(hamMenu);
console.log(navBar);

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("toggle-hammenu");
    navBar.classList.toggle("toggle-navbar");
});

function removeClass() {
    if(window.innerWidth >= 790) {
        navBar.classList.remove("toggle-navbar");
        hamMenu.classList.remove("toggle-hammenu");
    }
}


window.addEventListener("resize", () => {
    removeClass();
});

