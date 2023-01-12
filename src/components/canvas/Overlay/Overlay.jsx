import styles from './Overlay.module.scss'
export const Overlay = ({ progress, isOverlay, loaded, total, item }) => {
  const classNames = isOverlay ? [styles.Overlay] : [styles.Overlay, styles.fadeout]

  return (
    <div className={classNames.join(" ")}>
      {progress}
    </div>
  )
}


