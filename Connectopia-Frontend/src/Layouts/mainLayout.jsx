import { Outlet } from "react-router"
import Navbar from "../Components/navbar"

const MainLayout=()=>{
    return(
        <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </div>

    )
}
export default MainLayout