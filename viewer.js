// 3D Model Viewer - Generated from Scene Export
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene Data (exported from your scene)
const SCENE_DATA = {
  "camera": {
    "fov": 75,
    "near": 0.01,
    "far": 1510.076887276399,
    "position": {
      "x": -1.0215235218954228,
      "y": 2.1378936436672014,
      "z": -1.8964280565800233
    },
    "target": {
      "x": -0.3879294221029031,
      "y": 1.2648813973971045,
      "z": 0.35887860429130725
    },
    "quaternion": {
      "x": 0.024219215106845726,
      "y": 0.9749229517217619,
      "z": 0.17575617806243476,
      "w": -0.13434445912884246
    }
  },
  "keyframes": [
    {
      "index": 1,
      "position": {
        "x": -0.2838126442646551,
        "y": 0.5132093545407376,
        "z": -4.764038889573362
      },
      "target": {
        "x": 0,
        "y": 0,
        "z": 0
      },
      "zoom": 4.800000000000001,
      "fov": 75,
      "near": 0.01,
      "far": 1510.076887276399,
      "quaternion": {
        "x": 0.0015925606340858687,
        "y": 0.9981239976815766,
        "z": 0.05351239049383469,
        "w": -0.02970476504553152
      },
      "duration": 1200,
      "modelAnimTime": 0
    },
    {
      "index": 2,
      "position": {
        "x": -0.19077656515832705,
        "y": 0.7627070826369562,
        "z": 4.735174992361087
      },
      "target": {
        "x": 0,
        "y": 0,
        "z": 0
      },
      "zoom": 4.800000000000001,
      "fov": 75,
      "near": 0.01,
      "far": 1510.076887276399,
      "quaternion": {
        "x": -0.07968605582127043,
        "y": -0.02006832006013983,
        "z": -0.0016045941170831617,
        "w": 0.9966166867534042
      },
      "duration": 1200,
      "modelAnimTime": 0
    },
    {
      "index": 3,
      "position": {
        "x": 4.188482945482647,
        "y": 1.1974195218899903,
        "z": 2.0156381381581774
      },
      "target": {
        "x": 0,
        "y": 0,
        "z": 0
      },
      "zoom": 4.800000000000001,
      "fov": 75,
      "near": 0.01,
      "far": 1510.076887276399,
      "quaternion": {
        "x": -0.10644844165458647,
        "y": 0.527926532020476,
        "z": 0.06690655251193858,
        "w": 0.83993203254139
      },
      "duration": 1200,
      "modelAnimTime": 0
    },
    {
      "index": 4,
      "position": {
        "x": 2.3772897746878825,
        "y": 1.659106057348931,
        "z": -3.8256843071054014
      },
      "target": {
        "x": 0,
        "y": 0,
        "z": 0
      },
      "zoom": 4.800000000000002,
      "fov": 75,
      "near": 0.01,
      "far": 1510.076887276399,
      "quaternion": {
        "x": -0.04817732723394311,
        "y": 0.9466719215920262,
        "z": 0.16880952283762324,
        "w": 0.2701750599318673
      },
      "duration": 1200,
      "modelAnimTime": 0
    },
    {
      "index": 5,
      "position": {
        "x": 1.563917119545172,
        "y": 1.6761624121307805,
        "z": -4.217184227817592
      },
      "target": {
        "x": 0,
        "y": 0,
        "z": 0
      },
      "zoom": 4.800000000000001,
      "fov": 75,
      "near": 0.01,
      "far": 1510.076887276399,
      "quaternion": {
        "x": -0.03133666647365134,
        "y": 0.9686630152252734,
        "z": 0.17462530954137467,
        "w": 0.17382743608699966
      },
      "duration": 1200,
      "modelAnimTime": 0
    },
    {
      "index": 6,
      "position": {
        "x": 0.8235886723954645,
        "y": 0.33975113034994586,
        "z": -2.4050401769748033
      },
      "target": {
        "x": 0.00904850596568466,
        "y": -0.5332501259681719,
        "z": -0.2085900583197997
      },
      "zoom": 2.500000000000009,
      "fov": 75,
      "near": 0.01,
      "far": 1510.076887276399,
      "quaternion": {
        "x": -0.03133666647365133,
        "y": 0.9686630152252734,
        "z": 0.17462530954137467,
        "w": 0.17382743608699966
      },
      "duration": 1200,
      "modelAnimTime": 0
    },
    {
      "index": 7,
      "position": {
        "x": 0.42665559387049573,
        "y": 2.137615667049341,
        "z": -1.8376609987268244
      },
      "target": {
        "x": -0.38788457255928416,
        "y": 1.2646144107312236,
        "z": 0.35878911992817913
      },
      "zoom": 2.500000000000009,
      "fov": 75,
      "near": 0.01,
      "far": 1510.076887276399,
      "quaternion": {
        "x": -0.03133666647365131,
        "y": 0.9686630152252734,
        "z": 0.17462530954137456,
        "w": 0.17382743608699966
      },
      "duration": 1200,
      "modelAnimTime": 0
    },
    {
      "index": 8,
      "position": {
        "x": -1.0215235218954228,
        "y": 2.1378936436672014,
        "z": -1.8964280565800233
      },
      "target": {
        "x": -0.3879294221029031,
        "y": 1.2648813973971045,
        "z": 0.35887860429130725
      },
      "zoom": 2.500000000000009,
      "fov": 75,
      "near": 0.01,
      "far": 1510.076887276399,
      "quaternion": {
        "x": 0.024219215106845726,
        "y": 0.9749229517217619,
        "z": 0.17575617806243476,
        "w": -0.13434445912884246
      },
      "duration": 1200,
      "modelAnimTime": 0
    }
  ],
  "lighting": {
    "hemisphere": {
      "intensity": 1.2,
      "color": 16777215,
      "groundColor": 8947848
    },
    "directional": {
      "intensity": 0.8,
      "color": 16777215
    }
  },
  "background": 15790320,
  "settings": {
    "animationSpeed": 1200,
    "autoPlayCamera": false,
    "autoPlayModel": false
  },
  "deviceTarget": "mobile"
};

