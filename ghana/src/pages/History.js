import { Navbar } from "../components/Navbar"
import { Sidemenu } from "../components/Sidemenu"
import { Video } from "../components/Video"
import { Overlay } from "../components/Overlay"
import { Titleheader } from "../components/Titleheader"
import { Buttoncontainer } from "../components/Buttoncontainer"
import videoBg from "../assests/indy-arch.mov"

export const History = () => {
  return (
    <main>
        {/* Navagation Button */}
        < Navbar />
        {/* Navagation Menu */}
        < Sidemenu />
        {/* < Titleheader>
            <h1>History</h1>
        </Titleheader> */}
        <Buttoncontainer />
        < Video>
          <video src={videoBg} autoPlay loop muted />
        </Video>
        < Overlay />
    </main>
  )
}
