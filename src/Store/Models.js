export const Models = [
  {
    modelName: 'Computer',
    modelFile: 'ComputerNetwork.glb',
    modelSize: 76516,
    stage: "s1"
  },
  {
    modelName: 'MicrosoftStudio',
    modelFile: 'MicrosoftStudio.glb',
    modelSize: 388556,
    stage: "s2"
  },

  {
    modelName: 'ServerRack',
    modelFile: 'ServerRack.glb',
    modelSize: 32808,
    stage: "s1"
  },
]


export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Materials2-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube001.geometry} material={nodes.Cube001.material} position={[-2.34, -0.21, 0.14]} />
      <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} />
      <mesh geometry={nodes.Sphere.geometry} material={nodes.Sphere.material} position={[-1.78, 0.53, 5.75]} />
      <mesh geometry={nodes.Sphere001.geometry} material={nodes.Sphere001.material} position={[0.62, 0.53, 5.75]} />
      <mesh geometry={nodes.Sphere002.geometry} material={nodes.Sphere002.material} position={[3.07, 0.53, 5.75]} />
      <mesh geometry={nodes.Sphere003.geometry} material={nodes.Sphere003.material} position={[5.26, 0.53, 5.75]} />
    </group>
  )
}

useGLTF.preload('/Materials2-transformed.glb')
