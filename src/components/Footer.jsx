import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export function Footer() {
    return (
        <Reveal>
            <section className="text-[1.3rem] py-[4.4rem] px-[15%] flex justify-between ">
                <p className="">© Foundation <br /> Powered by <span className="hover-fade underline">Webflow</span>.</p>
                <ul className="extra invisible">
                    <li><Link to="">About</Link></li>
                </ul>
                <ul>
                    <li className="hover-fade"><Link to="">About</Link></li>
                    <li className="hover-fade"><Link to="">Contact</Link></li>
                    <li className="hover-fade"><Link to="">Blog</Link></li>
                    <li className="hover-fade"><Link to="">Licences</Link></li>
                    <li className="hover-fade"><Link to="">Style Guide</Link></li>
                    <li className="hover-fade"><Link to="">Changelog</Link></li>
                    <li className="hover-fade"><Link to="">Password</Link></li>
                    <li className="hover-fade"><Link to="">404</Link></li>
                </ul>
                <ul>
                    <li className="hover-fade"><Link to="/">Home 1</Link></li>
                    <li className="hover-fade"><Link to="/second-home">Home 2</Link></li>
                    <li className="hover-fade"><Link to="/third-home">Home 3</Link></li>
                    <li className="hover-fade"><Link to="/work">Work 1</Link></li>
                    <li className="hover-fade"><Link to="/second-work">Work 2</Link></li>
                    <li className="hover-fade"><Link to="/third-work">Work 3</Link></li>
                </ul>
                <ul>
                    <li className="hover-fade"><Link to="">Twitter</Link></li>
                    <li className="hover-fade"><Link to="">Instagram</Link></li>
                    <li className="hover-fade"><Link to="">Facebook</Link></li>
                </ul>
            </section>
        </Reveal>
    )
}