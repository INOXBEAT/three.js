// Crear una escena
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Crear una cámara
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

// Crear un renderizador
const scene = new THREE.Scene();

// Create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

// Crear la figura
const points = [];

// vertices donde inician las líneas 'Vector3( x, y, z )'
points.push( new THREE.Vector3( -15,0, -20 ) );
points.push( new THREE.Vector3( 0, 25, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
points.push( new THREE.Vector3( -20, 10, 20));
points.push( new THREE.Vector3( 15, 30, -20));
points.push( new THREE.Vector3( -15, -15, 5))

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

// agregar la línea a la escena
scene.add( line );

// función de la animación
function animate() {
    requestAnimationFrame(animate);

    // rotación de la línea
    line.rotation.y += 0.01;

    // Renderizar la escena y la cámara
    renderer.render( scene, camera );
}

// Iniciar la animación
animate();


