import { createInstances, getNetworkTransform, createSVG } from "./ThreeUtils"

//export function createInstances({ model, transformArray, amount, groupTransform, scene, groupRef, instanceName }) {
export function createScene(scene, models, addInstance) {

  //create Network1

  createInstances({ scene, model: models['Computer'], instanceName: 'Network1', transformArray: getNetworkTransform({ amount: 5 }), amount: 5, groupTransform: { position: [0, 0, 2.5] }, addInstance })
  //  createInstances({ scene, model: models['Computer'], instanceName: 'Network2', transformArray: getNetworkTransform({ amount: 5 }), amount: 5, groupTransform: { position: [2, 0, 2.5] }, addInstance })
  console.log("create")
  createSVG()

}

