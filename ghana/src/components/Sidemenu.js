import "./sidemenu.css"
import Close from "../assests/ghana.png"
import { Link } from "react-router-dom";
export const Sidemenu = () => {
  const style = {
    width:"3rem",
    height:"3rem",
  }
  return (
    <div id="menu" className="side-menu">
      <a href="#" className="modal-close"><img src={Close} style={style}/>
</a>
      <div className="menu-options">
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
        <Link to="/culture">Culture</Link>
        <Link to="/politics">Politics</Link>
      </div>
    </div>
  )
}

