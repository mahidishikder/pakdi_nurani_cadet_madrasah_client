import { Outlet } from "react-router-dom"
import Footer from "./conponents/Footer/Footer"
import Navber from "./conponents/Navber/Navber"

function Loyout() {
  return (
    <div className="px-1">
    <Navber></Navber>
    <div>
      <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default Loyout