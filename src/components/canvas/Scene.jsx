import { useState, useEffect, Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { GridFloor } from './GridFloor'
import { Preload, useProgress, AccumulativeShadows, RandomizedLight, Lightformer, Environment } from '@react-three/drei'
import { easing } from 'maath'
import { Camera } from './Camera'
import { Perf } from 'r3f-perf'
import { useStore } from '@/Store'
import { PreloadModels } from './PreloadModels'
import { LightEffect } from './LightEffect'
import { GetScene } from './GetScene'
export default function Scene({ children, ...props }) {
  const progress = useProgress()
  const { updateProgress } = useStore(state => state.Actions)
  const { scene } = useStore(state => state.ThreeParams)

  useEffect(() => {

    updateProgress({ progress })
  }, [progress, updateProgress])



  const [lights, setLights] = useState(true)
  // Everything defined in here will persist between route changes, only children are swapped
  //const { initPreload, initScene } = useStore(state => state.Actions)
  //const preloadState = useStore((State) => State.PreloadState)
  const notifyLoad = () => {
    setLights(false)

  }
  console.log(scene)

  return (
    <>

      <Canvas shadows>
        {scene ?
          <Suspense fallback={<FallBackSupense notifyLoad={notifyLoad}></FallBackSupense>}>
            <Camera></Camera>
            <PreloadModels></PreloadModels>
            <GridFloor />
            <LightEffect />
            <Preload all />
            <Perf></Perf>
            <Env></Env>
          </Suspense>
          :
          <GetScene />
        }

      </Canvas >
    </>
  )
}

function FallBackSupense({ notifyLoad }) {
  useEffect(() => {
    return notifyLoad()
  }, [notifyLoad])

  return (<group></group>)
}

function Env({ perfSucks }) {
  const ref = useRef()
  useFrame((state, delta) => {
    // Animate the environment as well as the camera
    //easing.damp3(ref.current.rotation, [Math.PI / 2, 0, state.clock.elapsedTime / 5 + state.pointer.x], 0.2, delta)
    //easing.damp3(state.camera.position, [Math.sin(state.pointer.x / 4) * 9, 3.25 + state.pointer.y, Math.cos(state.pointer.x / 4) * 9], 0.5, delta)
    //state.camera.lookAt(0, 1, 0)
  })
  // Runtime environments can be too slow on some systems, better safe than sorry with PerfMon
  return (
    <Environment frames={perfSucks ? 1 : Infinity} preset="city" resolution={256} blur={0.8}>

    </Environment>
  )
}
/* ********************************
<AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.8} color="red" scale={20} position={[0, -0.005, 0]} rotation={[0, 0, 0]}>
            <RandomizedLight amount={8} radius={6} ambient={0.5} intensity={1} position={[-1.5, 2.5, -2.5]} bias={0.001} />
          </AccumulativeShadows>
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
      <Materials></Materials>
      <LightEffect></LightEffect>

      <SurfaceStudio></SurfaceStudio>
      

          */
