import styles from './Overlay.module.scss'
export const Overlay = ({ progress, isOverlay, loaded, total, item }) => {
  const classNames = isOverlay !== 3 ? [styles.Overlay] : [styles.Overlay, styles.fadeout]

  return (
    <div className={classNames.join(" ")}>
      <div>
        <div>{isOverlay === 0 ? "Loading models" : isOverlay === 2 ? "Compiling  Objects" : "Preparing Scene"}</div>

        <div>{isOverlay === 0 ? Math.ceil(progress) : ""}</div>
      </div>
    </div>
  )
}


