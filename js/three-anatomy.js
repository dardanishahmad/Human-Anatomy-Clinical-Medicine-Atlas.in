/* ==========================================
   HumanAtlas
   Interactive 3D Anatomy Engine
========================================== */



const viewer =
document.getElementById(
"bodyViewer"
);



let scene;

let camera;

let renderer;

let bodyModel;

let animationFrame;






/* ==========================
   Initialize Three.js
========================== */


function init3D(){



    scene =
    new THREE.Scene();



    scene.background =
    new THREE.Color(
    0x020617
    );





    camera =
    new THREE.PerspectiveCamera(

        45,

        viewer.clientWidth /
        viewer.clientHeight,

        0.1,

        1000

    );



    camera.position.z = 6;






    renderer =
    new THREE.WebGLRenderer({

        antialias:true,

        alpha:true

    });



    renderer.setSize(

        viewer.clientWidth,

        viewer.clientHeight

    );



    renderer.setPixelRatio(
        window.devicePixelRatio
    );



    viewer.appendChild(
    renderer.domElement
    );






    createLights();


    createHumanPlaceholder();


    animate();




}








/* ==========================
   Lighting
========================== */


function createLights(){



    const ambient =
    new THREE.AmbientLight(

        0xffffff,

        1.2

    );



    scene.add(
    ambient
    );





    const blueLight =
    new THREE.PointLight(

        0x06b6d4,

        2,

        20

    );



    blueLight.position.set(
    3,
    3,
    4
    );



    scene.add(
    blueLight
    );





    const whiteLight =
    new THREE.PointLight(

        0xffffff,

        1,

        20

    );


    whiteLight.position.set(
    -3,
    2,
    3
    );


    scene.add(
    whiteLight
    );



}







/* ==========================
   Human Body Placeholder
========================== */


function createHumanPlaceholder(){



    bodyModel =
    new THREE.Group();






    // Head


    const headGeometry =
    new THREE.SphereGeometry(

        .45,

        32,

        32

    );



    const material =
    new THREE.MeshStandardMaterial({

        color:0x38bdf8,

        transparent:true,

        opacity:.85,

        metalness:.3,

        roughness:.2

    });





    const head =
    new THREE.Mesh(

        headGeometry,

        material

    );



    head.position.y =
    2;



    bodyModel.add(
    head
    );








    // Body


    const bodyGeometry =
    new THREE.CapsuleGeometry(

        .8,

        1.8,

        8,

        16

    );



    const body =
    new THREE.Mesh(

        bodyGeometry,

        material

    );



    body.position.y =
    .3;



    bodyModel.add(
    body
    );








    // Heart marker


    const heartGeometry =
    new THREE.SphereGeometry(

        .12,

        20,

        20

    );



    const heartMaterial =
    new THREE.MeshStandardMaterial({

        color:0xef4444

    });



    const heart =
    new THREE.Mesh(

        heartGeometry,

        heartMaterial

    );



    heart.position.set(

        .25,

        .6,

        -.75

    );



    heart.name =
    "heart";



    bodyModel.add(
    heart
    );








    scene.add(
    bodyModel
    );


}









/* ==========================
   Animation Loop
========================== */


function animate(){



    animationFrame =
    requestAnimationFrame(
    animate
    );



    if(bodyModel){


        bodyModel.rotation.y +=
        0.005;


    }



    renderer.render(

        scene,

        camera

    );



}








/* ==========================
   Organ Information
========================== */


const organInformation = {


brain:

"The brain controls thinking, memory, movement, emotions and many automatic body functions.",



heart:

"The heart pumps blood through the cardiovascular system, delivering oxygen and nutrients.",



lungs:

"The lungs perform gas exchange, bringing oxygen into the blood and removing carbon dioxide.",



liver:

"The liver processes nutrients, removes toxins and produces important proteins.",



kidney:

"The kidneys filter blood, regulate fluids and maintain electrolyte balance.",



bones:

"The skeleton provides support, protection and enables movement."



};







const organButtons =
document.querySelectorAll(
".organ-select"
);



const selectedOrgan =
document.getElementById(
"selectedOrgan"
);



const organDetails =
document.getElementById(
"organDetails"
);






organButtons.forEach(button=>{


button.addEventListener(

"click",

()=>{


    const organ =
    button.dataset.organ;



    document
    .querySelectorAll(
    ".organ-select"
    )
    .forEach(btn=>

        btn.classList.remove(
        "active"
        )

    );



    button.classList.add(
    "active"
    );



    selectedOrgan.textContent =
    button.innerText;



    organDetails.textContent =
    organInformation[organ];



}

);


});








/* ==========================
   Responsive Resize
========================== */


window.addEventListener(

"resize",

()=>{


camera.aspect =

viewer.clientWidth /

viewer.clientHeight;



camera.updateProjectionMatrix();



renderer.setSize(

viewer.clientWidth,

viewer.clientHeight

);



}

);








/* ==========================
   Start Engine
========================== */


window.addEventListener(

"load",

()=>{


    if(viewer){

        init3D();

    }


});