import styles from './Overlay.module.scss'
import { useStore } from '@/Store'
export const Overlay = ({ progress, isOverlay, loaded, total, item }) => {
  const classNames = isOverlay !== 3 ? [styles.Overlay] : [styles.Overlay, styles.fadeout]
  const { allowVideo } = useStore(state => state.Actions)
  const PlayVideo = () => {
    const ks = new Audio('/audio/click.wav')
    ks.play()
    allowVideo()
  }
  return (
    <div className={classNames.join(" ")}>

      {isOverlay === 0 || isOverlay === 1 ?

        <div >
          <div>{isOverlay === 0 ? "Loading models" : "Preparing Scene"}</div>
          <div>{isOverlay === 0 ? Math.ceil(progress) : ""}</div>
        </div>
        :
        <div>
          <div>Website need your interaction to play Video files</div>
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={PlayVideo}>
            Enter
          </button>

        </div>
      }



    </div>
  )
}


