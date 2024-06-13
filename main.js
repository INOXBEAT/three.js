// Crear una escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0C343D);

// Crear una cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Crear un renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear una esfera
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);

// Cargar la textura
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/bola8.png');

// Crear el material con la textura cargada
const sphereMaterial = new THREE.MeshBasicMaterial({ map: texture });

// Crear la esfera con el nuevo material
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0, 0, 0);
scene.add(sphere);

// Animación
function animate() {
    requestAnimationFrame(animate);

    sphere.rotation.x += 0.05;
    sphere.rotation.y += 0.02;

    renderer.render(scene, camera);
}

animate();
