import Close from "../../assests/ghana.png"
export const Closebutton = () => {
    const style = {
        width:"3rem",
        height:"3rem",
      }
    return (
      <a href="#" className="modal-close absolute top-[2%] left-[5%] no-underline" title="close"><img src={Close} style={style}/></a>
    )
  }