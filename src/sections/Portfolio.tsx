import { useState, type MouseEvent } from "react"
import SectionTitle from "../components/SectionTitle"
import Tile from "../components/Tile"
import { projects, type Project } from "../data/portfolio"
import type { ModalData } from "../components/Modal"

type PortfolioProps = {
  onOpen: (data: ModalData) => void
}

const filters = ["All", "Xsofts", "Runsystem"] as const

const Portfolio = ({ onOpen }: PortfolioProps) => {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All")
  const [label, setLabel] = useState("")
  const [point, setPoint] = useState({ x: 0, y: 0 })

  const visible = filter === "All" ? projects : projects.filter((project) => project.group === filter)

  const handleOpen = (project: Project) => {
    onOpen({
      title: project.name,
      kicker: project.title,
      summary: project.summary,
      points: project.points,
      art: project.art,
      meta: [
        { label: "Client", value: project.company },
        { label: "Date", value: project.period },
        { label: "Stack", value: project.stack.join(", ") },
      ],
    })
  }

  const handleMove = (event: MouseEvent, name: string) => {
    setLabel(name)
    setPoint({ x: event.clientX + 16, y: event.clientY + 16 })
  }

  return (
    <div className="enter mx-auto w-full max-w-[968px] px-5 py-24 sm:px-10">
      <SectionTitle
        kicker="projects"
        title="Projects"
        extra={
          <div className="flex gap-6" role="tablist" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={filter === item}
                className={filter === item ? "font-display text-[15px] font-medium text-ink" : "font-display text-[15px] font-medium text-muted transition-colors hover:text-ink"}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        }
      />
      <ul className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {visible.map((project) => (
          <li key={project.name}>
            <button
              type="button"
              className="group relative block w-full overflow-hidden text-left"
              aria-label={project.name}
              onClick={() => handleOpen(project)}
              onMouseMove={(event) => handleMove(event, project.name)}
              onMouseLeave={() => setLabel("")}
              onFocus={() => setLabel("")}
            >
              <div className="aspect-[4/3] transition-transform duration-300 group-hover:scale-105">
                <Tile art={project.art} label={project.name} />
              </div>
            </button>
          </li>
        ))}
      </ul>
      {label ? (
        <div
          className="pointer-events-none fixed z-50 hidden bg-ink px-3 py-1 font-display text-sm text-on-ink min-[1040px]:block"
          style={{ left: point.x, top: point.y }}
        >
          {label}
        </div>
      ) : null}
    </div>
  )
}

export default Portfolio
