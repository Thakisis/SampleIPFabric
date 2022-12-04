import { useMemo } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Preload, Environment, Html, AccumulativeShadows, RandomizedLight, Center } from '@react-three/drei'
import { SurfaceStudio } from './SurfaceStudio'
import * as THREE from 'three-stdlib'
import { Perf } from "r3f-perf"



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
      <group position={[3.5, 0, 1.9]} >
        <SurfaceStudio
          position={[0, 0, 0]}
        />
        <mesh scale={1.02} position={[0, 1.58, -.085]} rotation={[.0199, 0, 0]} >
          <planeGeometry args={[3, 2]} />
          <meshBasicMaterial color="black" metalness={0} roughness={1} blending={THREE.AdditiveBlending} />
          <Html zIndexRange={[0, 0]} prepend transform distanceFactor={0.8}>
            <iframe style={{ verticalAlign: 'center' }} width={1500} height={998} src="https://www.youtube.com/embed/IecHwt_N_70" frameBorder="0" />
          </Html>
        </mesh>
        <mesh scale={1.02} position={[0, 1.58, -.085]} rotation={[.0199, 0, 0]}>
          <planeGeometry args={[3, 1.5789]} />
          <meshPhysicalMaterial color="black" metalness={1} roughness={0} blending={THREE.NoBlending} />
        </mesh>
      </group>
      <Center top position={[1, 0, 4.5]}>
        <mesh castShadow>
          <sphereGeometry args={[0.25, 64, 64]} />
          <meshStandardMaterial color="lightblue" />
        </mesh>
      </Center>
      <AccumulativeShadows temporal frames={100} color="#1f93ff" colorBlend={2} toneMapped={true} alphaTest={0.9} opacity={2} scale={18}>
        <RandomizedLight amount={8} radius={4} ambient={0.5} intensity={1} position={[5, 5, -10]} bias={0.001} />
      </AccumulativeShadows>

      <OrbitControls></OrbitControls>
      <Environment preset="city" />

    </Canvas >
  )
}


/* ********************************

<Html zIndexRange={[0, 0]} prepend transform distanceFactor={0.8}>

            <iframe width={1500} height={1000} src="https://www.youtube.com/embed/IecHwt_N_70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Html>

          */
