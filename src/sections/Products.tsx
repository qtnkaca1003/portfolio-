import { useState } from "react"
import SectionTitle from "../components/SectionTitle"
import type { ModalData } from "../components/Modal"
import { formatPeriod } from "../data/copy"
import { projects, type Project } from "../data/portfolio"
import { useLocale } from "../i18n"

type ProductsProps = {
  onOpen: (data: ModalData) => void
}

const filters = ["All", "XSofts", "Runsystem"] as const

type FilterId = (typeof filters)[number]

const Products = ({ onOpen }: ProductsProps) => {
  const { locale, copy } = useLocale()
  const text = copy.products
  const [filter, setFilter] = useState<FilterId>("All")
  const visible = filter === "All" ? projects : projects.filter((project) => project.group === filter)

  const handleOpen = (project: Project) => {
    const item = text.items[project.name]
    onOpen({
      title: project.name,
      kicker: item.title,
      summary: item.summary,
      points: item.points,
      meta: [
        { label: text.client, value: project.company },
        { label: text.date, value: formatPeriod(project.period, locale) },
        { label: text.stack, value: project.stack.join(", ") },
      ],
    })
  }

  const handleFilter = (item: FilterId) => setFilter(item)

  const labelFor = (item: FilterId) => (item === "All" ? text.all : item)

  return (
    <div className="enter mx-auto w-full max-w-[968px] px-5 py-24 sm:px-10">
      <SectionTitle
        kicker={text.kicker}
        title={text.title}
        extra={
          <div className="flex gap-6" role="tablist" aria-label={text.filter}>
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={filter === item}
                className={filter === item ? "font-display text-[15px] font-medium text-ink" : "font-display text-[15px] font-medium text-muted transition-colors hover:text-ink"}
                onClick={() => handleFilter(item)}
              >
                {labelFor(item)}
              </button>
            ))}
          </div>
        }
      />
      <ul className="grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <li key={project.name}>
            <button
              type="button"
              className="flex h-full w-full flex-col bg-card p-6 text-left transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              aria-label={`${project.name}, ${text.view}`}
              onClick={() => handleOpen(project)}
            >
              <p className="flex items-start justify-between gap-4 font-display text-[11px] font-semibold uppercase tracking-wide text-muted">
                <span>{project.company}</span>
                <span className="shrink-0">{formatPeriod(project.period, locale)}</span>
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-ink">{project.name}</h3>
              <p className="mt-3 line-clamp-3 flex-1">{text.items[project.name].summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={text.skills}>
                {project.stack.map((skill) => (
                  <li key={skill} className="bg-chip px-2.5 py-1 font-display text-[11px] font-medium text-ink">
                    {skill}
                  </li>
                ))}
              </ul>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
