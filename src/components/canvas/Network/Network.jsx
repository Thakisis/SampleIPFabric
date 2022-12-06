import { useRef } from 'react'
import { Clone, QuadraticBezierLine } from '@react-three/drei'
import * as THREE from 'three'
import { useStore } from '@/Store'


export const Network = () => {
  const PCref = useRef([])
  const ServerRef = useRef()

  const { ServerRack } = useStore((State) => State.ModelsState)
  const computers = new Array(5).fill(0).map((value, index) => {

    const distance = 1.5
    const positionX = distance * Math.sin(Math.PI * 2 / 5 * index)
    const positionY = distance * Math.cos(Math.PI * 2 / 5 * index)
    return (
      <ComputerNet key={index} position={[positionX, 0, positionY]} rotation={[0, Math.PI * 2 / 5 * index, 0]} passRef />
    )
  })

  return (
    <group position={[-2, 0, 0]}>
      <group position={[2, 0, 2.6]} >

        <Clone scale={.5} object={ServerRack.scene} />
        <primitive object={ServerRack.scene} scale={0}></primitive>
        {computers}

      </group>
    </group>
  )
}

function ComputerNet(props) {
  const { Computer } = useStore((State) => State.ModelsState)
  return (<group {...props}><Clone scale={.5} object={Computer.scene} /></group>)
}

function Cable({ start, end, v1 = new THREE.Vector3(), v2 = new THREE.Vector3() }) {
  const ref = useRef()
  useFrame(() => ref.current.setPoints(start.current.getWorldPosition(v1), end.current.getWorldPosition(v2)), [])
  return <QuadraticBezierLine ref={ref} lineWidth={3} color="#ff2060" />
}
