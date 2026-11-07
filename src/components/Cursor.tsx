import { useEffect, useRef } from "react"

const Cursor = () => {
  const innerRef = useRef<HTMLDivElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches
    if (!fine) return

    document.documentElement.classList.add("has-cursor")
    const inner = innerRef.current
    const outer = outerRef.current
    if (!inner || !outer) return

    const handleMove = (event: MouseEvent) => {
      const position = `translate(${event.clientX}px, ${event.clientY}px)`
      inner.style.transform = position
      outer.style.transform = position
      const target = event.target
      const hover = target instanceof Element && Boolean(target.closest("a, button"))
      inner.classList.toggle("is-hover", hover)
      outer.classList.toggle("is-hover", hover)
    }

    window.addEventListener("mousemove", handleMove)
    return () => {
      window.removeEventListener("mousemove", handleMove)
      document.documentElement.classList.remove("has-cursor")
    }
  }, [])

  return (
    <>
      <div ref={outerRef} className="cursor cursor-outer" />
      <div ref={innerRef} className="cursor cursor-inner" />
    </>
  )
}

export default Cursor
