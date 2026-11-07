import { useEffect, useState } from "react";
import Socials from "../components/Socials";
import { profile, roles } from "../data/portfolio";

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
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
  }, [currentRole, isDeleting, typed]);

  return (
    <div className="enter flex min-h-full items-center justify-center px-5 py-24">
      <div className="flex w-full max-w-[880px] flex-col items-center gap-8 text-center min-[1040px]:flex-row min-[1040px]:text-left">
        <div className="morph h-[220px] w-[220px] shrink-0 overflow-hidden min-[1040px]:h-[250px] min-[1040px]:w-[250px]">
          <img
            src={profile.portrait}
            alt=""
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="min-[1040px]:ml-20">
          <p className="text-2xl mb-4 font-semibold sm:text-3xl">
            Hello, it's Me
          </p>
          <h1 className="font-display text-[30px] font-extrabold uppercase leading-none tracking-tight text-ink min-[768px]:text-[40px] min-[768px]:whitespace-nowrap">
            {profile.name}
          </h1>
          <p className="mt-6 text-2xl font-semibold sm:text-3xl">
            And I'm a <span className="text-cyan text-ink">{typed}</span>
            <span className="ml-1 inline-block w-0.5 animate-pulse bg-cyan align-middle text-transparent">
              |
            </span>
          </p>
          <p className="mx-auto mt-4 max-w-[450px] font-display text-[15px] font-medium min-[1040px]:mx-0">
            {profile.summary}
          </p>
          <Socials className="mt-6 justify-center min-[1040px]:justify-start" />
        </div>
      </div>
    </div>
  );
};

export default Home;
