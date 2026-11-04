import Reveal from "../components/Reveal"
import SocialIcon from "../components/SocialIcon"
import { profile, socialLinks } from "../data/portfolio"

const PhoneIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.5 3.5h2.2c.4 0 .8.3.9.7l.8 2.4a1 1 0 0 1-.3 1.1L9.6 9.1a12 12 0 0 0 5.3 5.3l1.4-1.5a1 1 0 0 1 1.1-.3l2.4.8c.4.1.7.5.7.9v2.2c0 .6-.4 1-1 1.1A16.5 16.5 0 0 1 3.4 4.5c0-.6.5-1 1.1-1Z"
      />
    </svg>
  )
}

const EmailIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Zm1.8.2 6.2 4.4 6.2-4.4a1 1 0 0 0-.7-.2h-11a1 1 0 0 0-.7.2Zm12.7 1.6-6.7 4.8a1 1 0 0 1-1.2 0L4.5 8.3V17.5c0 .3.2.5.5.5h14c.3 0 .5-.2.5-.5V8.3Z"
      />
    </svg>
  )
}

const LocationIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.8a7 7 0 0 0-7 7c0 5.1 6.1 10.8 6.4 11.1.3.3.9.3 1.2 0 .3-.3 6.4-6 6.4-11.1a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  )
}

const Contact = () => {

  return (
    <section id="contact" className="py-12">
      <div className="site-container">
        <Reveal>
          <h2 className="text-center text-4xl font-bold">
            Contact <span className="text-cyan">Me!</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <Reveal>
            <a
              href={profile.phoneHref}
              className="flex items-center gap-4 rounded-2xl border border-transparent bg-panel p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cyan/15 text-cyan">
                <PhoneIcon />
              </span>
              <span>
                <p className="text-sm font-semibold text-cyan">Phone</p>
                <p className="mt-1 font-semibold">{profile.phone}</p>
              </span>
            </a>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-2xl border border-transparent bg-panel p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cyan/15 text-cyan">
                <EmailIcon />
              </span>
              <span className="min-w-0">
                <p className="text-sm font-semibold text-cyan">Email</p>
                <p className="mt-1 font-semibold break-all">{profile.email}</p>
              </span>
            </a>
          </Reveal>
          <Reveal delay={240}>
          <div className="flex items-center gap-4 rounded-2xl bg-panel p-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cyan/15 text-cyan">
              <LocationIcon />
            </span>
            <span>
              <p className="text-sm font-semibold text-cyan">Location</p>
              <p className="mt-1 font-semibold">{profile.location}</p>
            </span>
          </div>
          </Reveal>
        </div>
        <Reveal delay={160}>
       {/*  <form className="mx-auto mt-10 max-w-xl space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-panel px-4 py-3 text-sm outline-none transition duration-300 hover:border-cyan/60 focus:border-cyan"
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-panel px-4 py-3 text-sm outline-none transition duration-300 hover:border-cyan/60 focus:border-cyan"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-panel px-4 py-3 text-sm outline-none transition duration-300 hover:border-cyan/60 focus:border-cyan"
            />
          </div>
          {error ? (
            <p className="text-sm text-red-300" role="alert">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            className="rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_0_22px_#0ef]"
          >
            Send message
          </button>
        </form> */}
        <ul className="mt-8 flex justify-center gap-3">
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
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
