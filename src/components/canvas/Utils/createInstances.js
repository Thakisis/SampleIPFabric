function createInstances(gltf) {
  // Obtiene la geometría del objeto del archivo GLTF
  var geometry = gltf.scene.children[0].geometry

  // Crea una nueva instancia de BufferGeometry
  var instancedGeometry = new THREE.InstancedBufferGeometry()

  // Copia la información de vértices y índices de la geometría original a la nueva geometría de instancias
  instancedGeometry.index = geometry.index
  instancedGeometry.attributes.position = geometry.attributes.position
  instancedGeometry.attributes.normal = geometry.attributes.normal
  instancedGeometry.attributes.uv = geometry.attributes.uv

  // Crea una nueva BufferAttribute para almacenar la información de posición de cada instancia
  var instancePositions = new THREE.BufferAttribute(new Float32Array(100 * 3), 3)

  // Establece la información de posición de cada instancia
  for (var i = 0; i < 100; i++) {
    var x = Math.random() * 10 - 5
    var y = Math.random() * 10 - 5
    var z = Math.random() * 10 - 5
    instancePositions.setXYZ(i, x, y, z)
  }

  // Agrega la nueva BufferAttribute de posición de instancias a la geometría de instancias
  instancedGeometry.addAttribute('instancePosition', instancePositions)

  // Crea un material para el objeto y establece la geometría de instancias
  var material = new THREE.MeshStandardMaterial()
  var mesh = new THREE.Mesh(instancedGeometry, material)

  // Agrega el objeto con instancias a la escena
  scene.add(mesh)
}

function createAllInstances(gltf) {
  // Itera sobre todos los hijos del nodo principal del archivo GLTF
  for (let child of gltf.scene.children) {
    // Si el hijo es una instancia de THREE.Mesh, crea una instancia del mismo
    if (child instanceof THREE.Mesh) {
      createInstances(child)
    }
  }
}
