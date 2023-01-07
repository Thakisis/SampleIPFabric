import * as THREE from 'three'

//add the needed fields for loader
export function createLoaderArray(list) {
  if (list instanceof Array) {
    return list.map((element) => {
      const { modelName, modelFile, modelSize, stage } = element
      return ({
        Model: modelName,
        url: modelFile,
        isLoading: false,
        isLoaded: false,
        size: modelSize,
        loaded: 0,
        stage: stage

      })
    })
  }
}

// 3D objects will be converted to object for easy access without search in Array
export function convertLoaderList(list) {
  if (list instanceof Array) {
    return list.reduce((acum, element) => ({ ...acum, [element.modelName]: { Model: element.modelName, url: element.modelFile, } })
      , {})
  }
  return []
}

//create initital state with size total number for global load and for diferent stages needed in each section
export function initPreloadState(list) {
  if (list instanceof Array) {
    return list.reduce((acum, element) => {

      const { totalItems, totalSize, stages } = acum
      const newStages = {

        ...stages, [element.stage]: stages[element.stage] ?
          { ...stages[element.stage], totalFiles: stages[element.stage].totalFiles + 1, filesSize: stages[element.stage].filesSize + element.modelSize }
          :
          { totalFiles: 1, loadedFiles: 0, filesSize: element.modelSize, loadedSize: 0 }
      }
      return ({ ...acum, totalItems: totalItems + 1, totalSize: totalSize + element.modelSize, stages: newStages })
    }
      , { totalItems: 0, loadedItems: 0, totalSize: 0, totalLoaded: 0, stages: {} })
  }
  return { totalItems: 0, loadedItems: 0, totalSize: 0, totalLoaded: 0, stages: {} }
}
