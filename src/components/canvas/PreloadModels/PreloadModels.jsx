import { useState, Suspense } from 'react'
import { useGLTF, Preload, Html } from '@react-three/drei'
import Materials from './Materials'
import ComputertNetwork from './ComputerNetworkUE'
import MicrosoftStudio from './MicrosoftStudio'
import ServerRack from './ServerRack'
import Glass from './Glass'
import Iplogo from './Iplogo2'
import { useStore } from '@/Store'
import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'



export const PreloadModels = ({ shower }) => {
  const [show, setShow] = useState(false)



  return (

    <group>

      <Materials />
      <ComputertNetwork />
      <ServerRack />
      <MicrosoftStudio />
      <Glass />
      <Iplogo></Iplogo>
      <mesh castShadow position={[-3, .25, .25]}
        onClick={() => setShow(!show)}
      >
        <sphereGeometry args={[0.5, 64, 64]} />
        <meshPhysicalMaterial color="black" metallnes={1} roughness={0} />
      </mesh>
    </group>

  )
}



/*
const data = Models.map((model) => {
    const mydata = useGLTF(`/models/${model.modelFile}`)
    return mydata
  })
  */
