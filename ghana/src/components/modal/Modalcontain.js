import './modal.css'



export const Modalcontain = ({id,children}) => {
  return (
    <div id={id} className="pop-overlay">
      {children}
    </div>
  )
}
