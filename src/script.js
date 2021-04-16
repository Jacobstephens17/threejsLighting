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
    new THREE.MeshNormalMaterial({color: 'black'})
    
)

walls.position.x = 0
walls.position.y = 2 / 2
walls.position.z = -1.5
house.add(walls)



const upperWalls = new THREE.Mesh(
    new THREE.BoxBufferGeometry(10.0,2,5),
    new THREE.MeshNormalMaterial({color: 'black'})
    
)

upperWalls.position.x = 5.5
upperWalls.position.y = 3
upperWalls.position.z = -4
upperWalls.rotation.set(0,55,0)
house.add(upperWalls)


const upperWalls2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(10.0,2,5),
    new THREE.MeshNormalMaterial({color: 'black'})
    
)

upperWalls2.position.x = 0
upperWalls2.position.y = 5
upperWalls2.position.z = -1.5
house.add(upperWalls2)


// Pillars 

const pillar = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(.2,.2,2,50),
    new THREE.MeshNormalMaterial()
)

house.add(pillar)
pillar.position.set(-4.8,3,.8)



const pillar2 = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(.2,.2,2,50),
    new THREE.MeshNormalMaterial()
)

house.add(pillar2)
pillar2.position.set(-4.8,3,-.8)



const pillar3 = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(.2,.2,2,50),
    new THREE.MeshNormalMaterial()
)

house.add(pillar3)
pillar3.position.set(-4.8,3,-2.4)


const pillar4 = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(.2,.2,2,50),
    new THREE.MeshNormalMaterial()
)

house.add(pillar4)
pillar4.position.set(-4.8,3,-3.8)



// Window 
const windows = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(9.5,1.8),
    new THREE.MeshBasicMaterial({color:'black'})
)

windows.position.z = 1.01
windows.position.y = 1
windows.position.x = 0
windows.rotation.z = 0
house.add(windows)

const windows2 = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(9.5,1.8),
    new THREE.MeshBasicMaterial({color:'black'})
)
windows2.position.z = -4.05
windows2.position.y = 1
windows2.position.x = 0
windows2.rotation.x = 0
windows2.rotation.y = 3.14
windows2.rotation.z = 0
house.add(windows2)


const windowsMid = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(9.5,1.8),
    new THREE.MeshBasicMaterial({color:'black'})
)

windowsMid.position.x = 2.85
windowsMid.position.y = 3
windowsMid.position.z = -4
windowsMid.rotation.x = 0
windowsMid.rotation.y = -7.8
windowsMid.rotation.z = 0
house.add(windowsMid)


const windows2Mid = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(9.5,1.8),
    new THREE.MeshBasicMaterial({color:'black'})
)
windows2Mid.position.z = -4.05
windows2Mid.position.y = 3 
windows2Mid.position.x = 8.05
windows2Mid.rotation.x = 0
windows2Mid.rotation.y = 7.885
windows2Mid.rotation.z = 0
house.add(windows2Mid)









const windowsTop = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(9.5,1.8),
    new THREE.MeshBasicMaterial({color:'black'})
)

windowsTop.position.z = 1.01
windowsTop.position.y = 5
windowsTop.position.x = 0
windowsTop.rotation.z = 0
house.add(windowsTop)


const windows2Top = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(9.5,1.8),
    new THREE.MeshBasicMaterial({color:'black'})
)
windows2Top.position.z = -4.05
windows2Top.position.y = 5
windows2Top.position.x = 0
windows2Top.rotation.x = 0
windows2Top.rotation.y = 3.14
windows2Top.rotation.z = 0
house.add(windows2Top)







// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 40),
    new THREE.MeshStandardMaterial({ color: 'green' })
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
bush1.position.set(-5.5,0.3,-3.4)

const bush2 = new THREE.Mesh(bushGeometry, bushMaterial)
house.add(bush2)
bush2.scale.set(0.5,0.5,0.5)
bush2.position.set(-5.5,0.3,-2.2)

const bush3 = new THREE.Mesh(bushGeometry, bushMaterial)
house.add(bush3)
bush3.scale.set(0.5,0.5,0.5)
bush3.position.set(-5.5,0.3,-1)

const bush4 = new THREE.Mesh(bushGeometry, bushMaterial)
// house.add(bush4)
bush4.scale.set(0.5,0.5,0.5)
bush4.position.set(-5.5,0.3,-.4)

const bush5 = new THREE.Mesh(bushGeometry, bushMaterial)
// house.add(bush5)
bush5.scale.set(0.5,0.5,0.5)
bush5.position.set(-5.5,0.3,.6)



// Door
const door = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1.1,1.6),
    new THREE.MeshStandardMaterial({color:'white'})
)
house.add(door)
door.position.set(-5.05,.85,.3)
door.rotation.y = 4.709


// Walkway

const walkway = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(2,22),
    new THREE.MeshStandardMaterial({color:'black'})
)
house.add(walkway)
walkway.position.set(7.5,.1,-2)
walkway.rotation.set(4.7, 0, 0)
walkway.scale.set(2.5,2,5)




/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#b9d5ff', .5)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight('#b9d5ff', .5)
moonLight.position.set(4, 5, - 2)
gui.add(moonLight, 'intensity').min(0).max(3).step(0.001)
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
camera.position.x = 0
camera.position.y = 10
camera.position.z = 10
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

    // Update control
    camera.position.x = Math.sin(elapsedTime / 4) * 20
    camera.position.y = Math.sin(elapsedTime) + 10
    camera.position.z = Math.cos(elapsedTime / 60 ) * 6
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()