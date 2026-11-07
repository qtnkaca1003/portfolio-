import { education, jobs, profile } from "../data/portfolio"

const rows = [
  ...jobs.map((job) => ({
    name: job.company,
    note: job.role,
    value: job.period,
  })),
  {
    name: education.school,
    note: `${education.degree} · Good`,
    value: education.period,
  },
]

const Roles = () => {
  return (
    <section id="roles" className="screen border-t border-line bg-surface">
      <div className="wrap grid items-start gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-7">
          <p className="font-mono text-[13px] text-action">02</p>
          <h2 className="display h2 mt-3">Frontend roles</h2>
          <p className="mt-6 max-w-[62ch] text-base text-muted">
            Salon POS at Xsofts, then banking, workforce, and enterprise screens at GMO-Z.com Runsystem.
          </p>
          <ul className="mt-8 border-t border-line">
            {rows.map((row) => (
              <li
                key={row.name}
                className="grid gap-1 border-b border-line py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
              >
                <span>
                  <span className="block text-xl leading-7">{row.name}</span>
                  <span className="mt-1 block text-sm text-muted">{row.note}</span>
                </span>
                <span className="font-mono text-[13px] text-muted sm:text-right">{row.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full max-w-[360px] overflow-hidden rounded-[4px] bg-sheet lg:col-span-4 lg:col-start-9 lg:max-w-none">
          <img
            src={profile.portrait}
            alt="Quach Trong Nhan"
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}

export default Roles