// Model file to load automatically
const MODEL_FILE = 'halloween_potion.glb';

// Global variables
let scene, camera, renderer, controls, model;
let mixer = null;
let clock = new THREE.Clock();
let gltfClips = [];
let animationActions = new Map();
let animating = false;
let animFrame = null;

// Initialize the viewer
function init() {
    // Device optimization based on target
    const deviceTarget = SCENE_DATA.deviceTarget || 'universal';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Show device info
    document.getElementById('deviceInfo').textContent = 
        `Optimized for: ${deviceTarget === 'desktop' ? '🖥️ Desktop' : 
        deviceTarget === 'mobile' ? '📱 Mobile' : '🔄 Universal'}`;
    
    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(SCENE_DATA.background);

    // Camera setup with device-specific optimizations
    camera = new THREE.PerspectiveCamera(
        SCENE_DATA.camera.fov,
        window.innerWidth / window.innerHeight,
        SCENE_DATA.camera.near,
        SCENE_DATA.camera.far
    );
    camera.position.set(
        SCENE_DATA.camera.position.x,
        SCENE_DATA.camera.position.y,
        SCENE_DATA.camera.position.z
    );
    camera.quaternion.set(
        SCENE_DATA.camera.quaternion.x,
        SCENE_DATA.camera.quaternion.y,
        SCENE_DATA.camera.quaternion.z,
        SCENE_DATA.camera.quaternion.w
    );

    // Renderer setup with device-specific settings
    const rendererOptions = { antialias: true };
    
    // Adjust quality based on device target
    let pixelRatio = window.devicePixelRatio;
    if (deviceTarget === 'mobile' || (deviceTarget === 'universal' && isMobile)) {
        pixelRatio = Math.min(pixelRatio, 2); // Limit for mobile performance
    } else if (deviceTarget === 'desktop') {
        pixelRatio = Math.min(pixelRatio, 3); // Higher quality for desktop
    }
    
    renderer = new THREE.WebGLRenderer(rendererOptions);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(pixelRatio);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.physicallyCorrectLights = true;
    document.body.appendChild(renderer.domElement);

    // Environment
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTex = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;
    scene.environment = envTex;

    // Lighting
    if (SCENE_DATA.lighting.hemisphere) {
        const hemiLight = new THREE.HemisphereLight(
            SCENE_DATA.lighting.hemisphere.color,
            SCENE_DATA.lighting.hemisphere.groundColor,
            SCENE_DATA.lighting.hemisphere.intensity
        );
        hemiLight.position.set(0, 20, 0);
        scene.add(hemiLight);
    }

    if (SCENE_DATA.lighting.directional) {
        const dirLight = new THREE.DirectionalLight(
            SCENE_DATA.lighting.directional.color,
            SCENE_DATA.lighting.directional.intensity
        );
        dirLight.position.set(3, 10, 10);
        scene.add(dirLight);
    }

    // Controls with device-specific settings
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.target.set(
        SCENE_DATA.camera.target.x,
        SCENE_DATA.camera.target.y,
        SCENE_DATA.camera.target.z
    );
    
    // Device-specific control optimizations
    const deviceTarget = SCENE_DATA.deviceTarget || 'universal';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (deviceTarget === 'mobile' || (deviceTarget === 'universal' && isMobile)) {
        // Mobile optimizations
        controls.enablePan = true; // Touch panning
        controls.enableZoom = true; // Pinch zoom
        controls.enableRotate = true; // Touch rotation
        controls.rotateSpeed = 0.8; // Slightly slower for touch
        controls.zoomSpeed = 1.2; // Faster zoom for touch
        controls.panSpeed = 1.0;
        controls.autoRotate = false;
        controls.autoRotateSpeed = 2.0;
        
        // Mobile-specific limits
        controls.minDistance = 0.5;
        controls.maxDistance = 50;
        controls.maxPolarAngle = Math.PI; // Allow full rotation
        
    } else if (deviceTarget === 'desktop') {
        // Desktop optimizations
        controls.enablePan = true; // Right-click panning
        controls.enableZoom = true; // Mouse wheel zoom
        controls.enableRotate = true; // Mouse rotation
        controls.rotateSpeed = 1.0; // Standard speed
        controls.zoomSpeed = 1.0;
        controls.panSpeed = 1.0;
        controls.autoRotate = false;
        
        // Desktop-specific limits
        controls.minDistance = 0.1;
        controls.maxDistance = 100;
        controls.maxPolarAngle = Math.PI;
        
    } else {
        // Universal - adaptive settings
        controls.enablePan = true;
        controls.enableZoom = true;
        controls.enableRotate = true;
        controls.rotateSpeed = isMobile ? 0.8 : 1.0;
        controls.zoomSpeed = isMobile ? 1.2 : 1.0;
        controls.panSpeed = 1.0;
        controls.autoRotate = false;
        
        controls.minDistance = isMobile ? 0.5 : 0.1;
        controls.maxDistance = isMobile ? 50 : 100;
        controls.maxPolarAngle = Math.PI;
    }
    
    controls.update();

    // Setup drag and drop (as fallback)
    setupDragAndDrop();
    
    // Setup controls
    setupControls();

    // Try to load the included model first
    tryLoadIncludedModel();

    // Start animation loop
    animate();
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    if (controls) controls.update();
    if (mixer) mixer.update(clock.getDelta());
    renderer.render(scene, camera);
}

