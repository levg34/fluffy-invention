var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)

var renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

var controls = new THREE.OrbitControls(camera, renderer.domElement)

var geometry = new THREE.BoxGeometry(1, 1, 1)
var material = new THREE.MeshPhongMaterial({color: 0xffffff})
var cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

var light = new THREE.PointLight(0x0000ff, 100, 0, 1)
light.position.set(2, 0, 2)
scene.add(light)

var light = new THREE.PointLight(0xff0000, 100, 0, 1)
light.position.set(-2, 0, 2)
scene.add(light)

var temps = 0
function animate() {
	cube.rotation.x += 0.01
	cube.rotation.y += 0.01
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
	light.position.set(2, 1 + Math.sin(temps), 1+ Math.sin(temps));
	temps += 0.01;
	temps %= 10;
}
animate()
