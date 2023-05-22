import "./sidemenu.css"
import { Closebutton } from '../buttons/Closebutton'
import { AllLinks } from "../../Links/AllLinks"

export const Sidemenu = () => {
  return (
    <div id="menu" className="side-menu absolute h-full top-0 left-[80%] right-0 bottom-0">
      <Closebutton />
      <div className="menu-options relative flex flex-col items-center h-max top-[15%]">
        <AllLinks/>
      </div>
    </div>
  )
}

