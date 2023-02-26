import "./sidemenu.css"
import { Link } from "react-router-dom";
export const Sidemenu = () => {
  return (
    <div id="menu" className="side-menu">
      <a href="#" className="modal-close">&times;</a>
      <div className="menu-options">
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
        <Link to="/culture">Culture</Link>
        <a href="#" target="_blank">Politics</a>
      </div>
    </div>
  )
}

