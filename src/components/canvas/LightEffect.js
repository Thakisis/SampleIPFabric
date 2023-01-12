import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { Environment, ContactShadows } from "@react-three/drei"
export const LightEffect = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        intensity={0.5}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
      />
      <EffectComposer disableNormalPass>
        <Bloom intensity={.5} luminanceThreshold={1} mipmapBlur luminanceSmoothing={1} />
      </EffectComposer>
      <Environment preset='city' />
      <ContactShadows />
    </>
  )
}
/*

intensity = { 1.0} // The bloom intensity.
blurPass = { undefined } // A blur pass.
width = { Resizer.AUTO_SIZE } // render width
height = { Resizer.AUTO_SIZE } // render height
kernelSize = { KernelSize.LARGE } // blur kernel size
luminanceThreshold = { 0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
luminanceSmoothing = { 0.025} // smoothn*/
