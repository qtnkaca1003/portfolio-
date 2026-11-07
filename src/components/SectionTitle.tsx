import type { ReactNode } from "react"

type SectionTitleProps = {
  kicker: string
  title: string
  extra?: ReactNode
}

const SectionTitle = ({ kicker, title, extra }: SectionTitleProps) => {
  return (
    <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end">
      <div>
        <span className="mb-3 inline-block bg-chip px-2.5 py-1 font-display text-xs font-semibold uppercase text-ink">
          {kicker}
        </span>
        <h2 className="font-display text-[30px] font-extrabold leading-tight text-ink">{title}</h2>
      </div>
      {extra}
    </div>
  )
}

export default SectionTitle
