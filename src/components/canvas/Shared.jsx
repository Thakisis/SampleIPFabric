import { Suspense, useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { CubePreloader } from './CubePreloader'
import { Network } from './Network'
import { useStore } from '@/Store'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import IPlogo from './Iplogo'
import { Floor } from './Floor'

export function Shared(props) {

  const { initPreload, initScene } = useStore(state => state.Actions)
  const { totalItems, loadedItems, totalSize, totalLoaded } = useStore((State) => State.PreloadState)
  const { scene } = useThree()
  useEffect(() => {
    initPreload()
  }, [initPreload])

  useEffect(() => {
    if (totalItems === loadedItems)
      initScene(scene)
  }, [totalItems, loadedItems, scene, initScene])


  if (totalItems !== loadedItems) {

    return <CubePreloader percent={totalItems !== 0 ? totalLoaded / totalSize * 100 : 0} />
  }
  return (
    <>
      <Network />
      <Suspense fallback={undefined}>
        <IPlogo></IPlogo>
      </Suspense>



      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={1} mipmapBlur />
      </EffectComposer>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.4} />
      </mesh>
      <Suspense>
        <Floor></Floor>
      </Suspense>
    </>
  )




}

/*

<AccumulativeShadows temporal frames={100} color="#1f93ff" colorBlend={2} toneMapped={true} alphaTest={0.9} opacity={2} scale={18}>
      </AccumulativeShadows>
      */

