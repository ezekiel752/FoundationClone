import { useLocation } from "react-router-dom";
import Reveal from "./Reveal";

const DataCard = ({ body, footer }) => {
    const { pathname } = useLocation();
    const isServicesPage = pathname === "/services";

    return (
        <Reveal>
            <div>
                <p className="max-w-2xl text-2xl leading-7 my-8">{body}</p>
                {isServicesPage ? <p></p> : <p className="max-w-2xl text-2xl leading-7 my-8">{footer}</p> }
            </div>
        </Reveal>
    );
}

export default DataCard;