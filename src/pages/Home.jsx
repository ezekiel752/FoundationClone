import { ClientSection } from "../components/ClientSection"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { ProjectSection } from "../components/ProjectSection"
import { ScheduleCallSection } from "../components/ScheduleCallSection"
import { WorkSection } from "../components/WorkSection"


const Home = () => {
    return (
        <>
            <HeroSection />
            <WorkSection />
            <ProjectSection />
            <ClientSection />
            <ScheduleCallSection />
            <Footer />
        </>
    )
}

export default Home