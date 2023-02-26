import { Navbar } from "../components/Navbar"
import { Sidemenu } from "../components/Sidemenu"
import { Video } from "../components/Video"
import { Overlay } from "../components/Overlay"
import { Buttoncontainer } from "../components/Buttoncontainer"
import videoBg from "../assests/indy-arch.mov"

export const History = () => {
  return (
    <main>
        {/* Navagation Button */}
        < Navbar />
        {/* Navagation Menu */}
        < Sidemenu />
        <Buttoncontainer />
        < Video>
          <video src={videoBg} autoPlay loop muted />
        </Video>
        < Overlay />
    </main>
  )
}
