import type { MouseEvent } from "react"
import { pages, type PageId } from "../data/portfolio"
import ThemeToggle from "./ThemeToggle"

type TopbarProps = {
  active: PageId
  isOpen: boolean
  onToggle: () => void
  onSelect: (id: PageId) => void
}

const Topbar = ({ active, isOpen, onToggle, onSelect }: TopbarProps) => {
  const handleSelect = (event: MouseEvent<HTMLAnchorElement>, id: PageId) => {
    event.preventDefault()
    onSelect(id)
  }

  return (
    <div className="min-[1200px]:hidden">
      <div className="fixed inset-x-0 top-0 z-30 flex h-16 items-center justify-between bg-side px-5">
        <a href="#home" className="font-logo text-2xl font-black tracking-[4px] text-ink no-underline" onClick={(event) => handleSelect(event, "home")}>
          NHAN
        </a>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-11 w-11 place-items-center text-ink"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={onToggle}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              {isOpen ? (
                <path d="M4 4l10 10M14 4 4 14" fill="none" stroke="currentColor" strokeWidth="1.6" />
              ) : (
                <path d="M2 5h14M2 9h14M2 13h14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen ? (
        <nav id="mobile-nav" className="fixed inset-0 top-16 z-30 bg-side px-6 py-4" aria-label="Mobile">
          <ul>
            {pages.map((page) => (
              <li key={page.id} className="border-b border-line">
                <a
                  href={`#${page.id}`}
                  className="flex h-14 items-center font-display text-base font-medium text-ink no-underline"
                  aria-current={active === page.id ? "page" : undefined}
                  onClick={(event) => handleSelect(event, page.id)}
                >
                  {page.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  )
}

export default Topbar
