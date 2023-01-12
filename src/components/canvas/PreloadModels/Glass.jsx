import { PlaneGeometry } from 'three'
import { useRef, useEffect } from 'react'
import { MeshTransmissionMaterial } from '@react-three/drei'
import { useStore } from '@/Store'
export default function Model(props) {
  const meshRef = useRef()

  const { addModel } = useStore(state => state.Actions)
  const { Glass } = useStore(state => state.Materials)

  useEffect(() => {
    if (meshRef.current) {


      addModel({ dataModel: meshRef.current, modelName: "Glass", materials: { Glass: meshRef.current.material } })
    }
  }, [addModel, meshRef])

  const configGlass = {


    samples: 16,
    resolution: 256,
    transmission: 0.95,
    roughness: .11,
    clearcoat: 1,
    clearcoatRoughness: 0,
    thickness: 2,
    ior: 1.2,
    chromaticAberration: 0,
    anisotropy: 0,
    distortion: 0.0,
    distortionScale: 0.3,
    temporalDistortion: 0.5,
    attenuationDistance: 0.5,
    attenuationColor: '#ffffff',
    color: '#ffffff'

  }


  const configGlass2 = {
    samples: 10,
    resolution: 256,
    transmission: 0.95,
    roughness: .11,
    clearcoat: 1,
    clearcoatRoughness: 0,
    thickness: 1,
    ior: 1.1,
    chromaticAberration: 0,
    anisotropy: 0,
    distortion: 0.5,
    distortionScale: 0.3,
    temporalDistortion: 0.5,
    attenuationDistance: 0.5,
    attenuationColor: '#3665a1',
    color: '#ffffff'
  }


  return !Glass ? (

    <mesh
      ref={meshRef}
      geometry={new PlaneGeometry(1, 1)}
      position={[0.7, 0, 3]}
    >
      <MeshTransmissionMaterial {...configGlass2} />
    </mesh>

  ) : <group></group>
}


