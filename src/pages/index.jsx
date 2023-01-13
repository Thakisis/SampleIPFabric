import dynamic from 'next/dynamic'
import { useStore } from '@/Store'
import { styles } from '@/styles/Home.module.scss'
import { useEffect, useState, useRef } from 'react'
import { GLTFExporter } from 'three-stdlib'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49

const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

// Dom components go here
export default function Page(props) {
  const { scene } = useStore(state => state.ThreeParams)
  const [fichero, setFicher] = useState()
  const linkref = useRef()

  function exportGLTF() {

    const gltfExporter = new GLTFExporter()

    const options = {
      trs: false,
      onlyVisible: true,
      binary: false,
      maxTextureSize: 1024
    }
    console.log(scene)
    const json = scene.children[6].toJSON()
    const output = JSON.stringify(json, null, 2)
    saveString(output, "extrude.json")


    gltfExporter.parse(
      scene.children[6],
      function (result) {
        const output = JSON.stringify(result, null, 2)





        //saveString(output, 'scene.gltf')



      },
      function (error) {

        console.log('An error happened during parsing', error)

      },
      options
    )

  }
  function save(blob, filename) {
    const link = document.createElement('a')
    link.style.display = 'none'
    document.body.appendChild(link)
    console.log(blob)
    link.href = URL.createObjectURL(blob)
    link.download = filename
    link.click()

    // URL.revokeObjectURL( url ); breaks Firefox...

  }

  function saveString(text, filename) {

    save(new Blob([text], { type: 'text/plain' }), filename)

  }


  function saveArrayBuffer(buffer, filename) {

    save(new Blob([buffer], { type: 'application/octet-stream' }), filename)

  }

  return (

    <div onClick={() => exportGLTF()}>

      download
    </div>

  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <Logo scale={0.5} route='/blob' position-y={-1} />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
