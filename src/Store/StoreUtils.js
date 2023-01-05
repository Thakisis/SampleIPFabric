import * as THREE from 'three'

//add the needed fields for loader
export function createLoaderArray(list) {
  if (list instanceof Array) {
    return list.map((element) => {

      return ({
        Model: element.modelName,
        url: element.modelFile,
        isLoading: false,
        isLoaded: false,
        size: element.modelSize,
        loaded: 0

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
export function initPreloadState(list) {
  if (list instanceof Array) {
    return list.reduce((acum, element) => {
      const { totalItems, totalSize } = acum
      return ({ ...acum, totalItems: totalItems + 1, totalSize: totalSize + element.modelSize })
    }
      , { totalItems: 0, loadedItems: 0, totalSize: 0, totalLoaded: 0 })
  }
  return { totalItems: 0, loadedItems: 0, totalSize: 0, totalLoaded: 0 }
}
