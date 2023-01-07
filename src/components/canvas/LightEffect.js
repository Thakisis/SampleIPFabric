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
        <Bloom luminanceThreshold={1} mipmapBlur />
      </EffectComposer>
      <Environment preset='city' />
      <ContactShadows />
    </>
  )
}

