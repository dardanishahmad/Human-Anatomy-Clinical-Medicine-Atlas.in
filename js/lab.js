/* ==========================================
   HumanAtlas Medical Imaging Laboratory
   Interactive Engine
========================================== */



const scanType =
document.getElementById(
"scanType"
);



const imageArea =
document.getElementById(
"medicalImageArea"
);



const anatomyInfo =
document.getElementById(
"anatomyInfo"
);



const learningInfo =
document.getElementById(
"learningInfo"
);



const useList =
document.getElementById(
"useList"
);







/* ==========================
   Imaging Database
========================== */


const imagingModes = {



xray:{


name:"X-Ray Mode",


icon:"🦴",


anatomy:

"X-ray imaging is commonly used to visualize bones, joints, and chest structures.",


learning:

"X-rays use electromagnetic radiation to create images based on differences in tissue density.",


uses:[

"Bone fractures",

"Joint evaluation",

"Chest imaging",

"Dental examination"

]


},






mri:{


name:"MRI Mode",


icon:"🧠",


anatomy:

"MRI provides detailed images of soft tissues such as the brain, spinal cord, muscles, and organs.",


learning:

"MRI uses strong magnetic fields and radio waves to generate detailed internal images without ionizing radiation.",


uses:[

"Brain structure evaluation",

"Spinal imaging",

"Soft tissue assessment",

"Organ visualization"

]


},






ct:{


name:"CT Scan Mode",


icon:"🔵",


anatomy:

"CT scans create detailed cross-sectional images of body structures.",


learning:

"Computed tomography combines multiple X-ray images to create detailed internal views.",


uses:[

"Trauma assessment",

"Internal bleeding evaluation",

"Lung imaging",

"Complex anatomy visualization"

]


}



};







/* ==========================
   Update Viewer
========================== */


function updateScan(mode){



const data =
imagingModes[mode];



if(!data)
return;






scanType.textContent =
data.name;



imageArea.innerHTML = `


<div class="scan-placeholder">


<div>

${data.icon}

</div>


<p>

${data.name}

</p>


</div>


`;






anatomyInfo.textContent =
data.anatomy;



learningInfo.textContent =
data.learning;





useList.innerHTML="";



data.uses.forEach(use=>{


const li =
document.createElement(
"li"
);


li.textContent =
use;


useList.appendChild(
li
);


});



}








/* ==========================
   Control Buttons
========================== */


document
.querySelectorAll(
".image-controls button"
)
.forEach(button=>{


button.addEventListener(
"click",
()=>{


document
.querySelectorAll(
".image-controls button"
)
.forEach(btn=>{


btn.classList.remove(
"active"
);


});




button.classList.add(
"active"
);




updateScan(
button.dataset.mode
);



});


});







/* ==========================
   Library Buttons
========================== */


document
.querySelectorAll(
".scan-grid button"
)
.forEach(button=>{


button.addEventListener(
"click",
()=>{


const text =
button.textContent
.toLowerCase();



if(text.includes("x-ray")){


updateScan("xray");


}


else if(
text.includes("mri")
){


updateScan("mri");


}


else{


updateScan("ct");


}



});


});







/* ==========================
   Start Default Mode
========================== */


window.addEventListener(
"DOMContentLoaded",
()=>{


updateScan(
"xray"
);



});