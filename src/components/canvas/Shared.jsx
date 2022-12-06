import { CubePreloader } from './CubePreloader'
import { SurfaceStudio } from './SurfaceStudio'
import { Network } from './Network'
import { useStore } from '@/Store'
import { Html, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
export function Shared(props) {

  const { totalItems, loadedItems, totalSize, totalLoaded } = useStore((State) => State.PreloadState)




  if (totalItems !== loadedItems) {

    return <CubePreloader percent={totalItems !== 0 ? totalLoaded / totalSize * 100 : 0} />
  }
  return (
    <>
      <Network />
      <SurfaceStudio />
      <AccumulativeShadows temporal frames={100} color="#1f93ff" colorBlend={2} toneMapped={true} alphaTest={0.9} opacity={2} scale={18}>
        <RandomizedLight amount={8} radius={4} ambient={0.5} intensity={1} position={[5, 5, -10]} bias={0.001} />
      </AccumulativeShadows>
    </>
  )




}

//return <primitive object={gltf.scene} position={[0, 0, 0]} />

