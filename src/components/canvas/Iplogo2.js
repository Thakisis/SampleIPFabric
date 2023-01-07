/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

export default function IPlogo(props) {
  useFrame((state, delta) => {
    const t = (1 + Math.sin(state.clock.elapsedTime * 10)) / 2
    stripe.current.color.setRGB(1 + t * 10, 2, 20 + t * 50)
    stripe2.current.color.setRGB(1 + t * 10, 2, 20 + t * 50)
    //light2.current.intensity = 1 + t * 2
    //light.current.intensity = 1 + t * 2
  })
  const { scene } = useThree()
  useEffect(() => {
    if (!scene || !materials) return


  }, [scene])



  const group = useRef()
  const stripe = useRef()
  const stripe2 = useRef()
  const light = useRef()
  const light2 = useRef()
  const { nodes, materials } = useGLTF('/models/iplogo2-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null} rotation={[Math.PI / 2, 0, 0]} position={[-1, 0, -1]} scale={5}>


      <mesh geometry={nodes.left.geometry} material={materials['SVGMat.005']} />
      <mesh geometry={nodes.Right.geometry} material={materials['SVGMat.004']} />
      <mesh geometry={nodes.center.geometry} material={nodes.center.material} scale={[1, .8, 1]} />
      <mesh geometry={nodes.insetBack.geometry} material={nodes.insetBack.material} position={[0, -0.0314, 0]} >
        <meshBasicMaterial ref={stripe2} color="blue" toneMapped={false} />

      </mesh>
      <mesh geometry={nodes.insetfront.geometry} material={nodes.insetfront.material} position={[0, 0.0314, 0]} >
        <meshBasicMaterial ref={stripe} color="blue" toneMapped={false} />


      </mesh>


    </group>
  )
}

useGLTF.preload('/models/iplogo2-transformed.glb')
