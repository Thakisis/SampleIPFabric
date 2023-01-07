import create from 'zustand'
import { loadModels } from './ThreeUtils'

// Animations js contain all animation of 3D objects
import { animate, addAnimation } from './Animations'

// list of models
import { Models } from './Models'
//initialize InitialState
import { convertLoaderList, createLoaderArray, initPreloadState } from './StoreUtils'
// createScene

import { createScene } from './CreateScene'



//dev tools for Zustand
import { mountStoreDevtool } from 'simple-zustand-devtools'





export const useStore = create((set, get) => ({
  //create Array and object for loading 3D  models
  ModelsArray: createLoaderArray(Models),
  ModelsState: convertLoaderList(Models),
  PreloadState: initPreloadState(Models),
  SceneSettings: {},
  ObjectsRef: {},
  animations: {},
  canRender: false,
  Actions: {

    initPreload() {
      //init load models
      const { updateLoaded } = get().Actions
      const modelsArray = get().ModelsArray
      loadModels({ modelsArray, onUpdateLoaded: updateLoaded })
    },
    initScene(scene) {
      const addInstance = get().Actions.addInstance
      const models = get().ModelsState
      set(({ SceneSettings }) => {
        return ({ SceneSettings: { ...SceneSettings, scene } })
      })
      createScene(scene, models, addInstance)
      set(() => { return ({ canRender: true }) })
      const ObjectsRef = get().ObjectsRef
      addAnimation(ObjectsRef)

    },
    renderFrame(props) {

      if (!get().canRender)
        return
      const ObjectsRef = get().ObjectsRef
      animate(ObjectsRef, props)

    },
    initAnimations(scene) {

      const models = get().ObjectsRef
      set(({ SceneSettings }) => {
        return ({ SceneSettings: { ...SceneSettings, scene } })
      })
      createScene(scene, models, addInstance)
    },


    // update each progress event and onLoaded and launch createScene 
    // when load is complete. Todo: load by stages options:block pages befoe 3D is loaded or load full contente 3d

    updateLoaded({ index, sizeLoaded, isComplete, modelName, scene }) {

      //update each Element loaded size
      set(({ ModelsArray }) => {
        const updatedModel = isComplete ? { ...ModelsArray[index], isLoaded: true } : { ...ModelsArray[index], loaded: sizeLoaded }
        return { ModelsArray: [...ModelsArray.slice(0, index), { ...updatedModel }, ...ModelsArray.slice(index + 1)] }
      })


      //update total loaded bytes
      set(({ PreloadState, ModelsArray }) => {


        return ({
          preloadState: {
            ...PreloadState, ...ModelsArray.reduce((acum, model) => {

              const { stages } = acum
              const { stage } = model
              const newStages = {

                ...stages, [stage]: {
                  ...stages[stage],
                  loadedSize: stages[stage].loadedSize + model.loaded,
                  loadedFiles: model.isLoaded ? stages[stage].loadedFiles + 1 : stages[stage].loadedFiles,
                }

                //  { totalFiles: 1, loadedFiles: 0, filesSize: element.modelSize, loadedSize: 0 }
              }

              return ({
                totalLoaded: acum.totalLoaded + model.loaded,
                loadedItems: model.isLoaded ? acum.loadedItems + 1 : acum.loadedItems,
                stages: newStages
              }
              )

            }, { totalLoaded: 0, loadedItems: 0, stages: PreloadState.stages })
          }
        })

      })

      // mark model as complete
      if (isComplete) {

        set(({ ModelsState }) => {
          return ({ ModelsState: { ...ModelsState, [modelName]: { ...ModelsState[modelName], scene: scene } } })
        })
      }

    },
    addInstance(instancedData) {
      const { instanceName } = instancedData
      set(({ ObjectsRef }) => {
        return ({ ObjectsRef: { ...ObjectsRef, [instanceName]: { ...instancedData } } })
      })
    }


  },

  //Store references for let gsap drive animation
  setRef({ item, ref }) {

    set(({ ObjectsRef }) => ({ ObjectRef: { ...ObjectsRef, [item]: ref } }))

  }
}
))






if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useStore)
}


/*

addInstances({ modelName, instanceName, transformArray, amount, groupTransform }) {
      const { scene } = get().SceneSettings
      const model = get().ModelsState[modelName]
      const instancedData = createInstances({ model, scene, transformArray, amount, groupTransform, instanceName })
      set(({ instancedObjects }) => {
        return ({ instancedObjects: { ...instancedObjects, [instanceName]: { ...instancedData } } })
      })
    }




const { updateLoaded } = get().Actions
  const modelsArray = get().ModelsArray



    preloadModels() {
      const { updateLoaded } = get().Actions
      const modelsArray = get().ModelsArray
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
            updateLoaded({ index: index, sizeLoaded: xhr.loaded })
          },
        )
          .then((gltf) => {
            gltf.scene.traverse(function (node) {

              if (node.isMesh) {
                node.castShadow = true
                node.receiveShadow = true
              }

            })

            updateLoaded({ index: index, isComplete: true, scene: gltf.scene, modelName: model.Model })
          })
      })
    }
    */
