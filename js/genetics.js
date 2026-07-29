/* ==========================================
   HumanAtlas Genetics Explorer Engine
========================================== */



const topicButtons =
document.querySelectorAll(
".gene-button"
);



const geneTitle =
document.getElementById(
"geneTitle"
);



const geneDescription =
document.getElementById(
"geneDescription"
);








/* ==========================
   Genetics Knowledge Database
========================== */


const geneticsData = {



dna:{


title:

"🧬 DNA Structure",


description:

"DNA (Deoxyribonucleic Acid) is the molecule that stores genetic instructions. It consists of two strands forming a double helix structure made from nucleotide building blocks."

},






genes:{


title:

"🔬 Genes",


description:

"Genes are specific sections of DNA that contain instructions for producing proteins. Proteins influence traits, cell functions, and biological processes."

},






chromosomes:{


title:

"🧫 Chromosomes",


description:

"Chromosomes are organized structures made of DNA and proteins. Humans normally have 46 chromosomes arranged in 23 pairs."

},






mutation:{


title:

"⚠ Mutations",


description:

"Mutations are changes in DNA sequences. Some mutations have no effect, while others can influence traits or contribute to genetic disorders."

}



};









/* ==========================
   Topic Selection
========================== */


topicButtons.forEach(
button=>{


button.addEventListener(
"click",
()=>{


const topic =
button.dataset.topic;





topicButtons.forEach(
btn=>{


btn.classList.remove(
"active"
);


});






button.classList.add(
"active"
);







const data =
geneticsData[topic];





if(data){



geneTitle.textContent =
data.title;



geneDescription.textContent =
data.description;



}



});


});









/* ==========================
   Initial State
========================== */


window.addEventListener(
"DOMContentLoaded",
()=>{


const firstButton =
document.querySelector(
".gene-button"
);



if(firstButton){


firstButton.click();


}



});