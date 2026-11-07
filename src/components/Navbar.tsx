import { useEffect, useState } from "react"
import { navItems, profile } from "../data/portfolio"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState("work")

  useEffect(() => {
    const sections = ["work", "roles", "tools", "products", "contact"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (!visible?.target.id) return
        setActiveId(visible.target.id)
      },
      { rootMargin: "-40% 0px -50% 0px" },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  const handleToggleMenu = () => {
    setIsOpen((current) => !current)
  }

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="nav">
      <a className="skip" href="#work">
        Skip to work
      </a>
      <div className="wrap flex h-full items-center gap-6">
        <a href="#work" className="flex items-center gap-3 text-ink no-underline" aria-label="Quach Trong Nhan, back to work">
          <span className="grid h-9 w-9 place-items-center rounded-[4px] bg-action text-[15px] font-semibold text-sheet-ink" aria-hidden="true">
            Q
          </span>
          <span className="display hidden text-[20px] sm:inline">{profile.name}</span>
        </a>
        <nav className="ml-auto hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
              aria-current={activeId === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary ml-auto hidden px-6 sm:inline-flex lg:ml-0" href={`mailto:${profile.email}`}>
          Email Nhan
        </a>
        <button
          type="button"
          className="btn btn-secondary ml-auto inline-flex h-11 w-11 shrink-0 px-0 sm:ml-0 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={handleToggleMenu}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            {isOpen ? (
              <path d="M4 4l10 10M14 4 4 14" fill="none" stroke="currentColor" strokeWidth="1.6" />
            ) : (
              <path d="M2 5h14M2 13h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {isOpen ? (
        <nav
          id="mobile-nav"
          className="fixed inset-0 top-14 z-10 flex flex-col bg-paper px-6 py-6 lg:hidden"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex h-14 items-center border-b border-line text-base font-medium text-ink no-underline"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
          <a className="btn btn-primary mt-6 inline-flex w-full px-6" href={`mailto:${profile.email}`} onClick={handleNavClick}>
            Email Nhan
          </a>
        </nav>
      ) : null}
    </header>
  )
}

export default Navbar
