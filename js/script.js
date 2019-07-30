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

camera.position.set(2,2,2)
controls.update()

var light = new THREE.PointLight(0x0000ff, 100, 0, 1)
light.position.set(2, 0, 2)
scene.add(light)

var light2 = new THREE.PointLight(0xff0000, 100, 0, 1)
light2.position.set(0, 2, 2)
light2.visible = false
scene.add(light2)

var loader = new THREE.ObjectLoader()

loader.load(
	// resource URL
	'data/volkeswagon-vw-beetle.json',

	// onLoad callback
	// Here the loaded data is assumed to be an object
	function (obj) {
		// Add the loaded object to the scene
		scene.add(obj)
	},

	// onProgress callback
	function (xhr) {
		console.log((xhr.loaded / xhr.total * 100) + '% loaded')
	},

	// onError callback
	function (err) {
		console.error('An error happened')
	}
)

var n = 0
function animate() {
	cube.rotation.x += 0.01
	cube.rotation.y += 0.01
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
	if (n++ > 15) {
		n=0
		light.visible = !light.visible
		light2.visible = !light2.visible
	}
}
animate()
