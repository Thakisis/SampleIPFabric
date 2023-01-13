import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useStore } from '@/Store'


export default function Model(props) {
  const group = useRef()
  const dataModel = useGLTF('/models/MicrosoftStudio.glb')
  const { nodes, materials } = dataModel
  const { addModel } = useStore(state => state.Actions)
  useEffect(() => {
    addModel({ dataModel, modelName: "MicrosoftStudio" })
  }, [dataModel, addModel])
  return (
    <group ref={group} {...props} dispose={null}>
      <group ref={group} {...props} dispose={null} scale={4}>
        <mesh geometry={nodes.Base.geometry} material={materials['trackpad.002']} />
        <mesh geometry={nodes.Radiator.geometry} material={nodes.Radiator.material} />
        <mesh geometry={nodes.Rectangle021.geometry} material={nodes.Rectangle021.material} />
        <mesh geometry={nodes.Rectangle019.geometry} material={nodes.Rectangle019.material} />
        <mesh geometry={nodes.Rectangle017.geometry} material={nodes.Rectangle017.material} />
        <mesh geometry={nodes.Rectangle015.geometry} material={nodes.Rectangle015.material} />
        <mesh geometry={nodes.Line019.geometry} material={materials['White Plastic.002']} />
        <mesh geometry={nodes.Rectangle026.geometry} material={nodes.Rectangle026.material} />
        <mesh geometry={nodes.Mouse.geometry} material={materials['Mouse.002']} />
        <mesh geometry={nodes.Mouse_base.geometry} material={nodes.Mouse_base.material} />
        <mesh geometry={nodes.Scroll.geometry} material={materials['Chrome.002']} />
        <mesh geometry={nodes.Legs.geometry} material={materials['metal.002']} />
        <mesh geometry={nodes.Mesh037.geometry} material={nodes.Mesh037.material} />
        <mesh geometry={nodes.Mesh037_1.geometry} material={nodes.Mesh037_1.material} />
        <mesh geometry={nodes.Box007.geometry} material={nodes.Box007.material} />
        <mesh geometry={nodes.Box008.geometry} material={nodes.Box008.material} />
        <mesh geometry={nodes.Glass.geometry} material={materials['Screen.002']} />
        <mesh geometry={nodes.Monitor.geometry} material={materials['Monitor.001']} />
        <mesh geometry={nodes.Monitor_base.geometry} material={nodes.Monitor_base.material} />
        <mesh geometry={nodes.Mesh007.geometry} material={nodes.Mesh007.material} />
        <mesh geometry={nodes.Mesh007_1.geometry} material={materials['Keyboard.002']} />
        <mesh geometry={nodes.Mesh007_2.geometry} material={materials['Keyboard.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/MicrosoftStudio.glb')
