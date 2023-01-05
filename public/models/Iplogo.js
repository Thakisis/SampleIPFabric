/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/iplogo-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.left.geometry} material={materials['SVGMat.002']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.right.geometry} material={materials['SVGMat.003']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.center.geometry} material={materials['SVGMat.004']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/iplogo-transformed.glb')
