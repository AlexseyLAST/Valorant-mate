const nav = document.querySelector(".nav__menu");
const burger = document.querySelector(".nav__burger")

window.addEventListener("scroll", chechScroll);
function chechScroll(){
    let navPos = window.scrollY;
    
    if(navPos == 1){
        nav.classList.remove("active")
        burger.classList.remove("active")
    };
};

document.getElementById("see-more").onclick = function () {
    document.getElementById("see").scrollIntoView({behavior: "smooth"});
} 



