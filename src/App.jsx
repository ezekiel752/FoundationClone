import { Route, Routes } from 'react-router-dom'

// Component Imports
import { NavBar } from "./components/NavBar"

// Page Imports
import Home from "./pages/Home"
import WorkPage from "./pages/WorkPage"
import SecondHomePage from "./pages/SecondHomePage"
import ServicesPage from './pages/ServicesPage'
import ThirdHomePage from './pages/ThirdHomePage'
import SecondWorkPage from './pages/SecondWorkPage'
import ThirdWorkPage from "./pages/ThirdWorkPage";

 const App = () => {
    return (
            <div>
                <NavBar />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/work" element={<WorkPage />} />
                        <Route path="/second-home" element={<SecondHomePage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/third-home" element={<ThirdHomePage />} />
                        <Route path="/second-work" element={<SecondWorkPage />} />
                        <Route path="/third-work" element={<ThirdWorkPage />} />
                    </Routes>
                </div>
            </div>
    )
}

export default App