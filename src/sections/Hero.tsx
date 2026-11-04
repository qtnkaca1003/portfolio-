import { useEffect, useState } from "react"
import Reveal from "../components/Reveal"
import SocialIcon from "../components/SocialIcon"
import { profile, roles, socialLinks } from "../data/portfolio"

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [typed, setTyped] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const currentRole = roles[roleIndex] ?? roles[0]

  useEffect(() => {
    if (!isDeleting && typed === currentRole) {
      const pause = window.setTimeout(() => setIsDeleting(true), 1400)
      return () => window.clearTimeout(pause)
    }

    if (isDeleting && typed === "") {
      setIsDeleting(false)
      setRoleIndex((value) => (value + 1) % roles.length)
      return
    }

    const timer = window.setTimeout(() => {
      const nextLength = isDeleting ? typed.length - 1 : typed.length + 1
      setTyped(currentRole.slice(0, nextLength))
    }, isDeleting ? 45 : 85)

    return () => window.clearTimeout(timer)
  }, [currentRole, isDeleting, typed])

  return (
    <section id="home" className="site-container grid min-h-screen items-center gap-10 pt-24 lg:grid-cols-2">
      <Reveal>
        <p className="text-2xl font-semibold sm:text-3xl">Hello, it's Me</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
        <p className="mt-6 text-2xl font-semibold sm:text-3xl">
          And I'm a <span className="text-cyan">{typed}</span>
          <span className="ml-1 inline-block w-0.5 animate-pulse bg-cyan align-middle text-transparent">|</span>
        </p>
        <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base">{profile.summary}</p>
        <ul className="mt-6 flex gap-3">
          {socialLinks.map((link) => {
            const iconClass =
              "grid h-11 w-11 place-items-center rounded-full border-2 border-cyan text-cyan transition duration-300 hover:scale-110 hover:bg-cyan hover:text-ink"

            return (
              <li key={link.label}>
                {link.href ? (
                  <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} className={iconClass}>
                    <SocialIcon name={link.label} />
                  </a>
                ) : (
                  <span aria-label={link.label} className={iconClass}>
                    <SocialIcon name={link.label} />
                  </span>
                )}
              </li>
            )
          })}
        </ul>
        <a
          href={profile.cvHref}
          className="mt-8 inline-flex rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-1 hover:bg-white"
        >
          Download CV
        </a>
      </Reveal>
      <Reveal className="relative mx-auto w-full max-w-md" delay={160}>
        <div className="absolute inset-4 rounded-[2.5rem] bg-cyan/30 blur-2xl" />
        <img
          src={profile.portrait}
          alt="Portrait of Quach Trong Nhan"
          className="relative aspect-[4/5] w-full rounded-[2.5rem] border-2 border-cyan object-cover object-top transition duration-500 hover:scale-[1.02]"
        />
      </Reveal>
    </section>
  )
}

export default Hero
