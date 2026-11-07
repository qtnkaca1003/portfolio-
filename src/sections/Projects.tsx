import { useState } from "react"
import { projects } from "../data/portfolio"

const Products = () => {
  const [selectedName, setSelectedName] = useState(projects[0]?.name ?? "")
  const selected = projects.find((project) => project.name === selectedName) ?? projects[0]

  const handleSelect = (name: string) => {
    setSelectedName(name)
  }

  if (!selected) return null

  return (
    <section id="products" className="screen border-t border-line bg-surface">
      <div className="wrap">
        <p className="font-mono text-[13px] text-action">04</p>
        <h2 className="display h2 mt-3">Shipped products</h2>
        <p className="mt-6 max-w-[62ch] text-base text-muted">
          Six products. Gensai and Remote Work Cloud share October 2024 to December 2025.
        </p>
        <div className="mt-10 grid items-start gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4" role="tablist" aria-label="Products">
            {projects.map((project) => {
              const isSelected = project.name === selected.name
              const tabClass = isSelected
                ? "grid w-full gap-1 border border-action bg-paper px-4 py-4 text-left"
                : "grid w-full gap-1 border border-line px-4 py-4 text-left transition-transform duration-150 hover:-translate-y-px"
              return (
                <button
                  key={project.name}
                  type="button"
                  role="tab"
                  id={`product-tab-${project.name}`}
                  aria-selected={isSelected}
                  aria-controls="product-panel"
                  className={`${tabClass} mb-2 rounded-[4px]`}
                  onClick={() => handleSelect(project.name)}
                >
                  <span className="text-base font-medium">{project.name}</span>
                  <span className="text-[13px] text-muted">
                    {project.company} · {project.period}
                  </span>
                </button>
              )
            })}
          </div>
          <article
            id="product-panel"
            role="tabpanel"
            aria-labelledby={`product-tab-${selected.name}`}
            className="rounded-[4px] border border-line bg-paper p-6 sm:p-8 lg:col-span-8"
          >
            <p className="font-mono text-[13px] text-action">
              {selected.company} · {selected.period}
            </p>
            <h3 className="display mt-3 text-[28px] leading-9">{selected.title}</h3>
            <p className="mt-4 max-w-[62ch] text-base text-muted">{selected.summary}</p>
            <ul className="mt-6">
              {selected.points.map((point) => (
                <li key={point} className="border-t border-line py-3 text-base">
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-mono text-[13px] text-muted">{selected.stack.join(" · ")}</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Products
