import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useStore } from '@/Store'

export default function Model(props) {
  const group = useRef()
  const dataModel = useGLTF('/models/ComputerNetworkUE.glb')








  const { addModel } = useStore(state => state.Actions)
  useEffect(() => {
    addModel({ dataModel, modelName: "ComputerNetwork" })
  }, [dataModel, addModel])
  const { nodes, materials } = dataModel
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.ComputerNetworkue.geometry} material={materials['gray_metallic.001']} />
      <mesh geometry={nodes.ComputerNetworkue_1.geometry} material={materials.Material_002} />
      <mesh geometry={nodes.ComputerNetworkue_2.geometry} material={materials.Material_001} />
      <mesh geometry={nodes.ComputerNetworkue_3.geometry} material={materials.metallic_001} />
      <mesh geometry={nodes.ComputerNetworkue_4.geometry} material={materials['Screen.001']} />
      <mesh geometry={nodes.ComputerNetworkue_5.geometry} material={materials['Plastic2.001']} />
      <mesh geometry={nodes.ComputerNetworkue_6.geometry} material={materials.Material_004} />
      <mesh geometry={nodes.ComputerNetworkue_7.geometry} material={materials['vintage_1.001']} />
      <mesh geometry={nodes.ComputerNetworkue_8.geometry} material={materials['gray_stiker.001']} />
      <mesh geometry={nodes.ComputerNetworkue_9.geometry} material={materials['vintage_2.001']} />
      <mesh geometry={nodes.ComputerNetworkue_10.geometry} material={materials['keys.001']} />
      <mesh geometry={nodes.ComputerNetworkue_11.geometry} material={materials['Buttons.001']} />
      <mesh geometry={nodes.ComputerNetworkue_12.geometry} material={materials.Computer_001} />
    </group>
  )
}

useGLTF.preload('/models/ComputerNetworkUE.glb')
