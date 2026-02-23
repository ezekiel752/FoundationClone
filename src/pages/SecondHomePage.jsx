import { ClientSection } from "../components/ClientSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { ProjectSection } from "../components/ProjectSection";
import { ScheduleCallSection } from "../components/ScheduleCallSection";



const SecondHomePage = () => {
    return (
        <>
            <HeroSection />
            <ProjectSection />
            <ClientSection />
            <ScheduleCallSection />
            <Footer />
        </>
    );
}
 
export default SecondHomePage;