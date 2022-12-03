import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Stage, Environment, AccumulativeShadows, RandomizedLight, MeshReflectorMaterial } from '@react-three/drei'
import { SurfaceStudio } from './SurfaceStudio'
export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props}>


      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />

      <SurfaceStudio
        position={[1, 0, 0]}
      />


      <mesh rotation-x={-Math.PI / 2} scale={100} position={[0, 0, 0]}>
        <planeGeometry />
        <MeshReflectorMaterial blur={[1000, 125]} resolution={1024} mixBlur={1} mixStrength={8} color="#020202" metalness={0} roughness={1} />
      </mesh>
      {children}
      <Preload all />
      <OrbitControls
        autoRotate={false}
        autoRotateSpeed={-0.1}
        zoomSpeed={0.25}
        minZoom={40}
        maxZoom={50}
        enablePan={false}
        dampingFactor={0.05}
        minPolarAngle={Math.PI / 2.4}
        maxPolarAngle={Math.PI / 2.4}
      />

      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr" background blur={0} />
    </Canvas>
  )
}
