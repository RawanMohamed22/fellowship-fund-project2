import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return(
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <main className="flex-1 flex flex-col">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout