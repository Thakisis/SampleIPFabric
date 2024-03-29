import { useRef, forwardRef } from 'react'
import { mergeRefs } from 'react-merge-refs'

const Layout = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()

  return (
    <div
      ref={mergeRefs([ref, localRef])}
      className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom text-gray-50'

    >

      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
