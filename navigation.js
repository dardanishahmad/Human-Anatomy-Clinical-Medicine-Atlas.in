const menuBtn =
document.querySelector(".mobile-menu-btn");


const closeBtn =
document.querySelector(".close-menu");


const mobileMenu =
document.querySelector(".mobile-menu");



menuBtn.onclick = () => {

mobileMenu.classList.add("active");

};



closeBtn.onclick = () => {

mobileMenu.classList.remove("active");

};



document
.querySelectorAll(".mobile-menu a")
.forEach(link => {


link.onclick = () => {

mobileMenu.classList.remove("active");

};


});

