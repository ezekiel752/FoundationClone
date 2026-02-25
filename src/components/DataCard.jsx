import Reveal from "./Reveal";

const DataCard = ({ body, footer }) => {
  return (
    <Reveal>
      <div className="p-6 rounded-2xl"> 
        <p className="mb-4 text-[1rem]">{body}</p>
        <p className="text-[1rem] flex items-center gap-1.5 underline opacity-70">{footer}</p>
      </div>
    </Reveal>
  );
};

export default DataCard;
