import { DoubleSide } from 'three'
import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useStore } from '@/Store'

export default function Model(props) {
  const group = useRef()

  const dataModel = useGLTF('/models/ServerRackUE.glb')
  const { addModel } = useStore(state => state.Actions)
  useEffect(() => {
    addModel({ dataModel, modelName: "ServerRack" })
  }, [dataModel, addModel])
  const { nodes, materials } = dataModel

  return (
    <group ref={group} {...props} dispose={null} position={[2, 0, 0]}>
      <mesh geometry={nodes.ServerRack.geometry} material={materials.drives} />
      <mesh geometry={nodes.ServerRack_1.geometry} material={materials.green_light} />
      <mesh geometry={nodes.ServerRack_2.geometry} material={materials.red_light} />
      <mesh geometry={nodes.ServerRack_3.geometry} material={materials.button} />
      <mesh geometry={nodes.ServerRack_4.geometry} material={materials.blue_light} />
      <mesh geometry={nodes.ServerRack_5.geometry} material={materials.botton_pad} />
      <mesh geometry={nodes.ServerRack_6.geometry} material={materials.cabinet} side={DoubleSide} />
      <mesh geometry={nodes.ServerRack_7.geometry} material={materials.cabinet_inside} />
    </group>
  )
}

useGLTF.preload('/models/ServerRackUE.glb')
