
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Shared } from './Shared'
import { Camera } from './Camera'
import { Perf } from 'r3f-perf'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  const freecamera = 1

  return (
    <Canvas shadows shadowMap>
      <Camera></Camera>


      <ambientLight intensity={0.1} />
      <directionalLight
        intensity={0.5}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
      />
      <Shared />

      <mesh castShadow position={[0, .25, 1]}>
        <sphereGeometry args={[0.25, 64, 64]} />
        <meshStandardMaterial
          opacity={1} //

          roughness={0.1}
          color={0x030303}
          metalness={1}

        />
      </mesh>
      <Environment preset='city' />

      <Perf></Perf>
    </Canvas >
  )
}


/* ********************************
<Environment preset="city" />
      

          */
