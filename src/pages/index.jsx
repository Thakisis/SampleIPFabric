import { useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

// Dom components go here
export default function Page(props) {
  useEffect(() => {



    const domain = 'ladystorm.ddns.net'
    const cookies = document.cookie.split(";")
    for (let i = 0; i < cookies.length; i++) {

      const cookie = cookies[i].trim()
      console.log('cookie')
      document.cookie = `${cookie}=;domain=${domain}; expires=Thu, 01 Jan 1980 00:00:00 GMT`
      //window.location.replace("https://www.tpeoficial.com/?by=tpeoficial/clear/cookies-deleted")
      //document.cookie = `foo=bar;domain=${domain};`
    }



  })
  return (
    <>a </>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <Logo scale={0.5} route='/blob' position-y={-1} />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
