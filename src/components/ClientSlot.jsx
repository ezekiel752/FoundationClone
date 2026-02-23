import Reveal from "./Reveal";

const ClientSlot = ({ src }) => {
    return (
        <Reveal>
            <div className="flex items-center justify-center">
                <img className="h-10 w-39.5 object-contain" src={src} alt="client logo" />
            </div>
        </Reveal>
    );
};
export default ClientSlot;