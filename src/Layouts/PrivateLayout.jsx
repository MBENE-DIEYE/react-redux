import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"

const PrivateLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
export default PrivateLayout