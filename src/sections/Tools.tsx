import { tools } from "../data/portfolio"

const Tools = () => {
  return (
    <section id="tools" className="screen border-t border-line">
      <div className="wrap">
        <p className="font-mono text-[13px] text-action">03</p>
        <h2 className="display h2 mt-3">Tools on the job</h2>
        <p className="mt-6 max-w-[62ch] text-base text-muted">
          React, TypeScript and the libraries behind the POS, booking and loan screens.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {tools.map((tool) => (
            <li key={tool.name} className="flex items-center gap-4 rounded-[4px] border border-line bg-surface px-4 py-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[4px] bg-sheet">
                <img src={tool.file} alt="" width={24} height={24} className="h-6 w-6 object-contain" />
              </span>
              <span className="text-base font-medium">{tool.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Tools
