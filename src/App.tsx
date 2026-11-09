import { useCallback, useEffect, useRef, useState } from "react"
import Cursor from "./components/Cursor"
import Modal, { type ModalData } from "./components/Modal"
import Preloader from "./components/Preloader"
import ScrollHint from "./components/ScrollHint"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import { pages, type PageId } from "./data/portfolio"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Home from "./sections/Home"
import { LocaleProvider } from "./i18n"
import { ThemeProvider } from "./theme"
import Products from "./sections/Products"

const isPage = (value: string): value is PageId => pages.some((page) => page.id === value)

const Shell = () => {
  const [section, setSection] = useState<PageId>("home")
  const [isOpen, setIsOpen] = useState(false)
  const [ready, setReady] = useState(false)
  const [isLive, setIsLive] = useState(false)
  const [modal, setModal] = useState<ModalData | null>(null)
  const [leaving, setLeaving] = useState<PageId | null>(null)
  const sectionRef = useRef(section)
  const lockRef = useRef(false)
  const leaveTimer = useRef(0)
  const stageRef = useRef<HTMLDivElement>(null)

  const handleDone = useCallback(() => setReady(true), [])

  const showSection = useCallback((id: PageId) => {
    if (id === sectionRef.current) return
    const nextNode = document.getElementById(id)
    if (nextNode) nextNode.scrollTop = 0
    if (stageRef.current) stageRef.current.scrollTop = 0
    window.scrollTo(0, 0)
    window.clearTimeout(leaveTimer.current)
    setLeaving(sectionRef.current)
    sectionRef.current = id
    setSection(id)
    setIsOpen(false)
    setModal(null)
    leaveTimer.current = window.setTimeout(() => setLeaving(null), 920)
  }, [])

  const handleSection = (id: PageId) => {
    if (id === sectionRef.current) return
    showSection(id)
    if (window.location.hash !== `#${id}`) history.pushState(null, "", `#${id}`)
  }

  const handleToggleMenu = () => setIsOpen((current) => !current)
  const handleCloseModal = () => setModal(null)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsLive(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const handleStageScroll = () => {
      if (stage.scrollTop !== 0) stage.scrollTop = 0
    }
    stage.addEventListener("scroll", handleStageScroll)
    return () => stage.removeEventListener("scroll", handleStageScroll)
  }, [])

  useEffect(() => {
    const applyHash = () => {
      const id = window.location.hash.replace("#", "")
      if (!isPage(id) || id === sectionRef.current) return
      showSection(id)
    }
    applyHash()
    window.addEventListener("hashchange", applyHash)
    window.addEventListener("popstate", applyHash)
    return () => {
      window.removeEventListener("hashchange", applyHash)
      window.removeEventListener("popstate", applyHash)
    }
  }, [showSection])

  useEffect(() => {
    const go = (step: number) => {
      if (!ready || lockRef.current || modal || isOpen) return
      const index = pages.findIndex((page) => page.id === sectionRef.current)
      const next = pages[index + step]
      if (!next) return
      lockRef.current = true
      handleSection(next.id)
      window.setTimeout(() => {
        lockRef.current = false
      }, 920)
    }

    const atEdge = (step: number) => {
      const node = document.getElementById(sectionRef.current)
      if (!node) return false
      if (step > 0) return node.scrollTop + node.clientHeight >= node.scrollHeight - 2
      return node.scrollTop <= 0
    }

    const handleWheel = (event: WheelEvent) => {
      if (lockRef.current) {
        event.preventDefault()
        return
      }
      const target = event.target
      if (target instanceof Element && target.closest("input, textarea, [role=dialog]")) return
      const step = event.deltaY > 0 ? 1 : -1
      if (Math.abs(event.deltaY) < 28 || !atEdge(step)) return
      event.preventDefault()
      go(step)
    }

    let touchStart = 0
    const handleTouchStart = (event: TouchEvent) => {
      touchStart = event.touches[0]?.clientY ?? 0
    }
    const handleTouchEnd = (event: TouchEvent) => {
      const end = event.changedTouches[0]?.clientY ?? touchStart
      const delta = touchStart - end
      if (Math.abs(delta) < 64) return
      const step = delta > 0 ? 1 : -1
      if (!atEdge(step)) return
      go(step)
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("touchstart", handleTouchStart, { passive: true })
    window.addEventListener("touchend", handleTouchEnd)
    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [ready, modal, isOpen, showSection])

  useEffect(() => {
    document.body.style.overflow = modal || isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [modal, isOpen])

  return (
    <>
      {ready ? null : <Preloader onDone={handleDone} />}
      <Cursor />
      <Sidebar active={section} onSelect={handleSection} />
      <Topbar active={section} isOpen={isOpen} onToggle={handleToggleMenu} onSelect={handleSection} />
      <main className="relative h-full overflow-hidden bg-page min-[1200px]:pl-[350px]">
        <div ref={stageRef} className={isLive ? "stage is-live relative h-full overflow-hidden border-line min-[1200px]:border-l" : "stage relative h-full overflow-hidden border-line min-[1200px]:border-l"}>
          {(
            [
              ["home", <Home />],
              ["about", <About active={section === "about"} />],
              ["products", <Products onOpen={setModal} />],
              ["contact", <Contact />],
            ] as const
          ).map(([id, node]) => {
            const isCurrent = section === id
            const isBefore = pages.findIndex((page) => page.id === id) < pages.findIndex((page) => page.id === section)
            const place = [
              "panel",
              isBefore && !isCurrent ? "is-before" : "",
              isCurrent ? "is-current" : "",
              id === leaving && !isCurrent ? "is-leave" : "",
            ]
              .filter(Boolean)
              .join(" ")
            return (
              <section
                key={id}
                id={id}
                className={isCurrent ? `${place} absolute inset-0` : `${place} pointer-events-none absolute inset-0`}
                aria-hidden={isCurrent ? undefined : true}
                inert={isCurrent ? undefined : true}
              >
                {node}
              </section>
            )
          })}
          {ready && !modal && !isOpen ? <ScrollHint up={section === pages[pages.length - 1]?.id} /> : null}
        </div>
      </main>
      {modal ? <Modal data={modal} onClose={handleCloseModal} /> : null}
    </>
  )
}

const App = () => {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <Shell />
      </ThemeProvider>
    </LocaleProvider>
  )
}

export default App
