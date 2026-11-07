import { navItems, profile, socialLinks } from "../data/portfolio"

const Footer = () => {
  return (
    <footer id="contact" className="screen bg-sheet text-sheet-ink">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-mono text-[13px] text-sheet-muted">05</p>
          <h2 className="display mt-3 text-[40px] leading-none text-sheet-ink lg:text-[64px]">Email Nhan</h2>
          <p className="mt-6 max-w-[42ch] text-base text-sheet-ink">
            Frontend work on salon POS, booking and Japanese enterprise products, from Ho Chi Minh City.
          </p>
          <a className="btn btn-primary btn-xl mt-8 inline-flex px-7" href={`mailto:${profile.email}`}>
            Email Nhan
          </a>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5">
          <div>
            <p className="text-[13px] font-medium text-sheet-muted">Pages</p>
            <ul className="mt-3 space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a className="draw text-base text-sheet-ink" href={`#${item.id}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[13px] font-medium text-sheet-muted">Contact</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="draw text-base text-sheet-ink" href={profile.phoneHref}>
                  {profile.phone}
                </a>
              </li>
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a className="draw text-base text-sheet-ink" href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-[13px] text-sheet-muted lg:col-span-12">
          © {new Date().getFullYear()} {profile.name}. {profile.location}. Product names and logos are trademarks of
          their owners.
        </p>
      </div>
    </footer>
  )
}

export default Footer
