import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { messages, type Locale } from "./data/copy"

type LocaleValue = {
  locale: Locale
  copy: (typeof messages)["en"]
  handleLocale: (next: Locale) => void
}

const LocaleContext = createContext<LocaleValue | null>(null)

const readLocale = (): Locale => {
  const saved = localStorage.getItem("lang")
  if (saved === "en" || saved === "vi") return saved
  return "en"
}

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(readLocale)
  const copy = messages[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = copy.title
    document.querySelector('meta[name="description"]')?.setAttribute("content", copy.description)
    localStorage.setItem("lang", locale)
  }, [locale, copy])

  const handleLocale = (next: Locale) => setLocale(next)

  return <LocaleContext.Provider value={{ locale, copy, handleLocale }}>{children}</LocaleContext.Provider>
}

export const useLocale = () => {
  const value = useContext(LocaleContext)
  if (!value) throw new Error("LocaleProvider is missing")
  return value
}
