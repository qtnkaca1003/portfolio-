import { useEffect, useRef } from "react"
import type { ReactNode } from "react"

type EqualGridProps = {
  children: ReactNode
  className?: string
}

const EqualGrid = ({ children, className = "" }: EqualGridProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = ref.current
    if (!grid) return

    const syncHeight = () => {
      const cards = [...grid.querySelectorAll<HTMLElement>("[data-equal-card]")]
      if (cards.length === 0) return

      cards.forEach((card) => {
        card.style.minHeight = ""
      })

      if (!window.matchMedia("(min-width: 1024px)").matches) return

      const tallest = cards.reduce((max, card) => Math.max(max, card.getBoundingClientRect().height), 0)
      const height = `${Math.ceil(tallest)}px`

      cards.forEach((card) => {
        card.style.minHeight = height
      })
    }

    syncHeight()
    window.addEventListener("resize", syncHeight)

    return () => window.removeEventListener("resize", syncHeight)
  }, [])

  return (
    <div ref={ref} className={`mt-10 grid grid-cols-1 items-stretch gap-3 min-[601px]:grid-cols-2 sm:gap-4 lg:grid-cols-3 ${className}`}>
      {children}
    </div>
  )
}

export default EqualGrid
