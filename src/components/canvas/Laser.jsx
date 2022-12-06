import { useFrame } from '@react-three/fiber'



export function Laser() {
  const lasers = []
  const NUM_LASERS = 10

  // Create the lasers
  for (let i = 0; i < NUM_LASERS; i++) {
    lasers.push({
      position: new THREE.Vector3(0, 0, 0),
      direction: new THREE.Vector3(0, 0, 1),
    })
  }

  // Update the laser positions and directions in each frame
  useFrame(() => {
    lasers.forEach(laser => {
      laser.position.x += laser.direction.x * 0.1
      laser.position.y += laser.direction.y * 0.1
      laser.position.z += laser.direction.z * 0.1
    })
  })

  // Draw the lasers as lines
  return (
    <group>
      {lasers.map((laser, i) => (
        <line key={i}>
          <bufferGeometry
            vertices={[laser.position, laser.position.clone().add(laser.direction)]}
          />
          <lineBasicMaterial color={0xff0000} />
        </line>
      ))}
    </group>
  )
}
