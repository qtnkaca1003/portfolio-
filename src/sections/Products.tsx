import { useState } from "react"
import SectionTitle from "../components/SectionTitle"
import { projects, type Project } from "../data/portfolio"
import type { ModalData } from "../components/Modal"

type ProductsProps = {
  onOpen: (data: ModalData) => void
}

const filters = ["All", "Xsofts", "Runsystem"] as const

const Products = ({ onOpen }: ProductsProps) => {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All")
  const visible = filter === "All" ? projects : projects.filter((project) => project.group === filter)

  const handleOpen = (project: Project) => {
    onOpen({
      title: project.name,
      kicker: project.title,
      summary: project.summary,
      points: project.points,
      meta: [
        { label: "Client", value: project.company },
        { label: "Date", value: project.period },
        { label: "Stack", value: project.stack.join(", ") },
      ],
    })
  }

  const handleFilter = (item: (typeof filters)[number]) => setFilter(item)

  return (
    <div className="enter mx-auto w-full max-w-[968px] px-5 py-24 sm:px-10">
      <SectionTitle
        kicker="products"
        title="Products"
        extra={
          <div className="flex gap-6" role="tablist" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={filter === item}
                className={filter === item ? "font-display text-[15px] font-medium text-ink" : "font-display text-[15px] font-medium text-muted transition-colors hover:text-ink"}
                onClick={() => handleFilter(item)}
              >
                {item}
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
              aria-label={`${project.name}, view project details`}
              onClick={() => handleOpen(project)}
            >
              <p className="flex items-start justify-between gap-4 font-display text-[11px] font-semibold uppercase tracking-wide text-muted">
                <span>{project.company}</span>
                <span className="shrink-0">{project.period}</span>
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-ink">{project.name}</h3>
              <p className="mt-3 line-clamp-3 flex-1">{project.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Skills">
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
