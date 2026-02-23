import { Link, useLocation } from "react-router-dom"

//component imports
import { ProjectCard } from "./ProjectCard";

// data imports
import { projects } from "../data/projects";





export function ProjectSection() {

    const { pathname } = useLocation();
    const isHomePage = pathname === "/";
    const isThirdHomePage = pathname === "/third-home"; 
    const isSecondHomePage = pathname === "/second-home";
    const isWorkPage = pathname === "/work";
    const isSecondWorkPage = pathname === "/second-work";
    const isThirdWorkPage = pathname === "/third-work";

    

    let imagesToRender;

    if(isWorkPage || isSecondWorkPage || isThirdWorkPage) {
        imagesToRender = projects
    } else if (isThirdHomePage) {
      imagesToRender = projects.slice(0, 6);
    } else {
      imagesToRender = projects.slice(0, 4);
    }

    const sectionTitle =
      isWorkPage || isSecondWorkPage || isThirdWorkPage
        ? "Select Projects"
        : "Recent Projects";

    const titleStyles =
      isWorkPage || isSecondWorkPage || isThirdWorkPage
        ? "text-[4.5rem] py-10 my-20 font-medium"
        : "text-[1.8rem] mb-3 opacity-50";

    const projectDiv =
      isWorkPage || isHomePage || isSecondHomePage
        ? "grid grid-cols-2 gap-10"
        : isThirdHomePage || isThirdWorkPage
          ? "grid grid-cols-3 gap-10"
          : "grid grid-cols-1 gap-10";

    

    return (
        <section className="py-[4.4rem] px-[15%]"  >
            <p className={titleStyles}>{sectionTitle}</p>
            <div className={projectDiv}>
                {imagesToRender.map((project) => (
                    <ProjectCard
                        key={project.id}
                        src={project.src}
                        alt={project.alt}
                        title={project.title}
                    />
                ))}
            </div>
            {!isWorkPage && <p className="text-[1.4rem] font-semibold underline mt-12 hover-fade"><Link to="/work">See all work ➝</Link></p>}
        </section>
    )
}