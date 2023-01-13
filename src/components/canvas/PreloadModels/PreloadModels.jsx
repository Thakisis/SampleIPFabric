import ComputertNetwork from './ComputerNetwork'
import MicrosoftStudio from './MicrosoftStudio'
import ServerRack from './ServerRack'
import IPFabric from './IPFabric'
import Screen from './Screen'
import { useThree } from '@react-three/fiber'

export const PreloadModels = ({ shower }) => {
  const { scene } = useThree()
  return (
    <group>
      <ComputertNetwork />
      <ServerRack />
      <MicrosoftStudio />
      <IPFabric position={[-2, 0, 3]} />
      <Screen rotation={[0, Math.PI / 2, 0]} scale={.4} position={[-4, 2, -2]} />
      <mesh castShadow position={[-3, .25, .25]}
      >
        <sphereGeometry args={[0.5, 64, 64]} />
        <meshPhysicalMaterial color="black" metallnes={1} roughness={0} />
      </mesh>
    </group>

  )
}
