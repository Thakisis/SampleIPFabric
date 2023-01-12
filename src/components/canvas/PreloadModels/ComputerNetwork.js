import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useStore } from '@/Store'

export default function Model(props) {
  const group = useRef()
  const dataModel = useGLTF('/models/ComputerNetwork.glb')








  const { addModel } = useStore(state => state.Actions)
  useEffect(() => {
    addModel({ dataModel, modelName: "ComputerNetwork" })
  }, [dataModel, addModel])
  const { nodes, materials } = dataModel
  return (
    <group ref={group} {...props} dispose={null} position={[-2, 0, 0]}>
      <mesh geometry={nodes.cpu_gray_metallic_0.geometry} material={materials.gray_metallic} />
      <mesh geometry={nodes.cpu_gray_stiker_0.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.cpu_gray_0.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.cpu_green_0.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.cpu001_gray_metallic_0.geometry} material={materials['metallic.001']} />
      <mesh geometry={nodes.Cube_screen_0.geometry} material={materials.Screen} />
      <mesh geometry={nodes.flopy_vintage_1_0.geometry} material={nodes.flopy_vintage_1_0.material} />
      <mesh geometry={nodes.flopy001_vintage_1_0.geometry} material={nodes.flopy001_vintage_1_0.material} />
      <mesh geometry={nodes.flopy002_vintage_1_0.geometry} material={materials.vintage_1} />
      <mesh geometry={nodes.cpu003_gray_stiker_0.geometry} material={materials.gray_stiker} />
      <mesh geometry={nodes.kewboard_vintage_2_0.geometry} material={materials.vintage_2} />
      <mesh geometry={nodes.kewboard_white_0.geometry} material={nodes.kewboard_white_0.material} />
      <mesh geometry={nodes.Plane015_white_0.geometry} material={materials.keys} />
      <mesh geometry={nodes.Plane017_white_0.geometry} material={nodes.Plane017_white_0.material} />
      <mesh geometry={nodes.monitor_black_0.geometry} material={materials.Buttons} />
      <mesh geometry={nodes.monitor_screen_0.geometry} material={materials.screen} />
      <mesh geometry={nodes.monitor_vintage_2_0.geometry} material={nodes.monitor_vintage_2_0.material} />
      <mesh geometry={nodes.monitor_white001_0.geometry} material={nodes.monitor_white001_0.material} />
      <mesh geometry={nodes.vent_monitor_gray_0.geometry} material={nodes.vent_monitor_gray_0.material} />
    </group>
  )
}

useGLTF.preload('/models/ComputerNetwork.glb')
