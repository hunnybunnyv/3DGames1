let canvas;
let engine;
let scene;
let camera;

window.onload = startGame;

function startGame() {
    canvas = document.querySelector("#myCanvas");
    engine = new BABYLON.Engine(canvas, true);
    scene = createScene();
    //let sphere = scene.getMeshByName("mySphere");
    // main animation loop 60 times/s
    engine.runRenderLoop(() => {
        scene.render();
    });
}

function createScene() {
    let scene = new BABYLON.Scene(engine);
    
    // background
    scene.clearColor = new BABYLON.Color3(0.9, 0.6, 0.9);
    // Create some objects 
    // params = number of horizontal "stripes", diameter...
    let sphere = BABYLON.MeshBuilder.CreateSphere("mySphere", {diameter: 1.5, segments: 32}, scene);
    sphere.position.x = -4 ;
    sphere.position.y = 1 ;
    sphere.position.z = -2;

    let sphere2 = BABYLON.MeshBuilder.CreateSphere("mySphere2", {diameter: 2, segments: 32}, scene);
    sphere2.position.x = 4 ;
    sphere2.position.y = 1 ;
    // sphere2.position.z = -1;

    let sphere3 = BABYLON.MeshBuilder.CreateSphere("mySphere3", {diameter: 1, segments: 32}, scene);
    sphere3.position.x = -4 ;
    sphere3.position.y = 1 ;
    sphere3.position.z = -4;

    let roof = BABYLON.MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tesselation: 100});
    roof.scaling.x = 0.75;
    roof.rotation.z = Math.PI/2;
    roof.position.y = 5;
    roof.position.z = 5;

    // a plane
    let ground = BABYLON.MeshBuilder.CreateGround("myGround", {width: 20, height: 20}, scene);
    //console.log(ground.name);

    let camera = new BABYLON.FreeCamera("myCamera", new BABYLON.Vector3(0, 15, 20), scene);
   // This targets the camera to scene origin
   camera.setTarget(BABYLON.Vector3.Zero());
   //camera.rotation.y = 0.3;
   camera.attachControl(canvas);
   
    let light = new BABYLON.HemisphericLight("myLight", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.4;
    // color of the light
    light.diffuse = new BABYLON.Color3(1, 0.9, 1);
    
    let light2 = new BABYLON.HemisphericLight("myLight2", new BABYLON.Vector3(4, 1, 0), scene);
    light2.intensity = 0.4;
    // color of the light
    light2.diffuse = new BABYLON.Color3(0.7, 0, 0.7);    
    
    let light3 = new BABYLON.HemisphericLight("myLight3", new BABYLON.Vector3(-4, 1, 0), scene);
    light3.intensity = 0.4;
    // color of the light
    light3.diffuse = new BABYLON.Color3(0.3, 0, 0.6);

    return scene;
}

window.addEventListener("resize", () => {
    engine.resize()
})