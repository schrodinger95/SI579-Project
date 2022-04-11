import React from 'react';
import * as THREE from 'three';

class ThreeScene extends React.Component {

    renderer= new THREE.WebGLRenderer();
    scene= new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    geometry = new THREE.SphereBufferGeometry(100, 60, 40)
    material=null;
    mesh=null;

    constructor(props) {
        super (props)
        this.state = {}
    }

    componentDidMount () {

        this.geometry.scale(-1, 1, 1)

        let texture = new THREE.TextureLoader().load(this.props.banner)
        this.material = new THREE.MeshBasicMaterial({map: texture})
        this.mesh = new THREE.Mesh(this.geometry, this.material)

        this.renderer.setSize(window.innerWidth, window.innerHeight)

        document.body.appendChild(this.renderer.domElement)

        this.scene.add(this.mesh)

        this.camera.position.z = 0

        window.addEventListener('resize', this.onWindowResize, false)

        this.animate()
        document.addEventListener('keydown',(e)=>{
            if(e.code ==='ArrowDown'||e.code === 'KeyS'){
                this.mesh.rotation.x += 0.01
            }else if(e.code ==='ArrowUp'||e.code === 'KeyW'){
                this.mesh.rotation.x -= 0.01
            }else if(e.code ==='ArrowLeft'||e.code ==='KeyA'){
                this.mesh.rotation.y -= 0.01
            }else if(e.code ==='ArrowRight'||e.code ==='KeyD'){
                this.mesh.rotation.y += 0.01
            }
        })
    }

    onWindowResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()

        this.renderer.setSize(window.innerWidth, window.innerHeight)
    }
    animate = () => {
        requestAnimationFrame(this.animate)
        this.renderer.render(this.scene, this.camera)
    }

    render () {
        return (
            <div>
                <a
                    onClick={() => {
                        const elements = document.getElementsByTagName('canvas');
                        Array.from(elements).forEach(element => {
                            element.remove();
                        });
                    }}
                    href={`#${this.props.router}`}
                    className="btn btn-primary"
                    style={{top:0,position: 'absolute'}}>
                    RETURN
                </a>
            </div>
        )
    }
}

export default ThreeScene;
