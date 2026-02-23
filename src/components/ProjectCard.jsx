import { useLocation } from "react-router-dom";
import Reveal from "./Reveal";

export const ProjectCard = ({ src, title, alt }) => {
    const { pathname } = useLocation();
    const isSecondWorkpage = pathname === "/second-work";

    return (
        <Reveal>
            <div className="hover-fade">
                <img
                    src={src}
                    alt={`${alt} project preview`}
                    className={isSecondWorkpage ? "max-w-full h-auto w-full rounded-2xl" : "projects-image-style rounded-2xl"}
                />
                <p className="text-[1.3rem] mt-4">{title}</p>
            </div>
        </Reveal>
    );
}

