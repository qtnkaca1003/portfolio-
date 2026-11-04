import Reveal from "../components/Reveal"
import { education, jobs, profile } from "../data/portfolio"

const About = () => {
  return (
    <section id="about" className="site-container grid items-center gap-10 py-12 lg:grid-cols-2">
      <Reveal className="relative order-2 mx-auto w-full max-w-md lg:order-1">
        <img
          src={profile.nhanqt}
          alt=""
          className="aspect-square w-full rounded-[2rem] border-2 border-cyan object-cover"
        />
      </Reveal>
      <Reveal className="order-1 lg:order-2" delay={140}>
        <h2 className="text-4xl font-bold">
          About <span className="text-cyan">Me</span>
        </h2>
        <p className="mt-3 text-xl font-semibold">{profile.role}</p>
        <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">{profile.about}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-transparent bg-panel p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan/60 hover:shadow-[0_0_18px_#0ef]">
            <h3 className="text-lg font-semibold text-cyan">Experience</h3>
            <ul className="mt-4 space-y-4">
              {jobs.map((job) => (
                <li key={job.company}>
                  <p className="font-semibold">
                    {job.company} <span className="font-normal text-white/70">· {job.role}</span>
                  </p>
                  <p className="text-sm text-white/60">{job.period}</p>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-transparent bg-panel p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan/60 hover:shadow-[0_0_18px_#0ef]">
            <h3 className="text-lg font-semibold text-cyan">Education</h3>
            <p className="mt-4 font-semibold">{education.school}</p>
            <p className="mt-1 text-sm text-white/70">
              {education.degree} · {education.period}
            </p>
            <p className="mt-1 text-sm text-white/60">{education.note}</p>
          </article>
        </div>
      </Reveal>
    </section>
  )
}

export default About
