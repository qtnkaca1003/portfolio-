import { useEffect, useState } from "react";
import Socials from "../components/Socials";
import { profile } from "../data/portfolio";
import { useLocale } from "../i18n";

const Home = () => {
  const { locale, copy } = useLocale();
  const roles = copy.home.roles;
  const [generation, setGeneration] = useState(locale);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  if (generation !== locale) {
    setGeneration(locale);
    setRoleIndex(0);
    setTyped("");
    setIsDeleting(false);
  }

  const currentRole = roles[roleIndex] ?? roles[0];

  useEffect(() => {
    if (!isDeleting && typed === currentRole) {
      const pause = window.setTimeout(() => setIsDeleting(true), 1400);
      return () => window.clearTimeout(pause);
    }

    if (isDeleting && typed === "") {
      setIsDeleting(false);
      setRoleIndex((value) => (value + 1) % roles.length);
      return;
    }

    const timer = window.setTimeout(
      () => {
        const nextLength = isDeleting ? typed.length - 1 : typed.length + 1;
        setTyped(currentRole.slice(0, nextLength));
      },
      isDeleting ? 45 : 85,
    );

    return () => window.clearTimeout(timer);
  }, [currentRole, isDeleting, roles.length, typed]);

  return (
    <div className="enter flex min-h-full items-center justify-center px-5 py-24">
      <div className="flex w-full max-w-[880px] flex-col items-center gap-8 text-center min-[1040px]:flex-row min-[1040px]:text-left">
        <div className="morph h-[250px] w-[250px] shrink-0 overflow-hidden min-[1040px]:h-[250px] min-[1040px]:w-[250px]">
          <img
            src={profile.portrait}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-[1040px]:ml-20">
          <p className="text-2xl mb-4 font-semibold sm:text-3xl">
            {copy.home.hello}
          </p>
          <h1 className="font-display text-[30px] font-extrabold uppercase leading-none tracking-tight text-ink min-[768px]:text-[40px] min-[768px]:whitespace-nowrap">
            {profile.name}
          </h1>
          <p className="mt-6 text-2xl font-semibold sm:text-3xl">
            {copy.home.andIm} <span className="text-cyan text-ink">{typed}</span>
            <span className="ml-1 inline-block w-0.5 animate-pulse bg-cyan align-middle text-transparent">
              |
            </span>
          </p>
          <p className="mx-auto mt-4 max-w-[450px] font-display text-[15px] font-medium min-[1040px]:mx-0">
            {copy.home.summary}
          </p>
          <Socials className="mt-6 justify-center min-[1040px]:justify-start" />
        </div>
      </div>
    </div>
  );
};

export default Home;
