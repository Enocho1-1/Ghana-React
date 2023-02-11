import "./App.css"
import { Navbar } from "./components/Navbar"
import { Sidemenu } from "./components/Sidemenu"
import { Introtext } from "./components/Introtext"
import { Video } from "./components/Video"
import { Overlay } from "./components/Overlay"

export const App = () => {
  return (
      <main>
        {/* Navagation Button */}
        < Navbar />
        {/* Navagation Menu */}
        < Sidemenu />
        {/* Introduction Text Menu */}
        < Introtext />
        {/* Video Background*/}
        < Video />
        {/* Video Background*/}
        < Overlay />
      </main>
  )
}


