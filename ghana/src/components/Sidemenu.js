import "./sidemenu.css"

export const Sidemenu = () => {
  return (
    <div id="menu" className="side-menu">
      <a href="#" className="modal-close">&times;</a>
      <div className="menu-options">
        <a href="#" target="_blank">History</a>
        <a href="#" target="_blank">Culture</a>
        <a href="#" target="_blank">Politics</a>
      </div>
    </div>
  )
}

