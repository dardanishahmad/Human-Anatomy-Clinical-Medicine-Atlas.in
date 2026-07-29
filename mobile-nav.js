const openMenu =
document.querySelector(".mobile-toggle");


const closeMenu =
document.querySelector(".mobile-close");


const panel =
document.querySelector(".mobile-panel");



openMenu.onclick=()=>{

panel.classList.add("active");

};



closeMenu.onclick=()=>{

panel.classList.remove("active");

};



panel.querySelectorAll("a")
.forEach(link=>{


link.onclick=()=>{

panel.classList.remove("active");

};


});