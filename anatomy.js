/* ==========================================
   HumanAtlas
   Interactive Anatomy Controller
========================================== */


/* ==========================
   Load Anatomy Database
========================== */


let anatomyData = {};



async function loadAnatomy(){


    try {


        const response =
        await fetch(
        "data/anatomy.json"
        );


        anatomyData =
        await response.json();



        console.log(
        "Anatomy database loaded 🧬"
        );



    }

    catch(error){


        console.error(
        "Unable to load anatomy data:",
        error
        );


    }



}



loadAnatomy();







/* ==========================
   Elements
========================== */


const organButtons =
document.querySelectorAll(".organ-btn");



const organName =
document.getElementById(
"organName"
);



const organSystem =
document.getElementById(
"organSystem"
);



const organDescription =
document.getElementById(
"organDescription"
);



const organFunctions =
document.getElementById(
"organFunctions"
);



const organDiseases =
document.getElementById(
"organDiseases"
);



const organMedicines =
document.getElementById(
"organMedicines"
);







/* ==========================
   Display Organ Information
========================== */


function showOrgan(organ){


    const data =
    anatomyData[organ];



    if(!data)
        return;




    organName.textContent =
    data.name;



    organSystem.textContent =
    data.system;



    organDescription.textContent =
    data.description;





    updateList(
        organFunctions,
        data.functions
    );



    updateList(
        organDiseases,
        data.diseases
    );



    updateList(
        organMedicines,
        data.medicines
    );





}






/* ==========================
   Update Lists
========================== */


function updateList(element,items){


    element.innerHTML = "";



    items.forEach(item=>{


        const li =
        document.createElement(
        "li"
        );


        li.textContent =
        item;


        element.appendChild(li);



    });


}








/* ==========================
   Organ Click Events
========================== */


organButtons.forEach(button=>{


    button.addEventListener(
    "click",
    ()=>{


        const organ =
        button.dataset.organ;



        showOrgan(organ);



        highlightOrgan(button);



    });


});







/* ==========================
   Highlight Selection
========================== */


function highlightOrgan(active){


    organButtons.forEach(btn=>{


        btn.classList.remove(
        "selected"
        );


    });



    active.classList.add(
    "selected"
    );



}







/* ==========================
   Organ Search
========================== */


const searchInput =
document.getElementById(
"organSearch"
);



if(searchInput){



searchInput.addEventListener(
"input",
()=>{


    const value =
    searchInput.value
    .toLowerCase();



    organButtons.forEach(button=>{


        const name =
        button.innerText
        .toLowerCase();



        if(name.includes(value)){


            button.style.opacity =
            "1";


            button.style.transform =
            "scale(1.1)";


        }


        else{


            button.style.opacity =
            ".35";


            button.style.transform =
            "scale(1)";


        }



    });



});


}








/* ==========================
   Keyboard Navigation
========================== */


document.addEventListener(
"keydown",
(event)=>{


    const key =
    event.key.toLowerCase();



    if(anatomyData[key]){


        showOrgan(key);


    }


});








/* ==========================
   Initial State
========================== */


window.addEventListener(
"load",
()=>{


    setTimeout(()=>{


        if(anatomyData.brain){


            showOrgan(
            "brain"
            );


        }


    },1000);


});