import { useLocale } from "../i18n"

type ScrollHintProps = {
  up: boolean
}

const ScrollHint = ({ up }: ScrollHintProps) => {
  const { copy } = useLocale()

  return <div className={up ? "scroll-hint is-up" : "scroll-hint"} role="img" aria-label={up ? copy.scrollUp : copy.scroll} />
}

export default ScrollHint
