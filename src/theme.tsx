import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type ThemeName = "dark" | "light"

type ThemeValue = {
  theme: ThemeName
  handleToggleTheme: () => void
}

const ThemeContext = createContext<ThemeValue | null>(null)

const readTheme = (): ThemeName => {
  const saved = localStorage.getItem("theme")
  if (saved === "light" || saved === "dark") return saved
  return "dark"
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeName>(readTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  const handleToggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"))
  }

  return <ThemeContext.Provider value={{ theme, handleToggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const value = useContext(ThemeContext)
  if (!value) throw new Error("ThemeProvider is missing")
  return value
}
