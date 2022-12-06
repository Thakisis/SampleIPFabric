import { CubePreloader } from './CubePreloader'
import { SurfaceStudio } from './SurfaceStudio'
import { useStore } from '@/Store'

export function Shared(props) {

  const { totalItems, loadedItems, totalSize, totalLoaded } = useStore((State) => State.PreloadState)



  if (totalItems !== loadedItems) {

    return <CubePreloader percent={totalLoaded / totalSize * 100} />
  }

  return <SurfaceStudio></SurfaceStudio>




}

//return <primitive object={gltf.scene} position={[0, 0, 0]} />

