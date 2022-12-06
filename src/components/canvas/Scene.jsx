import { useMemo } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Preload, Environment, Html, AccumulativeShadows, RandomizedLight, Center, Bounds } from '@react-three/drei'
import { Shared } from './Shared'


export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped

  return (
    <Canvas shadows camera={{
      position: [7.759224992186554, 2.4961505835651057, 8.524320666068103]
      ,
      fov: 25,
      lookat: [1, 10, 0]
    }}
    >
      <Shared />

      <mesh castShadow position={[0, .25, 1]}>
        <sphereGeometry args={[0.25, 64, 64]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
      <Environment preset="city" />
      ´<OrbitControls></OrbitControls>
    </Canvas >
  )
}


/* ********************************

<Html zIndexRange={[0, 0]} prepend transform distanceFactor={0.8}>

            <iframe width={1500} height={1000} src="https://www.youtube.com/embed/IecHwt_N_70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Html>

          */
