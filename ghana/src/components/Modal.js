import './modal.css'

export const Modal = ({id, children}) => {
  return (
    <div id={id} className="modal">
        {children}
    </div>
  )
}