// Try to load the model that was included with the export
async function tryLoadIncludedModel() {
    try {
        const response = await fetch(MODEL_FILE);
        if (response.ok) {
            const blob = await response.blob();
            const file = new File([blob], MODEL_FILE);
            loadModelFromFile(file);
            document.getElementById('loading').style.display = 'none';
            document.getElementById('dropZone').classList.add('hidden');
            document.getElementById('controls').style.display = 'flex';
            return;
        }
    } catch (e) {
        console.log('Included model not found, showing drop zone');
    }
    
    // If included model fails, show drop zone and hide loading
    document.getElementById('loading').style.display = 'none';
    document.getElementById('dropZone').classList.remove('hidden');
}

// Load 3D model from file
function loadModelFromFile(file) {
    if (model) {
        scene.remove(model);
        if (mixer) mixer.stopAllActions();
    }

    const loader = new GLTFLoader();
    
    // Setup additional loaders
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://unpkg.com/three@0.160.0/examples/jsm/libs/draco/');
    loader.setDRACOLoader(dracoLoader);

    const ktx2Loader = new KTX2Loader();
    ktx2Loader.setTranscoderPath('https://unpkg.com/three@0.160.0/examples/jsm/libs/basis/');
    ktx2Loader.detectSupport(renderer);
    loader.setKTX2Loader(ktx2Loader);

    loader.setMeshoptDecoder(MeshoptDecoder);

    const reader = new FileReader();
    reader.onload = function(e) {
        loader.parse(e.target.result, '', function(gltf) {
            model = gltf.scene;
            
            // Setup animations
            if (gltf.animations && gltf.animations.length) {
                gltfClips = gltf.animations;
                mixer = new THREE.AnimationMixer(model);
                gltfClips.forEach((clip, i) => {
                    const action = mixer.clipAction(clip);
                    action.clampWhenFinished = true;
                    action.setLoop(THREE.LoopRepeat, Infinity);
                    action.enabled = true;
                    animationActions.set(i, action);
                });
            }

            // Center model
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            model.position.sub(center);
            scene.add(model);

            // Fit camera if no keyframes
            if (SCENE_DATA.keyframes.length === 0) {
                fitCameraToModel();
            }

            // Hide drop zone and show controls
            document.getElementById('dropZone').classList.add('hidden');
            document.getElementById('controls').style.display = 'flex';
            
        }, function(error) {
            console.error('Error loading model:', error);
            alert('Error loading 3D model. Please check the file format.');
        });
    };
    reader.readAsArrayBuffer(file);
}

