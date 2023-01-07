import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { GridFloor } from './GridFloor'
import { Environment } from '@react-three/drei'
import { Shared } from './Shared'
import { Camera } from './Camera'
import { Perf } from 'r3f-perf'
import { LightEffect } from './LightEffect'

import IPlogo from './Iplogo'

export default function Scene({ children, ...props }) {
  const [lights, setLights] = useState(false)
  // Everything defined in here will persist between route changes, only children are swapped


  return (
    <Canvas shadows>
      <Camera></Camera>

      <IPlogo lights={lights}></IPlogo>

      <GridFloor />

      <mesh castShadow position={[0, .25, 1]}

        onClick={() => setLights(!lights)}
      >
        <sphereGeometry args={[0.25, 64, 64]} />
        <meshStandardMaterial
          opacity={1} //

          roughness={0.1}
          color={0x030303}
          metalness={1}

        />
      </mesh>

      <LightEffect></LightEffect>


      <Perf></Perf>
    </Canvas >
  )
}


/* ********************************
<Environment preset="city" />
      

          */
