
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import { Shared } from './Shared'
import { Camera } from './Camera'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  const freecamera = 1

  return (
    <Canvas shadows  >
      <Camera></Camera>
      <Shared />

      <mesh castShadow position={[0, .25, 1]}>
        <sphereGeometry args={[0.25, 64, 64]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
      <Environment preset="city" />

    </Canvas >
  )
}


/* ********************************

<Html zIndexRange={[0, 0]} prepend transform distanceFactor={0.8}>

            <iframe width={1500} height={1000} src="https://www.youtube.com/embed/IecHwt_N_70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Html>

          */
