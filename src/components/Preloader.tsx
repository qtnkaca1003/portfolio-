import { useEffect } from "react"

type PreloaderProps = {
  onDone: () => void
}

const Preloader = ({ onDone }: PreloaderProps) => {
  useEffect(() => {
    const doneTimer = window.setTimeout(onDone, 1900)
    return () => window.clearTimeout(doneTimer)
  }, [onDone])

  return (
    <div className="preloader" role="status" aria-live="polite" aria-label="Loading">
      <div className="preloader-line" />
    </div>
  )
}

export default Preloader
