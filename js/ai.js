/* ==========================================
   HumanAtlas AI Assistant Engine
========================================== */



const chatMessages =
document.getElementById(
"chatMessages"
);



const questionInput =
document.getElementById(
"userQuestion"
);



const sendButton =
document.getElementById(
"sendQuestion"
);






/* ==========================
   Medical Knowledge Base
========================== */


const medicalKnowledge = {


"diabetes": {

title:"Diabetes Mellitus",

response:
"Diabetes is a metabolic condition where blood glucose levels become elevated because of reduced insulin production, reduced insulin effectiveness, or both.\n\nCommon types include Type 1 diabetes and Type 2 diabetes.\n\nCommon management approaches include lifestyle changes, blood glucose monitoring, and medicines such as insulin or metformin under medical supervision."

},



"heart": {

title:"Heart Function",

response:
"The heart is a muscular organ that pumps blood throughout the body.\n\nIt supplies oxygen and nutrients to tissues and removes carbon dioxide and waste products.\n\nThe cardiovascular system includes the heart, arteries, veins, and blood vessels."

},



"brain": {

title:"Brain",

response:
"The brain is the control center of the nervous system.\n\nIt manages thoughts, memory, emotions, movement, sensation, and many automatic body functions such as breathing and temperature regulation."

},



"asthma": {

title:"Asthma",

response:
"Asthma is a chronic inflammatory airway condition that can cause wheezing, coughing, chest tightness, and difficulty breathing.\n\nTreatment commonly involves inhaled medicines such as bronchodilators and corticosteroids prescribed by healthcare professionals."

},



"kidney": {

title:"Kidneys",

response:
"The kidneys filter blood, remove waste products, regulate fluid balance, and help control electrolyte levels.\n\nHealthy kidney function is essential for maintaining internal balance."

},



"medicine": {

title:"Medicines",

response:
"Medicines are substances used to prevent, manage, or treat medical conditions.\n\nDifferent medicines work through different mechanisms, and proper selection depends on diagnosis, patient factors, and medical guidance."

},



"dna": {

title:"DNA & Genetics",

response:
"DNA is the biological molecule that stores genetic information.\n\nGenes within DNA provide instructions for building proteins that influence traits, development, and body functions."

}


};







/* ==========================
   Send Message
========================== */


sendButton.addEventListener(
"click",
sendQuestion
);



questionInput.addEventListener(
"keypress",
(event)=>{


    if(event.key==="Enter"){

        sendQuestion();

    }


});







function sendQuestion(){


    const question =
    questionInput.value.trim();



    if(question==="")
    return;



    addMessage(
    question,
    "user-message"
    );



    questionInput.value="";



    showTyping();



    setTimeout(()=>{


        removeTyping();



        const answer =
        generateAnswer(
        question
        );



        addMessage(
        answer,
        "ai-message"
        );



    },900);



}








/* ==========================
   Generate AI Response
========================== */


function generateAnswer(question){


    const text =
    question.toLowerCase();



    for(
    let key in medicalKnowledge
    ){


        if(text.includes(key)){


            return medicalKnowledge[key].response;


        }


    }




    return `

I can currently explain general medical education topics such as:

• Anatomy
• Diseases
• Medicines
• Human biology

Try asking:

"What is diabetes?"

"How does the heart work?"

"What are kidneys?"

`;

}







/* ==========================
   Create Message Bubble
========================== */


function addMessage(
text,
className
){


    const message =
    document.createElement(
    "div"
    );



    message.className =
    "message " + className;



    message.innerHTML =
    text.replace(
    /\n/g,
    "<br>"
    );



    chatMessages.appendChild(
    message
    );



    chatMessages.scrollTop =
    chatMessages.scrollHeight;


}







/* ==========================
   Typing Indicator
========================== */


function showTyping(){


    const typing =
    document.createElement(
    "div"
    );


    typing.id =
    "typingIndicator";


    typing.className =
    "message ai-message";


    typing.innerHTML =
    "HumanAtlas AI is thinking... 🧠";



    chatMessages.appendChild(
    typing
    );



}




function removeTyping(){


    const typing =
    document.getElementById(
    "typingIndicator"
    );


    if(typing)
    typing.remove();


}








/* ==========================
   Quick Topic Buttons
========================== */


document
.querySelectorAll(
".topic-grid button"
)
.forEach(button=>{


button.addEventListener(
"click",
()=>{


    questionInput.value =
    button.innerText;



    sendQuestion();



});


});