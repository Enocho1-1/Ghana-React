import "./button.css"

export const Button = ({topic,target,children}) => {
  
  return (
    <a href={target} className={`buttonLink ${topic}`} >
        {children}
    </a>
  )
}
