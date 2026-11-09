import type { ChangeEvent } from "react"
import type { Locale } from "../data/copy"
import { useLocale } from "../i18n"

type LanguageSelectProps = {
  className?: string
}

const LanguageSelect = ({ className = "" }: LanguageSelectProps) => {
  const { locale, copy, handleLocale } = useLocale()

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const next = event.target.value
    if (next === "en" || next === "vi") handleLocale(next as Locale)
  }

  return (
    <label className={`inline-flex items-center gap-2 font-display text-[13px] font-medium text-muted transition-colors hover:text-ink ${className}`}>
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2.2 8h11.6M8 2.1c1.7 1.7 2.6 3.7 2.6 5.9s-.9 4.2-2.6 5.9c-1.7-1.7-2.6-3.7-2.6-5.9s.9-4.2 2.6-5.9Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <select
        value={locale}
        onChange={handleChange}
        aria-label={copy.lang}
        className="cursor-pointer border-none bg-transparent font-display text-[13px] font-medium text-inherit outline-none"
      >
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
      </select>
    </label>
  )
}

export default LanguageSelect
