import { useEffect, useState } from "react"
import SectionTitle from "../components/SectionTitle"
import { facts, services } from "../data/portfolio"
import type { ModalData } from "../components/Modal"

type ServicesProps = {
  active: boolean
  onOpen: (data: ModalData) => void
}

const Count = ({ value, active }: { value: number; active: boolean }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!active) {
      setCurrent(0)
      return
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setCurrent(value)
      return
    }
    const start = performance.now()
    let timer = 0
    const tick = () => {
      const progress = Math.min(1, (performance.now() - start) / 900)
      setCurrent(Math.round(value * progress))
      if (progress < 1) timer = window.setTimeout(tick, 32)
    }
    timer = window.setTimeout(tick, 32)
    return () => window.clearTimeout(timer)
  }, [active, value])

  return <>{current.toLocaleString("en-US")}</>
}

const Services = ({ active, onOpen }: ServicesProps) => {
  return (
    <div className="enter mx-auto w-full max-w-[968px] px-5 py-24 sm:px-10">
      <SectionTitle kicker="Services" title="What I Do" />
      <ul className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <li key={service.number}>
            <button
              type="button"
              className="group flex h-full w-full flex-col border border-line bg-card p-8 text-left transition-colors hover:border-ink/30"
              onClick={() =>
                onOpen({
                  title: service.title,
                  kicker: service.number,
                  summary: service.body,
                  points: [],
                  meta: [],
                })
              }
            >
              <span className="mb-6 grid h-[60px] w-[60px] place-items-center rounded-full bg-chip font-display text-base font-bold text-ink transition-colors group-hover:bg-ink/10">
                {service.number}
              </span>
              <h3 className="mb-3 font-display text-lg font-bold text-ink">{service.title}</h3>
              <p>{service.text}</p>
              <span className="read-more mt-4">
                <span>Read more</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-20">
        <SectionTitle kicker="Facts" title="Fun Facts" />
        <ul className="grid gap-8 md:grid-cols-3">
          {facts.map((fact) => (
            <li key={fact.label} className="border border-line px-5 py-10 text-center">
              <h3 className="font-display text-xl font-semibold text-ink">
                <Count value={fact.value} active={active} />
                {fact.suffix}
              </h3>
              <p>{fact.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Services
