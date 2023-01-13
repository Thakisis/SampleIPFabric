import ComputertNetwork from './ComputerNetwork'
import MicrosoftStudio from './MicrosoftStudio'
import ServerRack from './ServerRack'
import IPFabric from './IPFabric'
import { useThree } from '@react-three/fiber'

export const PreloadModels = ({ shower }) => {
  const { scene } = useThree()
  return (
    <group>
      <ComputertNetwork />
      <ServerRack />
      <MicrosoftStudio />
      <IPFabric position={[-2, 0, 3]} />
      <mesh castShadow position={[-3, .25, .25]}
      >
        <sphereGeometry args={[0.5, 64, 64]} />
        <meshPhysicalMaterial color="black" metallnes={1} roughness={0} />
      </mesh>
    </group>

  )
}
