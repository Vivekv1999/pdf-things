import { Route, Routes } from "react-router"
import HomePage from "../Layout/HomePage"
import About from "../Pages/About"
import ContactUs from "../Pages/ContactUs"
import { allTools } from "../Tools/AllTools"

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            {allTools.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
    )
}

export default AllRoutes
