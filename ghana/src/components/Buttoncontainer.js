import "./button.css"

export const Buttoncontainer = ({children}) => {
  
  return (
    <section className="buttonParent">
        <div className="buttonContainer">
          {children}
        </div>
    </section>
 
  )
}
