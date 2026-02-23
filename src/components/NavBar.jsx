import { Link } from "react-router-dom"
import Reveal from "./Reveal"

export function NavBar() {
    return (
        <Reveal>
            <header className="flex items-center justify-between section-padding text-[1.5rem] mt-5">
                <Link className="logo hover:opacity-50" to="/">Foundation</Link>
                <p className="invisible">Foundation</p>

                <ul className="flex justify-between gap-10">
                    <li className="hover-fade"><Link to="/work">Work</Link></li>
                    <li className="hover-fade"><Link to="/services">Service</Link></li>
                    <li className="hover-fade"><Link to="/about">About</Link></li>
                </ul>

                <Link className=" hover-fade underline" to="/contact">Hire us <span>➝</span></Link>
            </header>
        </Reveal>
    )
}