import { useLocation } from "react-router-dom";
import heroImage from "../images/Foundation.jpg";
import Reveal from "./Reveal";

export function HeroSection() {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  return (
    <section
      className={`pt-5 px-[15%] ${
        isHomePage ? "pb-[3.1rem]" : "pb-3"
      }`}
    >
      <Reveal>
        <p className="text-[4.5rem] py-10 my-20 font-medium">
          A design studio focused on pushing brands forward
        </p>
      </Reveal>

      {isHomePage && (
        <Reveal>
          <img
            className="h-180 w-screen mb-22"
            src={heroImage}
            alt="Hero section image"
          />
        </Reveal>
      )}

      {isHomePage && (
        <Reveal>
          <p className="max-w-2xl text-2xl leading-7 my-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit…
          </p>
          <a
            href="/contact"
            className="my-8 text-2xl underline hover-fade inline-block"
          >
            <b>Start a project ➝</b>
          </a>
        </Reveal>
      )}
    </section>
  );
}
