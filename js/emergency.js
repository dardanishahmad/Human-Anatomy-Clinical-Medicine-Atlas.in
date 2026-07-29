/* ==========================================
   HumanAtlas Emergency Guide Engine
========================================== */



const emergencyButtons =
document.querySelectorAll(
".emergency-btn"
);



const responseTitle =
document.getElementById(
"responseTitle"
);



const responseText =
document.getElementById(
"responseText"
);







/* ==========================
   Emergency Knowledge Base
========================== */


const emergencyData = {



chest:{


title:

"❤️ Chest Pain Response Awareness",


text:

"Chest pain can have many causes. Severe chest discomfort, pressure, difficulty breathing, sweating, or sudden weakness may require urgent medical attention. Contact emergency services when symptoms are serious."

},






bleeding:{


title:

"🩸 Severe Bleeding Response",


text:

"Apply appropriate pressure with a clean covering if possible, avoid unnecessary movement of the injured area, and seek emergency medical help for uncontrolled or severe bleeding."

},






burn:{


title:

"🔥 Burn Injury Response",


text:

"For minor burns, cooling the affected area with clean running water may help. Avoid applying harmful substances and seek medical evaluation for serious burns."

},






breathing:{


title:

"🫁 Breathing Difficulty Response",


text:

"Breathing problems can be serious. Keep the person comfortable, avoid unnecessary exertion, and seek urgent medical assistance if breathing difficulty is severe or sudden."

}



};









/* ==========================
   Button Interaction
========================== */


emergencyButtons.forEach(
button=>{


button.addEventListener(
"click",
()=>{


const topic =
button.dataset.topic;





const information =
emergencyData[topic];





if(!information)
return;





responseTitle.textContent =
information.title;



responseText.textContent =
information.text;






emergencyButtons.forEach(
btn=>{


btn.classList.remove(
"active"
);


});





button.classList.add(
"active"
);



});


});









/* ==========================
   Default Message
========================== */


window.addEventListener(
"DOMContentLoaded",
()=>{


responseTitle.textContent =
"Select Emergency Topic";



responseText.textContent =
"Choose an emergency category to view educational response information.";



});