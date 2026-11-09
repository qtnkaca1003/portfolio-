import { useEffect, useRef } from "react"
import { useLocale } from "../i18n"

export type ModalData = {
  title: string
  kicker: string
  summary: string
  points: string[]
  meta: { label: string; value: string }[]
}

type ModalProps = {
  data: ModalData
  onClose: () => void
}

const Modal = ({ data, onClose }: ModalProps) => {
  const { copy } = useLocale()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-40 grid place-items-center bg-black/70 p-4" role="presentation" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="enter relative max-h-[86vh] w-full max-w-[850px] overflow-auto bg-page p-6 sm:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center bg-ink text-on-ink"
          aria-label={copy.close}
          onClick={onClose}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path d="M2 2l10 10M12 2 2 12" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
        <p className="font-display text-xs font-semibold uppercase text-muted">{data.kicker}</p>
        <h3 id="modal-title" className="mt-2 font-display text-2xl font-extrabold text-ink">
          {data.title}
        </h3>
        <p className="mt-4 max-w-[62ch]">{data.summary}</p>
        <ul className="mt-6 border-t border-line">
          {data.points.map((point) => (
            <li key={point} className="border-b border-line py-3">
              {point}
            </li>
          ))}
        </ul>
        <dl className="mt-6 grid gap-3 sm:grid-cols-2">
          {data.meta.map((item) => (
            <div key={item.label}>
              <dt className="font-display text-xs font-semibold uppercase text-ink">{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default Modal
