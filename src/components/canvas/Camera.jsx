import { useRef } from 'react'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
export const Camera = () => {
  const cameraRef = useRef()
  //const { viewport } = useThree()
  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 1000
    const y = (mouse.y * viewport.height) / 1000

    const rotation = []


  })
  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[6, 2.5, 10]}
        rotation={[-.19, .5, .1]}

        fov={25} />

    </>

  )
}

function Rig({ vec = new THREE.Vector3() }) {
  useFrame((state) => state.camera.position.lerp(vec.set(6 + state.pointer.x, 2.5, 10), 0.1))
}
