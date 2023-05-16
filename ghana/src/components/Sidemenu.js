import "./sidemenu.css"
import { Closebutton } from './buttons/Closebutton'
import { AllLinks } from "../Links/AllLinks"

export const Sidemenu = () => {
  return (
    <div id="menu" className="side-menu">
      <Closebutton />
      <div className="menu-options">
        <AllLinks/>
      </div>
    </div>
  )
}

