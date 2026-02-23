import { Link } from "react-router-dom";
import Reveal from "./Reveal";


export function WorkSection() {
    return (
        <Reveal>
            <section className="bg-black text-white py-[5.4rem] px-[15%] my-32">
                <p className="text-[4.4rem] pt-20 mb-20">We work directly with founders & visionaries.</p>
                <Link to="/work" className="text-2xl underline cursor-pointer"><b>See our work ➝</b></Link>
            </section>
        </Reveal>
    )
}