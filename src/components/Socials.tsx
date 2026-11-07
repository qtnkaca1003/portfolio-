import { marks, socialLinks } from "../data/portfolio"



const Socials = ({ className = "" }: { className?: string }) => {
  return (
    <ul className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-ink transition-opacity hover:opacity-60"
            aria-label={link.label}
            target="_blank"
            rel="noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true">
              <path fill="currentColor" d={marks[link.label]} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Socials
