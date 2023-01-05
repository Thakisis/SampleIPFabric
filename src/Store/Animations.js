import { createInstances, getNetworkTransform, setTransform, getNetworkMatrix } from "./ThreeUtils"
import gsap from 'gsap'
import { Mesh } from "three"
const AnimationsInstances = {

  Network1: {
    type: "instance",
    positionArray: [],
    rotationArray: [],
    scaleArray: [],
  }
}

export function addAnimation(Objects) {
  let tl = gsap.timeline({ repeat: -1, repeatDelay: 0 })
  //animNetwork(Objects, tl)

  //tl.to(group.rotation, { y: Math.PI * 2, duration: 2 })
  //console.log(Objects)
  //gsap.set(plane.position, { x: 80, y: -32, z: -60 });
  //animNetwork(Objects, tl)

}
export function animate(Objects, props) {
  const { amount, group, instancedModel, transformArray } = Objects['Network1']
  const { elapsedTime } = props.clock


  instancedModel.children.map(mesh => {

    new Array(amount).fill(0).map((index, i) => {
      //const matrix = mesh.getMatrixAt(2)
      const newMat = setTransform({ rotation: [0, elapsedTime * 10, 0], position: [3 * Math.sin(elapsedTime) * -1 * (i + 1), 0, 3 * Math.cos(2 * elapsedTime) * (i + 1)] })
      mesh.setMatrixAt(i, newMat)
      mesh.instanceMatrix.needsUpdate = true

    })
  })
  //tl.to(group, { rotation: [0, Math.PI * 2, 0], duration: 2 })

  //console.log(Objects)
  //gsap.set(plane.position, { x: 80, y: -32, z: -60 });



}


function animNetwork(Objects, tl) {
  const { amount, group, instancedModel, transformArray } = Objects['Network1']
  const newNetworkTransform = getNetworkTransform({ amount: 5, distance: 1, angle: Math.PI * 4 })
  const oldTransformArray = [...transformArray]

  const old = { distance: 0, angle: 0, angledelta: .5, scale: 0, scaledelta: .1 }
  console.log(instancedModel)
  new Array(amount).fill(0).map((index) => {

    instancedModel.children.map(mesh => {


      gsap.to(mesh.getMatrixAt(index).rotation, {
        y: Math.pi * 3,
        duration: 3, ease: 'power2',
        repeat: -1,

      })
    })
  })
  //let tl = gsap.timeline({ repeat: -1, repeatDelay: 0 })
  //  tl.to(group.rotation, { y: Math.PI * 2, duration: 2 })

}

/*----------------------------------------------------------------
// Make sure to tell it to update if not using the tick function

      onUpdate: (a) => {
        //console.log(old)
        const newMatrix = getNetworkMatrix({ amount: 5, ...old })
        console.log(newMatrix)
        instancedModel.children.map(mesh => {

          newMatrix.map((matrix, index) => {

            //  instancedModel.setMatrixAt(index, matrix)

            mesh.setMatrixAt(index, matrix)
            mesh.updateMatrix()
          })
        })
        // controls.update() -- only works while it's updating
      },
  */
