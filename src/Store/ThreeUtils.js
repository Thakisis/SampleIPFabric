import * as THREE from 'three'
import InstancedGroupMesh from "three-instanced-group-mesh"
// three modules for load models
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'




export function loadModels({ modelsArray, onUpdateLoaded }) {

  //Three loader
  const loader = new GLTFLoader()
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('/libs/draco/')
  loader.setDRACOLoader(dracoLoader)
  //iterate Array
  modelsArray.map((model, index) => {
    loader.loadAsync(`/models/${model.url}`,
      //progress function
      (xhr) => {
        onUpdateLoaded({ index: index, sizeLoaded: xhr.loaded })
      },
    )
      .then((gltf) => {
        gltf.scene.traverse(function (node) {

          if (node.isMesh) {
            node.castShadow = true
            node.receiveShadow = true
          }

        })
        onUpdateLoaded({ index: index, isComplete: true, scene: gltf.scene, modelName: model.Model })
      })
  })

}




// create instances of each mesh in model
export function createInstances({ model, instanceName, transformArray, amount, groupTransform, scene, groupRef, addInstance }) {

  //dummy object to get coordinates
  const dummy = new THREE.Object3D()
  const InstancedMeshes = []
  const instancedModel = new InstancedGroupMesh(model.scene, amount)
  instancedModel.castShadow = true
  instancedModel.receiveShadow = true

  // calculate matrix of each mesh
  transformArray.map((transform, index) => {
    instancedModel.setMatrixAt(index, setTransform(transform))
  })
  Object.values(instancedModel.instanceCollect).map(mesh => {
    mesh.castShadow = true
    mesh.receiveShadow = true
  })

  // if groupRef is undefined create group and apply transform matrix
  const group = groupRef ? groupRef : new THREE.Group()
  if (!groupRef) {

    group.name = instanceName
    group.applyMatrix4(setTransform(groupTransform))

  }
  group.add(instancedModel)
  scene.add(group)
  const dataInstance = { instancedModel, instanceName, group: group, groupTransform, transformArray, amount, isCreated: true, isAddded: false, isIn: false, isOut: false, shouldAnimate: false, instance: true }
  addInstance(dataInstance)

  // return the object contain information needed for animation
  return { instancedModel, group: group, transformArray, amount, isCreated: true, isAddded: false, isIn: false, isOut: false, shouldAnimate: false, instance: true }
}






// function for get matrix from tramsforn {position,rotation,scale}
export function setTransform(transformArray) {
  const dummy = new THREE.Object3D()
  const { position, rotation, scale } = transformArray

  if (position)
    dummy.position.set(position[0], position[1], position[2])
  if (rotation)
    dummy.rotation.set(rotation[0], rotation[1], rotation[2])
  if (scale)
    dummy.scale.set(scale[0], scale[1], scale[2])
  dummy.updateMatrix()
  return dummy.matrix

}


//get coordinates and rotation of  a group of pc 
export function getNetworkTransform({ amount, distance = 0, angle = 0, angledelta = 0, scale = 0, scaledelta = 0 }) {
  const transformArray = new Array(amount).fill(0).map((value, index) => {
    const positionX = distance * Math.sin(Math.PI * 2 / amount * index)
    const positionY = distance * Math.cos(Math.PI * 2 / amount * index)
    return { position: [positionX, 0, positionY], rotation: [0, angle + angledelta * index + Math.PI * 2 / amount * index, 0], scale: [scale + scaledelta * index, scale + scaledelta * index, scale + scaledelta * index] }
  })

  return transformArray
}
export function getNetworkMatrix({ amount, distance = 1, anglegroup = 0, angle = 0, angledelta = 0, scale = .5, scaledelta = 0 }) {
  const matrixArray = new Array(amount).fill(0).map((value, index) => {
    const positionX = distance * Math.sin(Math.PI * 2 / amount * index + Math.PI * anglegroup)
    const positionY = distance * Math.cos(Math.PI * 2 / amount * index + Math.PI * anglegroup)
    const transform = {
      position: [positionX, 0, positionY],
      rotation: [0, angle + angledelta * index + Math.PI * 2 / amount * index, 0],
      scale: [scale + scaledelta * index, scale + scaledelta * index, scale + scaledelta * index]
    }
    return (setTransform(transform))
  })

  return matrixArray
}
