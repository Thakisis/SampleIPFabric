
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
  useEffect(() => {
    if (!scene || !materials || !tmRef.current) return

    const prim = createSVG(scene, materials)
    materials['tm'] = tmRef.current
    setMeshes(prim)
  }, [scene, materials])

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

        console.log(material)
      }

    }
    else {
      material = new THREE.MeshStandardMaterial({ ...svgfile.materialprops, envMap: scene.environment, envMapIntensity: 1 })
    }

    svgData.paths.forEach((path, i) => {
      const shapes = SVGLoader.createShapes(path)
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
        svgGroup.add(mesh)
      })
    })
    svgGroup.rotation.set(0, 0, 0)
    svgGroup.scale.set(-.0065, .0065, 0.08)

  })
  return svgGroup
}



/*

 <group {...props} dispose={null}>
          <mesh geometry={nodes.Cube001.geometry} material={nodes.Cube001.material} position={[-2.34, -0.21, 0.14]} >
            <MeshTransmissionMaterial ref={tmRef} {...config}></MeshTransmissionMaterial>
          </mesh>
          <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} />
          <mesh geometry={nodes.Sphere.geometry} material={nodes.Sphere.material} position={[-1.78, 0.53, 5.75]} />
          <mesh geometry={nodes.Sphere001.geometry} material={nodes.Sphere001.material} position={[0.62, 0.53, 5.75]} />
          <mesh geometry={nodes.Sphere002.geometry} material={nodes.Sphere002.material} position={[3.07, 0.53, 5.75]} />
          <mesh geometry={nodes.Sphere003.geometry} material={nodes.Sphere003.material} position={[5.26, 0.53, 5.75]} />
        </group>

    */
