import { createInstances, getNetworkTransform, setTransform, getNetworkMatrix } from "./ThreeUtils"
import gsap from 'gsap'
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
export function animate(Objects) {
  let tl = gsap.timeline({ repeat: 100, repeatDelay: 0 })
  //const { amount, group, instancedModel, transformArray } = Objects['Network1']
  //tl.to(group, { rotation: [0, Math.PI * 2, 0], duration: 2 })

  //console.log(Objects)
  //gsap.set(plane.position, { x: 80, y: -32, z: -60 });



}


function animNetwork(Objects, tl) {
  const { amount, group, instancedModel, transformArray } = Objects['Network1']



  const old = { distance: 0, anglegroup: -  Math.PI * 2, angle: 0, angledelta: -2, scale: 0, scaledelta: .1 }
  new Array(amount).fill(0).map((index) => {
    gsap.to(old, {
      distance: 1, angle: Math.PI * 4, anglegroup: 0, angledelta: 0, scale: .5, scaledelta: 0,
      duration: 3, ease: 'power2',

      onUpdate: (a) => {


        const newMatrix = getNetworkMatrix({ amount: 5, ...old })

        instancedModel.children.map(mesh => {
          newMatrix.map((matrix, index) => {

            //  instancedModel.setMatrixAt(index, matrix)

            mesh.setMatrixAt(index, matrix)

          })
          mesh.instanceMatrix.needsUpdate = true
        })
        // controls.update() -- only works while it's updating
      },
    })
  })
  //let tl = gsap.timeline({ repeat: -1, repeatDelay: 0 })
  //  tl.to(group.rotation, { y: Math.PI * 2, duration: 2 })

}
