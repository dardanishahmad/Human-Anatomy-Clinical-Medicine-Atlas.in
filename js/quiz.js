/* ==========================================
   HumanAtlas Quiz Academy Engine
========================================== */



const categoryButtons =
document.querySelectorAll(
".category-btn"
);



const quizCategory =
document.getElementById(
"quizCategory"
);



const questionText =
document.getElementById(
"question"
);



const answersContainer =
document.getElementById(
"answers"
);



const nextButton =
document.getElementById(
"nextQuestion"
);



const scoreDisplay =
document.getElementById(
"score"
);







let currentQuiz = [];

let currentQuestion = 0;

let score = 0;

let answered = false;







/* ==========================
   Question Database
========================== */


const quizDatabase = {



anatomy:[


{


question:

"Which organ pumps blood throughout the human body?",


answers:[

"Brain",

"Heart",

"Liver",

"Kidney"

],


correct:1


},



{


question:

"Which system controls body movement and sensation?",


answers:[

"Nervous System",

"Digestive System",

"Respiratory System",

"Skeletal System"

],


correct:0


}



],






pharmacology:[


{


question:

"Which medicine is commonly used to reduce stomach acid production?",


answers:[

"Omeprazole",

"Insulin",

"Albuterol",

"Levothyroxine"

],


correct:0


},




{


question:

"Metformin is primarily used for which condition?",


answers:[

"Asthma",

"Diabetes",

"Bone fracture",

"Skin infection"

],


correct:1


}



],






disease:[


{


question:

"Asthma mainly affects which body system?",


answers:[

"Respiratory System",

"Nervous System",

"Urinary System",

"Musculoskeletal System"

],


correct:0


},




{


question:

"Hypertension means:",


answers:[

"Low blood sugar",

"High blood pressure",

"Bone weakness",

"Lung infection"

],


correct:1


}



],






biology:[


{


question:

"What molecule stores genetic information?",


answers:[

"Protein",

"DNA",

"Calcium",

"Glucose"

],


correct:1


},




{


question:

"Humans normally have how many chromosomes?",


answers:[

"23",

"46",

"92",

"12"

],


correct:1


}



]



};









/* ==========================
   Load Quiz
========================== */


function loadQuestion(){



answered = false;



const item =
currentQuiz[currentQuestion];



if(!item)
return;





questionText.textContent =
item.question;



answersContainer.innerHTML="";





item.answers.forEach(
(answer,index)=>{


const button =
document.createElement(
"button"
);



button.textContent =
answer;



button.addEventListener(
"click",
()=>{


checkAnswer(
button,
index
);


});



answersContainer.appendChild(
button
);



});



}









/* ==========================
   Check Answer
========================== */


function checkAnswer(
button,
selected
){



if(answered)
return;



answered=true;



const correct =
currentQuiz[currentQuestion]
.correct;





const buttons =
answersContainer
.querySelectorAll(
"button"
);





if(selected===correct){


button.classList.add(
"correct"
);


score++;


scoreDisplay.textContent =
score;



}

else{


button.classList.add(
"wrong"
);



buttons[correct]
.classList.add(
"correct"
);


}



}









/* ==========================
   Category Selection
========================== */


categoryButtons.forEach(
button=>{


button.addEventListener(
"click",
()=>{


const category =
button.dataset.category;





categoryButtons.forEach(
btn=>{


btn.classList.remove(
"active"
);


});





button.classList.add(
"active"
);





currentQuiz =
quizDatabase[category];



currentQuestion=0;

score=0;



scoreDisplay.textContent =
score;



quizCategory.textContent =
category.toUpperCase()
+
" QUIZ";



loadQuestion();



});


});









/* ==========================
   Next Question
========================== */


nextButton.addEventListener(
"click",
()=>{


if(currentQuestion <
currentQuiz.length-1){



currentQuestion++;


loadQuestion();


}

else{



questionText.textContent =
"🎉 Quiz Completed!";


answersContainer.innerHTML =
"";



}



});









/* ==========================
   Initial Setup
========================== */


window.addEventListener(
"DOMContentLoaded",
()=>{


questionText.textContent =
"Select a category to begin your medical quiz.";


});