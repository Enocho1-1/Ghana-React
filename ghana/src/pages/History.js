import { Navbar } from "../components/Navbar"
import { Sidemenu } from "../components/Sidemenu"
import { Video } from "../components/Video"
import { Overlay } from "../components/Overlay"
import { Buttoncontainer } from "../components/Buttoncontainer"
import { Button } from "../components/Button"
import { Modalcontain } from "../components/Modalcontain"
import { Historymodal } from "../components/Historymodal"
import videoBg from "../assests/indy-arch.mov"
import "../components/button.css"

export const History = () => {
  return (
    <main>
        {/* Navagation Button */}
        < Navbar />
        {/* Navagation Menu */}
        < Sidemenu />
        <Buttoncontainer>
            <Button topic="early-history" target="#earlyhisotry">
                <h1>Early History</h1>
            </Button>
            <Button topic="independence">
                <h1>Independence</h1>
            </Button>
            <Button topic="present">
                <h1>Present</h1>
            </Button>
        </Buttoncontainer>
        {/* Pop Up Modals */}
        < Modalcontain id="earlyhisotry"> 
              <Historymodal />
          </Modalcontain>
        < Video>
          <video src={videoBg} autoPlay loop muted />
        </Video>
        < Overlay />
    </main>
  )
}