// Camera animation functions
function playCamera() {
    if (SCENE_DATA.keyframes.length < 2) {
        alert('No camera animation available');
        return;
    }
    animateKeyframes(SCENE_DATA.keyframes);
}

function playBoth() {
    if (SCENE_DATA.keyframes.length < 2) {
        alert('No camera animation available');
        return;
    }
    
    // Start camera animation
    animateKeyframes(SCENE_DATA.keyframes);
    
    // Start model animations
    if (mixer && gltfClips.length > 0) {
        gltfClips.forEach((_, i) => {
            const action = animationActions.get(i);
            if (action) {
                action.reset();
                action.paused = false;
                action.play();
            }
        });
    }
}

function stopAnimations() {
    if (animFrame) {
        cancelAnimationFrame(animFrame);
        animFrame = null;
    }
    animating = false;
    
    if (animationActions.size > 0) {
        animationActions.forEach(action => action.stop());
    }
}

function resetView() {
    camera.position.set(
        SCENE_DATA.camera.position.x,
        SCENE_DATA.camera.position.y,
        SCENE_DATA.camera.position.z
    );
    controls.target.set(
        SCENE_DATA.camera.target.x,
        SCENE_DATA.camera.target.y,
        SCENE_DATA.camera.target.z
    );
    controls.update();
    stopAnimations();
}

// Animation helper functions
function lerpVec3(a, b, t) {
    return new THREE.Vector3(
        a.x + (b.x - a.x) * t,
        a.y + (b.y - a.y) * t,
        a.z + (b.z - a.z) * t
    );
}

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function slerpQuat(a, b, t) {
    return a.clone().slerp(b, t);
}

