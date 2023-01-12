import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useStore } from '@/Store'

export default function Model(props) {
  const group = useRef()

  const dataModel = useGLTF('/models/ServerRack.glb')
  const { addModel } = useStore(state => state.Actions)
  useEffect(() => {
    addModel({ dataModel, modelName: "ServerRack" })
  }, [dataModel, addModel])
  const { nodes, materials } = dataModel

  return (
    <group ref={group} {...props} dispose={null} position={[2, 0, 0]}>
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials.drives}
        position={[-0.09, 1.35, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.9}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.green_light}
        position={[-0.09, 1.35, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.9}
      />
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials.red_light}
        position={[-0.09, 1.35, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.9}
      />
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.button}
        position={[-0.09, 1.35, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.9}
      />
      <mesh
        geometry={nodes.Object_3.geometry}
        material={materials.blue_light}
        position={[-0.09, 1.35, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.9}
      />
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.botton_pad}
        position={[-0.09, 1.35, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.9}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.cabinet}
        position={[-0.09, 1.35, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.9}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.cabinet_inside}
        position={[-0.09, 1.35, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.9}
      />
    </group>
  )
}

useGLTF.preload('/models/ServerRack.glb')
