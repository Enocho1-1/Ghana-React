import "./button.css"

export const Buttoncontainer = ({children}) => {
  
  return (
    <section>
        <div className="buttonContainer">
          {children}
        </div>
    </section>
 
  )
}
