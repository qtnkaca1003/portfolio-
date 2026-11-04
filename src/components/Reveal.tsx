import { useEffect, useRef } from "react"
import type { ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

const Reveal = ({ children, className = "", delay = 0 }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduced) {
      node.style.opacity = "1"
      node.style.transform = "none"
      return
    }

    node.style.opacity = "0"
    node.style.transform = "translateY(72px)"
    node.style.transition = `opacity 700ms ease ${delay}ms, transform 800ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`

    let frame = 0

    const show = () => {
      frame = window.requestAnimationFrame(() => {
        frame = window.requestAnimationFrame(() => {
          node.style.opacity = "1"
          node.style.transform = "translateY(0)"
        })
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((entry) => entry.isIntersecting)
        if (!visible) return
        observer.disconnect()
        show()
      },
      { root: null, rootMargin: "0px 0px -12% 0px", threshold: 0.2 },
    )

    observer.observe(node)

    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default Reveal
