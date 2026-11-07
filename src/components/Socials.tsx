import { marks, socialLinks } from "../data/portfolio"



const Socials = ({ className = "" }: { className?: string }) => {
  return (
    <ul className={`flex items-center gap-2.5 ${className}`}>
      {socialLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="grid h-8 w-8 place-items-center rounded-[3px] border border-ink text-ink transition-colors duration-300 hover:bg-ink hover:text-on-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            aria-label={link.label}
            target="_blank"
            rel="noreferrer"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <path fill="currentColor" d={marks[link.label]} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Socials
