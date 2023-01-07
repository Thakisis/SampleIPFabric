import * as THREE from 'three'
import InstancedGroupMesh from "three-instanced-group-mesh"
// three modules for load models
import { SVGLoader } from 'three-stdlib'
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
        onUpdateLoaded({ index: index, isComplete: true, scene: gltf.scene, modelName: model.Model, stage: model.stage })
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
export function createSVG() {
  const svg = "<path  d = 'm 620.54688,15.53125 c -58.7539,58.743504 -117.5078,117.48699 -176.26172,176.23047 -37.11982,-18.38486 -79.31769,-28.51781 -120.62924,-20.87456 -84.33653,12.78376 -153.48124,92.32258 -151.23214,178.1753 -2.75618,81.05472 57.50377,158.13356 136.27835,176.44556 42.29325,10.24624 88.34901,6.52534 127.12377,-13.93872 12.6214,-11.40336 20.0238,6.22864 29.30826,13.39008 28.85002,27.8958 56.18334,57.62462 87.0885,83.25156 8.27276,1.69182 3.34942,9.18782 0.90234,13.9336 -14.10008,27.0255 -23.03674,57.114 -20.56776,87.85544 -1.4742,31.7425 8.96402,62.30384 23.3412,90.15236 -80.45182,80.45964 -160.90364,160.91928 -241.35547,241.37886 20.9647,2.6314 45.18761,0.3819 67.41015,1.129 19.79154,-0.1308 39.68536,0.2594 59.41406,-0.1914 59.91908,-59.7919 119.83836,-119.58358 179.75782,-179.37504 45.12182,24.4765 100.6261,33.14356 149.57032,14.93358 66.64338,-21.3664 117.45144,-84.1271 123.08592,-154.07812 7.69554,-67.108 -27.0362,-135.55342 -83.97306,-171.21958 C 753.29444,516.3419 676.67294,516.53144 618.8059,549.90162 609.25646,547.57356 601.61418,533.52978 592.77302,526.85074 564.6638,498.72732 536.55456,470.6039 508.44532,442.48046 532.5452,401.46722 540.86468,351.21612 527.92968,305.13282 523.4209,287.12154 515.7421,270.14858 507.89454,253.39454 586.77772,174.88377 666.76744,97.434306 744.54296,17.84375 739.14634,14.07182 728.90822,16.923902 721.95,15.690644 688.16446,15.198719 654.2724,15.187448 620.54688,15.53125 Z m -266.875,233.12499 c 51.19294,-0.9429 98.44932,42.09642 101.3125,93.46486 3.22676,36.10494 -14.11796,73.48056 -45.31642,92.58202 -32.3385,23.28648 -78.51896,21.50066 -111.57812,0.80078 -22.7931,-16.76972 -41.36234,-40.95182 -44.58593,-69.7539 -8.77905,-49.52618 25.11059,-102.36666 74.38281,-113.90234 8.37863,-2.1538 17.09768,-3.22354 25.78516,-3.19142 z m 358.96874,356.98438 c 51.83722,-3.17918 98.46148,42.21164 101.63282,92.92188 5.12758,49.8425 -32.8234,99.20484 -82.38672,107.27344 -56.12052,12.23342 -116.60426,-33.37864 -119.16406,-90.73828 -4.74364,-42.74672 21.03596,-85.77076 60.78906,-102.1289 12.15136,-5.89438 25.82232,-7.16478 39.1289,-7.32814 z' transform = 'scale(0.26458333)' /> "
  const loader = new SVGLoader()
  const svgPath = loader.parse(svg)


}
