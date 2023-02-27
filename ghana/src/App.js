import "./App.css"
import { Navbar } from "./components/Navbar"
import { Sidemenu } from "./components/Sidemenu"
import { Introtext } from "./components/Introtext"
import { Video } from "./components/Video"
import { Modalcontain } from "./components/Modalcontain"
import { Exploremodal } from "./components/Exploremodal"
import { Overlay } from "./components/Overlay"
import videoBg from "./assests/ghana-133663.mp4"

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
        < Video>
          <video src={videoBg} autoPlay loop muted />
        </Video>
        {/* Landmarks Modal*/}
        < Modalcontain id="landmarks"> 
          < Exploremodal />
        </Modalcontain>
        {/* Video Background*/}
        < Overlay />
      </main>
  )
}


