import type { MouseEvent } from "react"
import { pages, profile, type PageId } from "../data/portfolio"
import { useLocale } from "../i18n"
import LanguageSelect from "./LanguageSelect"
import ThemeToggle from "./ThemeToggle"

type SidebarProps = {
  active: PageId
  onSelect: (id: PageId) => void
}

const Sidebar = ({ active, onSelect }: SidebarProps) => {
  const { copy } = useLocale()

  const handleSelect = (event: MouseEvent<HTMLAnchorElement>, id: PageId) => {
    event.preventDefault()
    onSelect(id)
  }

  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-[350px] items-center bg-side px-[70px] min-[1200px]:flex">
      <div className="w-full">
        <a href="#home" className="font-logo text-[31px] font-black tracking-[5px] text-ink no-underline" onClick={(event) => handleSelect(event, "home")}>
          NHAN
        </a>
        <nav className="py-[50px]" aria-label={copy.nav}>
          <ul>
            {pages.map((page) => {
              const isCurrent = active === page.id
              return (
                <li key={page.id}>
                  <a
                    href={`#${page.id}`}
                    className={isCurrent ? "inline-block font-display text-[15px] font-medium leading-[34px] text-ink no-underline" : "inline-block font-display text-[15px] font-medium leading-[34px] text-muted no-underline transition-colors hover:text-ink"}
                    aria-current={isCurrent ? "page" : undefined}
                    onClick={(event) => handleSelect(event, page.id)}
                  >
                    {copy.pages[page.id]}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="flex flex-col items-start gap-4">
          <ThemeToggle />
          <LanguageSelect />
        </div>
        <p className="mt-8 font-display text-[15px] leading-6 text-soft">
          © {new Date().getFullYear()} {profile.name}
          <br />
          {copy.location}
        </p>
      </div>
    </aside>
  )
}

export default Sidebar
