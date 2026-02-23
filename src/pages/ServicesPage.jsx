import DataCard from "../components/DataCard";
import { loremData } from "../data/loremData";

const ServicesPage = () => {
    const dummyData = loremData
    return (
      <>
        <div className="grid grid-cols-2 gap-12.5 ">
          {dummyData.map((lorem) => (
            <DataCard key={lorem.id} body={lorem.body} footer="" />
          ))}
        </div>
      </>
    );
}

export default ServicesPage;