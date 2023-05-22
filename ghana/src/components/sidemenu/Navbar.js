import "./navbar.css"
import Star from "../../assests/star.png"

export const Navbar = () => {
  return (
    <a href="#menu" className="navagation-link absolute top-4 right-4 z-[4]">
      <img class="max-h-12 max-w-12 hover:cursor-pointer" src={Star} alt="" />
    </a>
  )
}


