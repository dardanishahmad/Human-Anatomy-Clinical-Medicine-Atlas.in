/* ==========================================
   HumanAtlas
   Disease & Medicine Database Engine
========================================== */



let diseases = [];

let medicines = [];





/* ==========================
   Detect Current Page
========================== */


const isDiseasePage =
document.getElementById("diseaseGrid");


const isMedicinePage =
document.getElementById("medicineGrid");







/* ==========================
   Load JSON Data
========================== */


async function loadDatabase(){


    try{


        if(isDiseasePage){


            const response =
            await fetch(
            "data/diseases.json"
            );


            diseases =
            await response.json();


            renderDiseases(
            diseases
            );


        }



        if(isMedicinePage){


            const response =
            await fetch(
            "data/medicines.json"
            );


            medicines =
            await response.json();


            renderMedicines(
            medicines
            );


        }



        console.log(
        "Clinical database loaded 🧬"
        );



    }


    catch(error){


        console.error(
        "Database loading failed:",
        error
        );


    }


}





loadDatabase();







/* ==========================
   Disease Cards
========================== */


function renderDiseases(data){


    const grid =
    document.getElementById(
    "diseaseGrid"
    );


    grid.innerHTML="";



    data.forEach(item=>{


        const card =
        document.createElement(
        "div"
        );


        card.className =
        "database-card";



        card.innerHTML = `


        <div class="card-icon">
        🦠
        </div>


        <h2>
        ${item.name}
        </h2>


        <div class="system">
        ${item.system}
        </div>


        <p>
        ${item.description}
        </p>


        <div class="card-tags">

        ${item.medicines
        .slice(0,3)
        .map(
        med=>`
        <span>${med}</span>
        `
        )
        .join("")}

        </div>


        `;



        card.onclick =
        ()=>openDiseaseModal(item);



        grid.appendChild(card);



    });



}








/* ==========================
   Medicine Cards
========================== */


function renderMedicines(data){


    const grid =
    document.getElementById(
    "medicineGrid"
    );



    grid.innerHTML="";



    data.forEach(item=>{


        const card =
        document.createElement(
        "div"
        );



        card.className =
        "database-card";



        card.innerHTML = `


        <div class="card-icon">
        💊
        </div>


        <h2>
        ${item.name}
        </h2>


        <div class="system">
        ${item.class}
        </div>


        <p>
        ${item.description}
        </p>


        <div class="card-tags">

        <span>
        ${item.system}
        </span>


        </div>


        `;



        card.onclick =
        ()=>openMedicineModal(item);



        grid.appendChild(card);



    });


}








/* ==========================
   Disease Modal
========================== */


function openDiseaseModal(item){


    const modal =
    document.getElementById(
    "diseaseModal"
    );


    if(!modal)
    return;



    document.getElementById(
    "modalTitle"
    )
    .textContent =
    item.name;



    document.getElementById(
    "modalDescription"
    )
    .textContent =
    item.description;



    fillList(
    "modalSymptoms",
    item.symptoms
    );


    fillList(
    "modalDiagnosis",
    item.diagnosis
    );


    fillList(
    "modalMedicines",
    item.medicines
    );



    modal.classList.add(
    "show"
    );


}








/* ==========================
   Medicine Modal
========================== */


function openMedicineModal(item){


    const modal =
    document.getElementById(
    "medicineModal"
    );


    if(!modal)
    return;



    document.getElementById(
    "medicineTitle"
    )
    .textContent =
    item.name;



    document.getElementById(
    "medicineClass"
    )
    .textContent =
    item.class;



    document.getElementById(
    "medicineMechanism"
    )
    .textContent =
    item.mechanism;



    fillList(
    "medicineUses",
    item.uses
    );



    fillList(
    "medicineSideEffects",
    item.sideEffects
    );


    fillList(
    "medicineDiseases",
    item.relatedDiseases
    );



    modal.classList.add(
    "show"
    );


}







/* ==========================
   List Generator
========================== */


function fillList(id,data){


    const element =
    document.getElementById(id);



    if(!element)
    return;



    element.innerHTML="";



    data.forEach(value=>{


        const li =
        document.createElement(
        "li"
        );


        li.textContent =
        value;


        element.appendChild(li);



    });


}







/* ==========================
   Close Modals
========================== */


document.addEventListener(
"click",
event=>{


    if(
    event.target.classList.contains(
    "close-btn"
    )
    ){


        document
        .querySelectorAll(".modal")
        .forEach(
        modal=>
        modal.classList.remove(
        "show"
        )
        );


    }


});








/* ==========================
   Search Engine
========================== */


function searchDatabase(value){


    value =
    value.toLowerCase();



    if(isDiseasePage){


        const result =
        diseases.filter(item=>

        item.name
        .toLowerCase()
        .includes(value)

        ||

        item.system
        .toLowerCase()
        .includes(value)

        );


        renderDiseases(result);


    }





    if(isMedicinePage){


        const result =
        medicines.filter(item=>

        item.name
        .toLowerCase()
        .includes(value)

        ||

        item.class
        .toLowerCase()
        .includes(value)

        );


        renderMedicines(result);


    }



}





const searchBoxes =
document.querySelectorAll(
"input[type='search']"
);



searchBoxes.forEach(input=>{


    input.addEventListener(
    "input",
    ()=>{


        searchDatabase(
        input.value
        );


    });


});







/* ==========================
   Filters
========================== */


document
.querySelectorAll(
".filter-buttons button"
)
.forEach(button=>{


button.addEventListener(
"click",
()=>{


    const filter =
    button.dataset.filter;



    if(filter==="all"){


        if(isDiseasePage)
        renderDiseases(diseases);



        if(isMedicinePage)
        renderMedicines(medicines);



        return;


    }





    if(isDiseasePage){


        renderDiseases(

        diseases.filter(
        item=>
        item.system===filter
        )

        );


    }



    if(isMedicinePage){


        renderMedicines(

        medicines.filter(
        item=>
        item.system===filter
        )

        );


    }



});


});