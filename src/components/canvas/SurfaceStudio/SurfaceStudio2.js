import { Html, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import * as THREE from 'three'
import { useStore } from '@/Store'


export function SurfaceStudio(props) {
  const { MicrosoftStudio } = useStore((State) => State.ModelsState)

  return (
    <group position={[3.5, 0, 1.9]} >

      <primitive object={MicrosoftStudio.scene} scale={5}></primitive>
      <mesh scale={1.02} position={[0, 1.57, -.089]} rotation={[.0125, 0, 0]} >
        <planeGeometry args={[3, 2]} />
        <meshPhysicalMaterial roughness={0.0} opacity={0.1} color={0x0303030} side={THREE.DoubleSide} />
        <Html zIndexRange={[0, 0]} prepend transform distanceFactor={.8}  >

          <iframe style={{}} width={1500} height={1000} src="https://www.youtube.com/embed/IecHwt_N_70" frameBorder="100" />

        </Html>
      </mesh>

    </group>
  )
}
