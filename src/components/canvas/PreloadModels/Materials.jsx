
import { useRef, useEffect } from 'react'
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei'
import { useStore } from '@/Store'
export default function Model(props) {
  const glassRef = useRef()
  const dataModel = useGLTF('/models/Materials.glb')
  const { addModel } = useStore(state => state.Actions)
  const { nodes, materials } = dataModel
  useEffect(() => {

    addModel({ dataModel, modelName: "Materials" })

  }, [dataModel, addModel, materials])

  return (
    <group  {...props} dispose={null}>
      <mesh
        geometry={nodes.DarkMetalObject.geometry}
        material={nodes.DarkMetalObject.material}
        position={[0.7, 100, 5]}
      />
      <mesh
        geometry={nodes.WhiteMetalObject.geometry}
        material={nodes.WhiteMetalObject.material}
        position={[-1.57, 100, 10]}
      />
    </group>
  )
}

useGLTF.preload('/models/Materials.glb')
