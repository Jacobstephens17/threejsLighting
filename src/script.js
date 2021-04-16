import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

/**
 * House
 */
// GROUP
const house = new THREE.Group()
scene.add(house)


// WALLS
const walls = new THREE.Mesh(
    new THREE.BoxBufferGeometry(10.0,2,5),
    new THREE.MeshStandardMaterial({color: 'brown'})
    
)

walls.position.x = 0
walls.position.y = 2 / 2
walls.position.z = -1.5
house.add(walls)


// ROOF
const roof = new THREE.Mesh(
    new THREE.ConeBufferGeometry(6,2,6),
    new THREE.MeshStandardMaterial({color:'red'})
)
// house.add(roof)
// roof.position.y = 3.25
// roof.position.z = -1.4
// roof.rotation.y = 150

// Window 
const windows = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(9.5,1.8),
    new THREE.MeshStandardMaterial({color:'black'})
)
windows.position.z = 1.01
windows.position.y = 1
windows.position.x = 0
windows.rotation.z = 0
house.add(windows)

// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({ color: '#a9c388' })
)
floor.rotation.x = - Math.PI * 0.5
floor.position.y = 0
scene.add(floor)


// BUSHES
const bushGeometry = new THREE.SphereBufferGeometry(1,16,16)
const bushMaterial = new THREE.MeshStandardMaterial({color:'limegreen'})

const bush1 = new THREE.Mesh(bushGeometry, bushMaterial)
house.add(bush1)
bush1.scale.set(0.5,0.5,0.5)
bush1.position.set(5.5,0.3,-3.4)

const bush2 = new THREE.Mesh(bushGeometry, bushMaterial)
house.add(bush2)
bush2.scale.set(0.5,0.5,0.5)
bush2.position.set(5.5,0.3,-2.4)

const bush3 = new THREE.Mesh(bushGeometry, bushMaterial)
house.add(bush3)
bush3.scale.set(0.5,0.5,0.5)
bush3.position.set(5.5,0.3,-1.4)

const bush4 = new THREE.Mesh(bushGeometry, bushMaterial)
house.add(bush4)
bush4.scale.set(0.5,0.5,0.5)
bush4.position.set(5.5,0.3,-.4)

const bush5 = new THREE.Mesh(bushGeometry, bushMaterial)
house.add(bush5)
bush5.scale.set(0.5,0.5,0.5)
bush5.position.set(5.5,0.3,.6)


// Lights

// Door
const door = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1.1,1.6),
    new THREE.MeshStandardMaterial({color:'white'})
)
house.add(door)
door.position.set(-5.05,.85,0)
door.rotation.y = 4.709





/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight('#ffffff', 0.5)
moonLight.position.set(4, 5, - 2)
gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001)
scene.add(moonLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 4
camera.position.y = 2
camera.position.z = 5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()