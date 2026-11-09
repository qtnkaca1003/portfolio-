import { useState, type FormEvent } from "react";
import SectionTitle from "../components/SectionTitle";
import { marks, profile } from "../data/portfolio";
import { useLocale } from "../i18n";

const Contact = () => {
  const { copy } = useLocale();
  const text = copy.contact;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "required" | "sent">("idle");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("required");
      return;
    }
    setStatus("sent");
    const subject = encodeURIComponent(text.subject(name.trim()));
    const body = encodeURIComponent(
      `${message.trim()}\n\n${name.trim()}\n${email.trim()}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="enter mx-auto w-full max-w-[968px] px-5 py-24 sm:px-10">
      <SectionTitle kicker={text.kicker} title={text.title} />
      <div className="mb-12 grid place-items-center px-6  text-center">
        <p className="font-display text-xs font-semibold uppercase text-muted">
          {text.based}
        </p>
        <p className="font-display text-3xl font-extrabold text-ink">
          {copy.location}
        </p>
      </div>
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 text-ink no-underline hover:opacity-70"
        >
          <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true">
            <path fill="currentColor" d={marks.Mail} />
          </svg>
          {profile.email}
        </a>
        <a
          href={profile.phoneHref}
          className="inline-flex items-center gap-2 text-ink no-underline hover:opacity-70"
        >
          <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true">
            <path fill="currentColor" d={marks.Phone} />
          </svg>
          {profile.phone}
        </a>
        <a
          className="inline-flex items-center justify-center gap-2 bg-ink px-10 pb-3 pt-3 font-display text-sm font-medium text-on-ink no-underline transition-transform hover:-translate-y-px hover:opacity-70"
          href={profile.cvHref}
          download="TrongNhan_FrontEndEngineer.pdf"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path fill="currentColor" d={marks.Download} />
          </svg>
          {text.download}
        </a>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        {status === "required" ? (
          <p className="mb-3 font-medium text-[#f52225]">{text.required}</p>
        ) : null}
        {status === "sent" ? (
          <p className="mb-3 font-medium text-ink">{text.sent}</p>
        ) : null}
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="sr-only">{text.name}</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={text.name}
              className="w-full border border-line bg-transparent px-4 py-3 text-ink outline-none focus:border-ink"
              name="name"
            />
          </label>
          <label className="block">
            <span className="sr-only">{text.email}</span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={text.email}
              type="email"
              className="w-full border border-line bg-transparent px-4 py-3 text-ink outline-none focus:border-ink"
              name="email"
            />
          </label>
        </div>
        <label className="mt-6 block">
          <span className="sr-only">{text.message}</span>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder={text.message}
            className="h-[120px] w-full resize-none border border-line bg-transparent px-4 py-3 text-ink outline-none focus:border-ink"
            name="message"
          />
        </label>
        <button
          type="submit"
          className="mt-2 bg-ink px-10 pb-3.5 pt-2.5 font-display text-sm font-medium text-on-ink transition-transform hover:-translate-y-px"
        >
          {text.send}
        </button>
      </form>
    </div>
  );
};

export default Contact;
