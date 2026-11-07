import { useTheme } from "../theme"

const ThemeToggle = () => {
  const { theme, handleToggleTheme } = useTheme()
  const next = theme === "dark" ? "light" : "dark"

  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 font-display text-[13px] font-medium text-muted transition-colors hover:text-ink"
      aria-label={`Switch to ${next} theme`}
      aria-pressed={theme === "dark"}
      onClick={handleToggleTheme}
    >
      {theme === "dark" ? (
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="8" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 1.2v1.8M8 13v1.8M1.2 8h1.8M13 8h1.8M3.2 3.2l1.3 1.3M11.5 11.5l1.3 1.3M12.8 3.2l-1.3 1.3M4.5 11.5l-1.3 1.3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M10.2 1.6a6.2 6.2 0 1 0 4.2 9.6 5 5 0 0 1-4.2-9.6Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      )}
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  )
}

export default ThemeToggle
