import "./sidemenu.css"
import { Closebutton } from './Closebutton'
import { Link } from "react-router-dom";
export const Sidemenu = () => {
  const style = {
    width:"3rem",
    height:"3rem",
  }
  return (
    <div id="menu" className="side-menu">
      <Closebutton />
      <div className="menu-options">
        <Link to="/">Home</Link>
        <Link to="history">History</Link>
        <Link to="culture">Culture</Link>
        <Link to="politics">Politics</Link>
      </div>
    </div>
  )
}

