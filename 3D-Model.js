//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
 
//Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 
//Keep the 3D object on a global variable so we can access it later
let object;
 
//OrbitControls allow the camera to move around the scene
let controls;  /*being able to move the burger*/
 
//Determining burger type for 3d Model
/*depending on the choose of burger , specific gltf given at line 30*/
let burgerType;

//Set which object to render
let objToRender = 'burger';

//make the order menu pictures display none
let displayingPlaceImg = document.getElementById('displayingPlaceImg');


document.addEventListener("DOMContentLoaded",function(){ /*we have this to be able to uptade variables*/
    let selected_burger = document.getElementById('selected_burger');
    selected_burger.addEventListener("change",function(){
    scene.remove(object); /* this is here to prevent a little model bug where you switch burger while 3d model exist, models will add up each other. */
    let selected_model = selected_burger.value;
    if (selected_model == 'images/order_place_holder.png'){
    burgerType = '';
    }
    else if(selected_model == 'images/edited_basic.png'){
    burgerType = 'basic_Burger';
    }
    else if(selected_model == 'images/edited_chees.png'){
    burgerType = 'cheese_Burger';
    }
    else if(selected_model == 'images/edited_whoop.png'){
    burgerType = 'whooper_Burger';
    }
    //Load the file
  loader.load(
  `models/${objToRender}/${burgerType}.gltf`,
  function (gltf) {
    //If the file is loaded, add it to the scene
    object = gltf.scene;
  },
  function (xhr) {
    //While it is loading, log the progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    //If there is an error, log it
    console.error(error);
  }
  );
  })
})

//Instantiate a loader for the .gltf file
let loader = new GLTFLoader();
 

//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth, window.innerHeight);
 
//Add the renderer to the DOM
const container = document.getElementById('displayingPlace');
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);
 
//Set how far the camera will be from the 3D model
camera.position.z = objToRender === "burger" ? 1.5 : 500; /*25 is the distance between 3d model and user.*/
 
//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500)
topLight.castShadow = true;
scene.add(topLight);
 
const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "burger" ? 5 : 1);
scene.add(ambientLight);
 
 
//this adds controls to the camera, so we can rotate / zoom it with the mouse
controls = new OrbitControls(camera, renderer.domElement);
 
 
//Render the scene
function animate() {
  requestAnimationFrame(animate);
 
  renderer.render(scene, camera);
}
 
 
//Start the 3D rendering
 
const enable3D = document.getElementById('enable3D');
enable3D.addEventListener('click', () => {
    displayingPlaceImg.style.display='none';
    scene.add(object);
    animate();
});
 
const disable3D = document.getElementById('disable3D');
disable3D.addEventListener('click', () =>{
    displayingPlaceImg.style.display='block';
  scene.remove(object)
})