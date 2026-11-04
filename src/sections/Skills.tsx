import EqualGrid from "../components/EqualGrid"
import Reveal from "../components/Reveal"
import { skillGroups } from "../data/portfolio"

const icons = ["</>", "⚛", "✦", "⌘", "💻"]

const Skills = () => {
  return (
    <section id="skills" className="py-12">
      <div className="site-container">
        <Reveal>
          <h2 className="text-center text-4xl font-bold">
            My <span className="text-cyan">Skills</span>
          </h2>
        </Reveal>
        <EqualGrid>
            {skillGroups.map((group, index) => {

            return (
            <Reveal key={group.title} className="h-full" delay={(index % 3) * 120}>
            <article
              data-equal-card
              className={
                "flex h-full flex-col rounded-3xl border border-transparent bg-panel px-6 py-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan/50 hover:shadow-[0_0_22px_rgba(0,238,255,0.28)]"
              }
            >
              <div
                className={
                  "mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-cyan/20 text-cyan"
                }
              >
                {icons[index]}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{group.title}</h3>
              <ul className="mt-5 flex flex-wrap justify-center gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full bg-ink px-3 py-1 text-sm text-white/90">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            </Reveal>
            )
          })}
        </EqualGrid>
      </div>
    </section>
  )
}

export default Skills
