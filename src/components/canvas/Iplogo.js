
import { FlakesTexture } from 'three/addons/textures/FlakesTexture.js'
import * as THREE from 'three'
import { useRef, useEffect, useState } from 'react'
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { easing } from 'maath'
import { SVGLoader } from 'three-stdlib'
import { SvgFiles } from './SvgFiles'
export default function IPlogo(props) {
  const { nodes, materials } = useGLTF('/models/Materials2.glb')
  const { scene } = useThree()
  const [meshes, setMeshes] = useState()
  const tmRef = useRef()

  const { lights } = props


  useFrame((state, delta) => {
    if (!materials["neonP"])
      return
    const neonP = materials["neonP"]
    const neonG = materials["neonG"]

    if (!lights) {
      neonP.color.setRGB(.5, .5, .5)
      neonG.color.setRGB(.5, .5, .5)
      return
    }
    const t = (Math.abs(Math.sin(state.clock.elapsedTime * 1.4)))

    neonP.color.setRGB(t * 5, t * 5, t * 80)
    neonG.color.setRGB((1 - t) * 80, (1 - t) * 80, (1 - t) * 80)

    if (!meshes)
      return
    [1, 2, 3, 4].map((value) => {
      const spinner = meshes.getObjectByName(`circledash${value}`)

      //spinner.rotation.x += 1
    })
    //stripe2.current.color.setRGB(1 + t * 10, 2, 20 + t * 50)
    //light2.current.intensity = 1 + t * 2
    //light.current.intensity = 1 + t * 2
  })

  useEffect(() => {
    if (!scene || !materials || !tmRef.current) return
    const NeonP = new THREE.MeshStandardMaterial({ color: "white" })

    NeonP.toneMapped = false
    const NeonG = new THREE.MeshStandardMaterial({ color: "white" })
    NeonG.toneMapped = false
    if (!materials['tm']) {
      materials['tm'] = tmRef.current
      materials["neonP"] = NeonP
      materials["neonG"] = NeonG
    }
    const prim = createSVG(scene, materials)
    setMeshes(prim)
  }, [scene, materials,])

  const config = {
    samples: 16,
    resolution: 256,
    transmission: 0.95,
    roughness: .11,
    clearcoat: 1,
    clearcoatRoughness: 0,
    thickness: 0,
    ior: 1.5,
    chromaticAberration: 0,
    anisotropy: 0,
    distortion: 0.0,
    distortionScale: 0.3,
    temporalDistortion: 0.5,
    attenuationDistance: 0.5,
    attenuationColor: '#ffffff',
    color: '#ffffff'
  }

  return (
    <>

      {meshes ? <primitive object={meshes} ></primitive> : undefined}
      <group  {...props} dispose={null} rotation={[Math.PI / 2, 0, 0]} position={[10, 0, 0]}>


        <mesh castShadow position={[0, 2, 1]}>
          <sphereGeometry args={[0.25, 64, 64]} />
          <meshStandardMaterial
            opacity={1} //

            roughness={0.1}
            color={0xffffff}
            metalness={1}

          />
        </mesh>
        <mesh geometry={nodes.Cube001.geometry} material={nodes.Cube001.material} position={[-2.34, -0.21, 1000.14]} scale={[0, 0, 0]} >
          <MeshTransmissionMaterial ref={tmRef} {...config}></MeshTransmissionMaterial>
        </mesh>

        <mesh geometry={nodes.Cube001.geometry} material={nodes.Cube001.material} position={[-2.34, -0.21, 1000.14]} scale={[0, 0, 0]} >

        </mesh>

      </group>
    </>
  )
}

useGLTF.preload('/models/Materials2.glb')

export function createSVG(scene, materials) {

  const loader = new SVGLoader()
  const svgGroup = new THREE.Group()
  SvgFiles.svgList.map(svgfile => {
    const svgData = loader.parse(`${SvgFiles.openTag}${svgfile.code}${SvgFiles.closeTag}`)
    let material
    if (svgfile.materialName) {
      material = materials[svgfile.materialName]
      if (svgfile.materialName === "whiteMetal") {


      }

    }
    else {
      material = new THREE.MeshStandardMaterial({ ...svgfile.materialprops, envMap: scene.environment, envMapIntensity: 1 })
    }

    svgData.paths.forEach((path, i) => {
      const shapes = SVGLoader.createShapes(path)

      const groupShape = new THREE.Group({ name: svgfile.name })
      groupShape.name = `${svgfile.name}1,i`

      shapes.forEach((shape, j) => {
        const geometry = new THREE.ExtrudeGeometry(shape, {
          depth: svgfile.depth,
          bevelEnabled: false
        })
        const mesh = new THREE.Mesh(geometry, material)

        if (svgfile.position) {
          const { position: pos } = svgfile
          mesh.position.set(pos[0], pos[1], pos[2] + svgfile.depth / 2)
        } else {
          mesh.position.set(0, 0, -1 * svgfile.depth / 2)
        }
        mesh.material.needsUpdate = true
        mesh.name = `${svgfile.name}${i}`
        groupShape.add(mesh)

      })
      svgGroup.add(groupShape)
    })
    svgGroup.rotation.set(0, 0, 0)
    svgGroup.scale.set(-.0065, .0065, 0.08)
    console.log(svgGroup)
  })
  return svgGroup
}



/*

 <group {...props} dispose={null}>
        
          <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} />
          <mesh geometry={nodes.Sphere.geometry} material={nodes.Sphere.material} position={[-1.78, 0.53, 5.75]} />
          <mesh geometry={nodes.Sphere001.geometry} material={nodes.Sphere001.material} position={[0.62, 0.53, 5.75]} />
          <mesh geometry={nodes.Sphere002.geometry} material={nodes.Sphere002.material} position={[3.07, 0.53, 5.75]} />
          <mesh geometry={nodes.Sphere003.geometry} material={nodes.Sphere003.material} position={[5.26, 0.53, 5.75]} />
        </group>

    */
