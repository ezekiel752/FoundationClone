import { useLocation } from "react-router-dom";
import { loremData } from "../data/loremData";
import DataCard from "./DataCard";

export const DummySection = () => {
    const dummyData = loremData;
    const { pathname} = useLocation();
    const isServicesPage = pathname === "/services";

    return (
      <>
        <section
          className={
            isServicesPage
              ? " text-black py-[4.4rem] px-[15%]"
              : "bg-black text-white py-[4.4rem] px-[15%]"
          }
        >
          <div className="grid grid-cols-2 gap-12.5 ">
            {dummyData.map((lorem) => (
              <DataCard
                key={lorem.id}
                body={lorem.body}
                footer={lorem.footer}
              />
            ))}
          </div>
        </section>
      </>
    );
}

