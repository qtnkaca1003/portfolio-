import PosWindow from "../components/PosWindow"
import { profile } from "../data/portfolio"

const Hero = () => {
  return (
    <section id="work" className="hero">
      <div className="wrap flex h-full min-h-0 flex-col lg:grid lg:grid-cols-12 lg:items-start lg:gap-6">
        <div className="lg:col-span-5">
          <p className="font-mono text-[13px] text-action">Frontend · Ho Chi Minh City</p>
          <h1 className="display h1 mt-4">Frontend engineering for product teams</h1>
          <p className="mt-6 max-w-[42ch] text-[17px] leading-7 text-muted lg:text-xl lg:leading-8">
            I build React and TypeScript interfaces for POS, booking, banking and workforce products, and keep them
            stable in production.
          </p>
          <p className="mt-6 text-base font-medium">3 years in production</p>
          <div className="btn-row mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary inline-flex px-6" href={`mailto:${profile.email}`}>
              Email Nhan
            </a>
            <a className="btn btn-secondary inline-flex px-6" href={profile.cvHref}>
              Download the CV
            </a>
          </div>
        </div>
        <div className="mt-8 lg:col-span-6 lg:col-start-7 lg:mt-0 lg:h-full">
          <PosWindow />
        </div>
      </div>
    </section>
  )
}

export default Hero
