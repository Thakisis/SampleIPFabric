import { useEffect } from "react"

export function CubePreloader({ percent, ...props }) {

  const size = percent / 100
  return (
    <group {...props}>
      <mesh position={[0, size / 2, 0]}>
        <boxGeometry args={[1, size, 1]} />
        <meshStandardMaterial color='white' />
      </mesh>
      <mesh position={[0, (1 + size) / 2, 0]}>
        <boxGeometry args={[1, 1 - size, 1]} />
        <meshStandardMaterial color='red' />
      </mesh>
    </group>

  )
}


