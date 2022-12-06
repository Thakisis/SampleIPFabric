import { Html, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import * as THREE from 'three'
import { useStore } from '@/Store'


export function SurfaceStudio(props) {
  const { MicrosoftStudio } = useStore((State) => State.ModelsState)

  return (
    <group position={[3.5, 0, 1.9]} >

      <primitive object={MicrosoftStudio.scene} scale={5}></primitive>
      <mesh scale={1.02} position={[0, 1.58, -.085]} rotation={[.0199, 0, 0]} >
        <planeGeometry args={[3, 2]} />
        <meshBasicMaterial color="black" metalness={0} roughness={1} />
        <Html zIndexRange={[0, 0]} prepend transform distanceFactor={0.8}>
          <iframe style={{ verticalAlign: 'center' }} width={1500} height={998} src="https://www.youtube.com/embed/IecHwt_N_70" frameBorder="0" />
        </Html>
      </mesh>
      <mesh scale={1.02} position={[0, 1.58, -.085]} rotation={[.0199, 0, 0]}>
        <planeGeometry args={[3, 1.5789]} />
        <meshPhysicalMaterial color="black" metalness={1} roughness={0} />
      </mesh>
      <AccumulativeShadows temporal frames={100} color="#1f93ff" colorBlend={2} toneMapped={true} alphaTest={0.9} opacity={2} scale={18}>
        <RandomizedLight amount={8} radius={4} ambient={0.5} intensity={1} position={[5, 5, -10]} bias={0.001} />
      </AccumulativeShadows>
    </group>
  )
}

