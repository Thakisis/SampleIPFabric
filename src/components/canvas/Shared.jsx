import { CubePreloader } from './CubePreloader'
import { SurfaceStudio } from './SurfaceStudio'
import { useStore } from '@/Store'

export function Shared(props) {

  const { totalItems, loadedItems, totalSize, totalLoaded } = useStore((State) => State.PreloadState)




  if (totalItems !== loadedItems || totalItems === 0) {


    return <CubePreloader percent={totalItems !== 0 ? totalLoaded / totalSize * 100 : 0} />
  }

  return <SurfaceStudio></SurfaceStudio>




}

//return <primitive object={gltf.scene} position={[0, 0, 0]} />

