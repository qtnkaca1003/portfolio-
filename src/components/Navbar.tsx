import { useEffect, useState } from "react"
import { navItems } from "../data/portfolio"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState("home")

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (!visible?.target.id) return
        setActiveId(visible.target.id)
      },
      { rootMargin: "-45% 0px -45% 0px" },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleToggleMenu = () => {
    setIsOpen((current) => !current)
  }

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-ink/90 backdrop-blur">
      <div className="site-container flex items-center justify-between py-4">
        <a
          href="#home"
          className="grid h-12 w-12 place-items-center rounded-full border-2 border-cyan text-sm font-semibold text-cyan transition duration-300 hover:scale-105 hover:bg-cyan hover:text-ink hover:shadow-[0_0_16px_#0ef]"
          aria-label="Quach Trong Nhan, back to home"
        >
          QN
        </a>
        <button
          type="button"
          className="rounded-md border border-white/20 px-3 py-2 text-sm transition duration-300 hover:border-cyan hover:text-cyan md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={handleToggleMenu}
        >
          Menu
        </button>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeId === item.id
                  ? "border-b-2 border-cyan pb-1 text-sm font-medium text-cyan transition duration-300"
                  : "pb-1 text-sm font-medium text-white transition duration-300 hover:text-cyan"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      {isOpen ? (
        <nav id="mobile-nav" className="border-t border-white/10 px-4 py-3 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-md px-2 py-2 text-sm transition duration-300 hover:bg-white/5 hover:text-cyan"
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}

export default Navbar
