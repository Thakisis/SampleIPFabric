import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Clone, QuadraticBezierLine } from '@react-three/drei'
import * as THREE from 'three'
import { useStore } from '@/Store'


export const Network = () => {

  const { canRender } = useStore(state => state)
  const { renderFrame } = useStore(state => state.Actions)
  const ObjectsRef = useStore.getState().ObjectsRef

  useFrame((props) => {

    renderFrame(props)


  })




  return (
    <group position={[0, 0, 2.5]}>
      <group position={[0, 0, 0]} >



      </group>
    </group>
  )
}

function calcPositionPC() {

}

function Cable({ start, end, v1 = new THREE.Vector3(), v2 = new THREE.Vector3() }) {
  const ref = useRef()


  useFrame(() => ref.current.setPoints(start.current.getWorldPosition(v1), end.current.getWorldPosition(v2)), [])
  return <QuadraticBezierLine ref={ref} lineWidth={3} color="#ff2060" />
}
//<Clone scale={.5} object={ServerRack.scene} />
