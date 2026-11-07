import SectionTitle from "../components/SectionTitle";
import { marks, profile, resume } from "../data/portfolio";

type AboutProps = {
  active: boolean;
};

const bars = (
  active: boolean,
  items: { name: string; value: number; file?: string }[],
) =>
  items.map((item) => (
    <div key={item.name} className="mb-4 last:mb-0">
      <p className="flex justify-between font-medium text-ink">
        <div className="flex items-center gap-2">
          {item.file && <img src={item.file} alt={item.name} className="w-4 h-4" />}
          <span>{item.name}</span>
        </div>
        <span>{item.value}%</span>
      </p>
      <div className="mt-1 h-[3px] bg-track">
        <div
          className="h-full bg-ink transition-[width] duration-1000 ease-out"
          style={{ width: active ? `${item.value}%` : "0%" }}
        />
      </div>
    </div>
  ));

const info = (rows: { label: string; value: string; href?: string }[]) => (
  <ul>
    {rows.map((row) => (
      <li key={row.label} className="flex gap-3">
        <span className="w-[100px] shrink-0 font-bold text-ink">
          {row.label}:
        </span>
        {row.href ? (
          <a
            href={row.href}
            className="text-muted no-underline transition-colors hover:text-ink"
          >
            {row.value}
          </a>
        ) : (
          <span>{row.value}</span>
        )}
      </li>
    ))}
  </ul>
);

const About = ({ active }: AboutProps) => {
  return (
    <div className="enter w-full ">
      <div className="mx-auto w-full max-w-[968px] px-5 py-10 sm:px-10">
        <SectionTitle kicker="About" title="About Me" />
        <div className="border-b border-line pb-5">
          <h3 className="font-display text-[22px] font-bold text-ink">
            {profile.name}
          </h3>
          <p className="text-ink">{profile.role}</p>
        </div>
        <div className="border-b border-line py-7">
          <p>{profile.about}</p>
        </div>
        <div className="grid gap-8 border-b border-line py-8 md:grid-cols-2">
          {info([
            { label: "Birthday", value: profile.birthday },
            { label: "Age", value: profile.age.toString() },
            { label: "Address", value: profile.location },
            {
              label: "Email",
              value: profile.email,
              href: `mailto:${profile.email}`,
            },
            { label: "Phone", value: profile.phone, href: profile.phoneHref },
          ])}
          {info([
            { label: "Nationality", value: profile.nationality },
            { label: "Study", value: resume.education.school },
            { label: "Degree", value: resume.education.degree },
            { label: "Interest", value: profile.interest },
            { label: "Freelance", value: profile.freelance },
          ])}
        </div>
        <a
          className="mt-6 inline-flex items-center gap-2 bg-ink px-10 py-3 font-display text-sm font-medium text-on-ink no-underline transition-transform hover:-translate-y-px"
          href={profile.cvHref}
          download="TrongNhan_FrontEndEngineer.pdf"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path fill="currentColor" d={marks.Download} />
          </svg>
          Download CV
        </a>
      </div>

      <div className="bg-card py-16">
        <div className="mx-auto grid w-full max-w-[968px] gap-12 px-5 sm:px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="mb-6 font-display text-xl font-bold text-ink">
              Programming Skills
            </h3>
            {bars(active, resume.programSkills)}
          </div>
          <div>
            <h3 className="mb-6 font-display text-xl font-bold text-ink">
              Language Skills
            </h3>
            {bars(active, resume.languageSkills)}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[968px] px-5 sm:px-10">
        <div className="grid gap-12 py-16 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-display text-xl font-bold text-ink">
              Knowledge
            </h3>
            <ul>
              {resume.knowledge.map((item) => (
                <li key={item} className="border-b border-line py-2 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-display text-xl font-bold text-ink">
              Interests
            </h3>
            <ul>
              {resume.interests.map((item) => (
                <li key={item} className="border-b border-line py-2 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-card py-16">
        <div className="mx-auto w-full max-w-[968px] px-5 sm:px-10">
          <div className="grid gap-12 border-t border-line py-16 md:grid-cols-2">
            <div>
              <h3 className="mb-6 font-display text-xl font-bold text-ink">
                Education
              </h3>
              <div className="border-l border-line pl-6">
                <p className="font-display text-sm text-muted">
                  {resume.education.period}
                </p>
                <h4 className="font-display text-base font-semibold text-ink">
                  {resume.education.school}
                </h4>
                <p>
                  {resume.education.degree} · {resume.education.note}
                </p>
              </div>
            </div>
            <div>
              <h3 className="mb-6 font-display text-xl font-bold text-ink">
                Experience
              </h3>
              <ul className="border-l border-line">
                {resume.jobs.map((job) => (
                  <li
                    key={job.company}
                    className="relative mb-8 pl-6 last:mb-0"
                  >
                    <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-ink" />
                    <p className="font-display text-sm text-muted">
                      {job.period}
                    </p>
                    <h4 className="font-display text-base font-semibold text-ink">
                      {job.company}
                    </h4>
                    <p>{job.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
