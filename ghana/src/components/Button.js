import "./button.css"

export const Button = ({topic,children}) => {
  return (
    <a href="" className={`buttonLink ${topic}`}>
        {children}
    </a>
  )
}