function animateKeyframes(keyframes) {
    if (animating || keyframes.length < 2) return;
    animating = true;
    let i = 0;
    
    function animateToNext() {
        if (i >= keyframes.length - 1) {
            animating = false;
            return;
        }
        
        const start = keyframes[i];
        const end = keyframes[i + 1];
        const duration = end.duration || 1200;
        const startTime = performance.now();
        
        function step(now) {
            let t = Math.min((now - startTime) / duration, 1);
            
            // Interpolate camera properties
            const newTarget = lerpVec3(
                new THREE.Vector3(start.target.x, start.target.y, start.target.z),
                new THREE.Vector3(end.target.x, end.target.y, end.target.z),
                t
            );
            const newZoom = lerp(start.zoom, end.zoom, t);
            const newFov = lerp(start.fov, end.fov, t);
            const newNear = lerp(start.near, end.near, t);
            const newFar = lerp(start.far, end.far, t);
            
            controls.target.copy(newTarget);
            
            // Spherical interpolation for camera position
            const startOffset = new THREE.Vector3(start.position.x, start.position.y, start.position.z).sub(newTarget);
            const endOffset = new THREE.Vector3(end.position.x, end.position.y, end.position.z).sub(newTarget);
            const startSph = new THREE.Spherical().setFromVector3(startOffset);
            const endSph = new THREE.Spherical().setFromVector3(endOffset);
            const theta = lerp(startSph.theta, endSph.theta, t);
            const phi = lerp(startSph.phi, endSph.phi, t);
            const sph = new THREE.Spherical(newZoom, phi, theta);
            const newOffset = new THREE.Vector3().setFromSpherical(sph);
            camera.position.copy(newTarget.clone().add(newOffset));
            
            // Interpolate camera rotation
            const startQuat = new THREE.Quaternion(start.quaternion.x, start.quaternion.y, start.quaternion.z, start.quaternion.w);
            const endQuat = new THREE.Quaternion(end.quaternion.x, end.quaternion.y, end.quaternion.z, end.quaternion.w);
            const newQuat = slerpQuat(startQuat, endQuat, t);
            camera.quaternion.copy(newQuat);
            
            // Update camera properties
            camera.fov = newFov;
            camera.near = newNear;
            camera.far = newFar;
            camera.updateProjectionMatrix();
            controls.update();
            
            if (t < 1) {
                animFrame = requestAnimationFrame(step);
            } else {
                i++;
                animateToNext();
            }
        }
        animFrame = requestAnimationFrame(step);
    }
    animateToNext();
}

// Fit camera to model
function fitCameraToModel() {
    if (!model) return;
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
    cameraZ *= 2.2;
    camera.position.set(0, 0, cameraZ);
    camera.lookAt(0, 0, 0);
    controls.target.set(0, 0, 0);
    controls.minDistance = Math.max(0.01, maxDim * 0.2);
    controls.maxDistance = cameraZ * 50;
    controls.update();
    camera.far = cameraZ * 200;
    camera.updateProjectionMatrix();
}

// Setup drag and drop (fallback if no model included)
function setupDragAndDrop() {
    const dropZone = document.getElementById('dropZone');
    
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });
    
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, highlight, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, unhighlight, false);
    });
    
    dropZone.addEventListener('drop', handleDrop, false);
    
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    function highlight(e) {
        dropZone.classList.add('drag-over');
    }
    
    function unhighlight(e) {
        dropZone.classList.remove('drag-over');
    }
    
    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        
        if (files.length > 0) {
            const file = files[0];
            if (file.name.toLowerCase().endsWith('.glb') || file.name.toLowerCase().endsWith('.gltf')) {
                loadModelFromFile(file);
            } else {
                alert('Please drop a GLB or GLTF file');
            }
        }
    }
}

// Setup control buttons
function setupControls() {
    document.getElementById('playCamera').addEventListener('click', playCamera);
    document.getElementById('playBoth').addEventListener('click', playBoth);
    document.getElementById('stop').addEventListener('click', stopAnimations);
    document.getElementById('reset').addEventListener('click', resetView);
}

// Handle window resize
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

// Initialize when page loads
init();