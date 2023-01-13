import create from 'zustand'
import { createSVGExtrude } from './ThreeUtils'
import { SvgPaths } from './SvgPaths'



//dev tools for Zustand
import { mountStoreDevtool } from 'simple-zustand-devtools'
const modelsToLoad = ["IPFabric", "ComputerNetwork", "ServerRack", "MicrosoftStudio",]


export const useStore = create((set, get) => ({
  preloadState: { loaded: 0, total: 9999, Item: "none", progress: 0, isOverlay: 0 },
  ThreeParams: {},
  SvgModels: undefined,
  Materials: {},
  SceneSettings: {},
  Models: {},

  canRender: false,
  Actions: {
    //Update progress using r3f hook useProgress
    updateProgress({ progressData }) {
      const preloadState = get().preloadState
      if (preloadState.isOverlay !== 0)
        return

      const { progress, item } = progressData
      set(({ preloadState }) => ({ preloadState: { ...preloadState, ...progressData, isOverlay: progress === 100 ? 1 : 0 } }))
    },
    //add Model using each Model component UseEffect
    addModel({ dataModel, modelName, materials }) {
      if (!dataModel)
        return
      const { createSVGModel } = get().Actions

      if (modelName === "Materials" || modelName === "Glass") {
        set(({ Materials }) => ({ Materials: { ...Materials, ...dataModel.materials, ...materials } }))
      }
      set(({ Models }) => ({ Models: { ...Models, [modelName]: dataModel } }))
      const Models = get().Models

      const allLoaded = modelsToLoad.reduce((acum, modelName) => acum && Models[modelName], true)
      //const Loaded = modelsToLoad.map((modelName) => ({ model: modelName, loaded: Models[modelName] ?? false }))


      if (!allLoaded)
        return
      set(({ preloadState }) => ({ preloadState: { ...preloadState, isOverlay: 2 } }))


    },
    allowVideo() {
      console.log("auth")
      set(({ preloadState }) => ({ preloadState: { ...preloadState, isOverlay: 3 } }))
    },
    createSVGModel() {
      const { scene } = get().ThreeParams
      const { IPFabric } = SvgPaths
      const Materials = get().Materials
      const meshes = createSVGExtrude({ svgPaths: IPFabric, Materials: Materials, scene: scene })
      scene.add(meshes.group)
      set(({ preloadState }) => ({ preloadState: { ...preloadState, isOverlay: 3 } }))
    }
    , setThree(threeParams) {
      set(() => ({ ThreeParams: { ...threeParams } }))
    }
  },


}
))






if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useStore)
}

