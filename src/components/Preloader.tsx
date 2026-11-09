import { useEffect } from "react"
import { useLocale } from "../i18n"

type PreloaderProps = {
  onDone: () => void
}

const Preloader = ({ onDone }: PreloaderProps) => {
  const { copy } = useLocale()

  useEffect(() => {
    const doneTimer = window.setTimeout(onDone, 1900)
    return () => window.clearTimeout(doneTimer)
  }, [onDone])

  return (
    <div className="preloader" role="status" aria-live="polite" aria-label={copy.loading}>
      <div className="preloader-line" />
    </div>
  )
}

export default Preloader
