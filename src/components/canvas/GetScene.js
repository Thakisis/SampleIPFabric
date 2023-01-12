import { useEffect } from 'react'
import { useStore } from '@/Store'
import { useThree } from '@react-three/fiber'

export function GetScene() {
  const { setThree } = useStore(state => state.Actions)
  const { scene: sceneStore } = useStore(state => state.ThreeParams)
  const { scene } = useThree()

  useEffect(() => {
    if (sceneStore)
      return
    setThree({ scene })

  }, [scene, sceneStore, setThree])
  return (
    <group>

    </group>
  )
}
