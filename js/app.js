/* ==========================================
   HumanAtlas
   Main Application JavaScript
========================================== */


/* ==========================
   Loader Control
========================== */


window.addEventListener("load", () => {


    const loader = document.querySelector(".loader");


    setTimeout(() => {


        if(loader){

            loader.style.display = "none";

        }


    },3500);



});






/* ==========================
   Animated Statistics Counter
========================== */


const counters = document.querySelectorAll("[data-count]");


let counterStarted = false;



function startCounters(){


    if(counterStarted)
        return;


    counters.forEach(counter => {


        const target =
        Number(counter.dataset.count);


        let current = 0;


        const increment =
        Math.ceil(target / 80);



        const update = () => {


            current += increment;



            if(current < target){


                counter.textContent =
                current;


                requestAnimationFrame(update);


            }

            else{


                counter.textContent =
                target + "+";


            }



        };


        update();



    });



    counterStarted = true;


}





const statsSection =
document.querySelector(".statistics");



if(statsSection){


    window.addEventListener("scroll",()=>{


        const position =
        statsSection.getBoundingClientRect().top;


        const screen =
        window.innerHeight;



        if(position < screen - 100){


            startCounters();


        }



    });


}






/* ==========================
   Scroll Reveal
========================== */


const revealElements =
document.querySelectorAll(
".system-card, .feature-card, .stat-card"
);



const revealOnScroll = () => {


    revealElements.forEach(element=>{


        const top =
        element.getBoundingClientRect().top;


        const windowHeight =
        window.innerHeight;



        if(top < windowHeight - 80){


            element.classList.add(
            "active"
            );


            element.style.opacity="1";


        }



    });



};



window.addEventListener(
"scroll",
revealOnScroll
);


revealOnScroll();







/* ==========================
   Mouse Glow Effect
========================== */


const cursor =
document.createElement("div");


cursor.className =
"cursor-glow";


document.body.appendChild(cursor);




document.addEventListener(
"mousemove",
(event)=>{


    cursor.style.left =
    event.clientX + "px";


    cursor.style.top =
    event.clientY + "px";



});







/* ==========================
   Theme Switch Foundation
========================== */


const themeButton =
document.querySelector(".theme-btn");



let lightMode = false;



if(themeButton){


themeButton.addEventListener(
"click",
()=>{


    lightMode =
    !lightMode;



    if(lightMode){


        document.body.style.background =
        "#f8fafc";


        document.body.style.color =
        "#0f172a";


        themeButton.textContent =
        "☾";


    }


    else{


        document.body.style.background =
        "#050b18";


        document.body.style.color =
        "#ffffff";


        themeButton.textContent =
        "◐";


    }



});


}






/* ==========================
   Smooth Anchor Navigation
========================== */


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


    link.addEventListener(
    "click",
    function(event){


        const target =
        document.querySelector(
        this.getAttribute("href")
        );


        if(target){


            event.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }



    });


});







/* ==========================
   Button Ripple Effect
========================== */


const buttons =
document.querySelectorAll(
".primary-btn, .secondary-btn"
);



buttons.forEach(button=>{


    button.addEventListener(
    "click",
    function(event){


        const ripple =
        document.createElement("span");


        ripple.className =
        "ripple";


        const rect =
        this.getBoundingClientRect();



        ripple.style.left =
        event.clientX - rect.left + "px";


        ripple.style.top =
        event.clientY - rect.top + "px";


        this.appendChild(ripple);



        setTimeout(()=>{


            ripple.remove();


        },600);



    });


});







console.log(
"HumanAtlas Interface Loaded Successfully 🧬"
);