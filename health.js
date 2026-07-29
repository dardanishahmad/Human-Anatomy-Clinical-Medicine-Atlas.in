/* ==========================================
   HumanAtlas
   Health Dashboard Engine
========================================== */



const heightInput =
document.getElementById(
"heightInput"
);



const weightInput =
document.getElementById(
"weightInput"
);



const calculateButton =
document.getElementById(
"calculateBMI"
);



const bmiResult =
document.getElementById(
"bmiResult"
);



const timeline =
document.getElementById(
"healthTimeline"
);








/* ==========================
   BMI Calculator
========================== */


calculateButton.addEventListener(
"click",
()=>{


    const height =
    Number(heightInput.value);



    const weight =
    Number(weightInput.value);





    if(
    !height ||
    !weight
    ){


        bmiResult.textContent =
        "Please enter height and weight.";


        return;


    }





    const heightMeter =
    height / 100;



    const bmi =
    weight /
    (heightMeter * heightMeter);





    let category;



    if(bmi < 18.5){


        category =
        "Underweight";


    }


    else if(bmi < 25){


        category =
        "Healthy range";


    }


    else if(bmi < 30){


        category =
        "Overweight";


    }


    else{


        category =
        "Obesity range";


    }






    const message =

    `BMI: ${bmi.toFixed(1)}
    (${category})`;



    bmiResult.textContent =
    message;





    saveHealthRecord(
    message
    );



});








/* ==========================
   Save Health History
========================== */


function saveHealthRecord(data){



    let history =

    JSON.parse(

        localStorage.getItem(
        "humanAtlasHealth"
        )

    )
    || [];





    const record = {


        date:

        new Date()
        .toLocaleDateString(),



        text:data


    };





    history.unshift(
    record
    );





    localStorage.setItem(

        "humanAtlasHealth",

        JSON.stringify(history)

    );





    renderTimeline();



}








/* ==========================
   Display Timeline
========================== */


function renderTimeline(){


    if(!timeline)
    return;




    const history =

    JSON.parse(

        localStorage.getItem(
        "humanAtlasHealth"
        )

    )
    || [];





    timeline.innerHTML="";





    if(history.length===0){


        timeline.innerHTML = `

        <div class="timeline-item">

        <span>✓</span>

        No health records yet.

        </div>

        `;


        return;


    }







    history
    .slice(0,10)
    .forEach(item=>{



        const element =

        document.createElement(
        "div"
        );



        element.className =
        "timeline-item";





        element.innerHTML = `


        <span>
        ✓
        </span>


        <div>


        <strong>
        ${item.date}
        </strong>


        <br>


        ${item.text}


        </div>


        `;




        timeline.appendChild(
        element
        );



    });



}








/* ==========================
   Load Previous Records
========================== */


window.addEventListener(

"DOMContentLoaded",

()=>{


    renderTimeline();


});