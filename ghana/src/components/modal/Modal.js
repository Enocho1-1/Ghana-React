import './modal.css'
import { Closebutton } from '../buttons/Closebutton'


export const Modal = ({id, children}) => {
  return (
    <div id={id} className="modal absolute overflow-y-scroll top-0 left-0 right-0 bottom-0 m-auto max-h-[31.25em] w-2/4 text-ghColor-400  bg-ghColor-100 rounded-[0.625em] z-[3]">
        <Closebutton />
        {children}
    </div>
  )
}



