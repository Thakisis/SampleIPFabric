import create from 'zustand'
import { convertLoaderList, createLoaderArray, initPreloadState } from './StoreUtils'
import { Models } from './Models'
// three modules for load models
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

//dev tools for Zustand
import { mountStoreDevtool } from 'simple-zustand-devtools'





export const useStore = create((set, get) => ({
  //create Array and object for loading 3D  models
  ModelsArray: createLoaderArray(Models),
  ModelsState: convertLoaderList(Models),
  PreloadState: initPreloadState(Models),
  canRender: false,
  Actions: {

    initPreload() {
      //init load models

      const { preloadModels } = get().Actions
      preloadModels()

    }
    ,
    preloadModels() {
      const { setLoadedModel, setLoadingModel, updateLoaded } = get().Actions
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
            updateLoaded({ index: index, isComplete: true, scene: gltf.scene, modelName: model.Model })
          })
      })

    },
    //update each progress event and onLoaded
    updateLoaded({ index, sizeLoaded, isComplete, modelName, scene }) {

      //update each Element loaded size
      set(({ ModelsArray }) => {

        const updatedModel = isComplete ? { ...ModelsArray[index], isLoaded: true, loaded: ModelsArray[index].size } : { ...ModelsArray[index], loaded: sizeLoaded }

        return { ModelsArray: [...ModelsArray.slice(0, index), { ...updatedModel }, ...ModelsArray.slice(index + 1)] }
      })
      //update total loaded bytes
      //set(({ PreloadState, ModelsArray }) => ({ PreloadState: { ...PreloadState, totalLoaded: ModelsArray.reduce((acum, model) => acum += model.loaded, 0) } }))
      set(({ PreloadState, ModelsArray }) => ({
        PreloadState: {
          ...PreloadState, ...ModelsArray.reduce((acum, model) =>
            acum = { totalLoaded: acum.totalLoaded + model.loaded, loadedItems: model.isLoaded ? acum.loadedItems + 1 : acum.loadedItems },
            { totalLoaded: 0, loadedItems: 0 })
        }
      }))
      if (isComplete) {
        console.log("complete")
        set(({ ModelsState }) => {
          return ({ ModelsState: { ...ModelsState, [modelName]: { ...ModelsState[modelName], scene: scene } } })
        })
      }

    },



  }
}
))






if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useStore)
}

/*
const loader = new GLTFLoader()
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/libs/draco/')
loader.setDRACOLoader(dracoLoader)
modelsArray.map((model) => {
  loader.load(model.url,
    (modelLoaded) => {
      const childrens = modelLoaded.scene.children
      const totalChildren = childrens.length
      setLoadedModel({ key: model.key, stage: model.stage, model: childrens[totalChildren - 1] })
 
 
    })
 
})*/
