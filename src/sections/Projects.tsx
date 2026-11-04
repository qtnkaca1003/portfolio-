import { useEffect, useState } from "react"
import type { Project } from "../data/portfolio"
import EqualGrid from "../components/EqualGrid"
import Reveal from "../components/Reveal"
import { projects } from "../data/portfolio"

type ProjectModalProps = {
  project: Project
  onClose: () => void
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      onClose()
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [onClose])

  const handleBackdropClick = () => {
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4 py-8"
      onClick={handleBackdropClick}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-cyan bg-[#1b2430] p-6 shadow-[0_0_28px_rgba(0,238,255,0.45)] sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id="project-dialog-title" className="text-3xl font-bold">
              {project.name}
            </h3>
            <p className="mt-2 text-sm font-medium text-cyan">
              {project.company} · {project.period}
            </p>
          </div>
          <button
            type="button"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-lg text-white transition duration-300 hover:bg-cyan hover:text-ink"
            aria-label="Close project details"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <h4 className="mt-6 text-lg font-semibold text-cyan">Description</h4>
        <p className="mt-2 text-sm leading-7 text-white/85">{project.summary}</p>
        <h4 className="mt-6 text-lg font-semibold text-cyan">Main responsibilities</h4>
        <ul className="mt-2 list-disc space-y-3 pl-5">
          {project.highlights.map((item) => (
            <li key={item} className="text-sm leading-6 text-white/85">
              {item}
            </li>
          ))}
        </ul>
        <h4 className="mt-6 text-lg font-semibold text-cyan">Technologies</h4>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-full bg-[#2a3340] px-3 py-1 text-sm text-white/90">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Projects = () => {
  const [selectedName, setSelectedName] = useState("")
  const selectedProject = projects.find((project) => project.name === selectedName) ?? null

  const handleOpen = (name: string) => {
    setSelectedName(name)
  }

  const handleClose = () => {
    setSelectedName("")
  }

  return (
    <section id="projects" className="py-12">
      <div className="site-container">
        <Reveal>
          <h2 className="text-center text-4xl font-bold">
            My <span className="text-cyan">Projects</span>
          </h2>
        </Reveal>
        <EqualGrid>
          {projects.map((project, index) => (
            <Reveal key={project.name} className="h-full" delay={(index % 3) * 120}>
              <article
                data-equal-card
                onClick={() => handleOpen(project.name)}
                className="cursor-pointer flex h-full flex-col rounded-2xl border border-transparent bg-[#252b36] p-5 transition duration-300 hover:-translate-y-2 hover:border-cyan/50 hover:shadow-[0_0_22px_rgba(0,238,255,0.28)]"
              >
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="mt-2 text-sm font-medium text-cyan">
                  {project.company} · {project.period}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/80">{project.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded-full bg-ink px-3 py-1 text-xs">
                      {tech}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="cursor-pointer mt-auto pt-5 self-start text-sm font-semibold text-cyan transition duration-300 hover:translate-x-1 hover:text-white"
                  aria-haspopup="dialog"
                  onClick={() => handleOpen(project.name)}
                >
                  View details →
                </button>
              </article>
            </Reveal>
          ))}
        </EqualGrid>
      </div>
      {selectedProject ? <ProjectModal project={selectedProject} onClose={handleClose} /> : null}
    </section>
  )
}

export default Projects
