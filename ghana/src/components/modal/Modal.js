import './modal.css'
import { Closebutton } from '../buttons/Closebutton'


export const Modal = ({id, children}) => {
  return (
    <div id={id} className="modal">
        <Closebutton />
        {children}
    </div>
  )
}



