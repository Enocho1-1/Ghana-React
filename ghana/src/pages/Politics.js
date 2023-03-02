import { Navbar } from "../components/Navbar"
import { Sidemenu } from "../components/Sidemenu"
import { Video } from "../components/Video"
import { Overlay } from "../components/Overlay"
import { Buttoncontainer } from "../components/Buttoncontainer"
import { Button } from "../components/Button"
import { Modalcontain } from "../components/Modalcontain"
import { Branches } from "../components/Branches"
import { Govtmodal } from "../components/Govtmodal"
import { Partiesmodal } from "../components/Partiesmodal"
import videoBg from "../assests/timelapse.mov"
import "../components/button.css"

export const Politics = () => {
  return (
    <main>
        {/* Navagation Button */}
        < Navbar />
        {/* Navagation Menu */}
        < Sidemenu />
        <Buttoncontainer>
            <Button topic="govt" target="#govt">
                <h1>Government & Politics</h1>
            </Button>
            <Branches />
            <Button topic="parties" target="#parties">
                <h1>Political Parties</h1>
            </Button>
        </Buttoncontainer>

        {/* Pop Up Modals */}
        <Modalcontain id="govt"> 
          <Govtmodal  />
        </Modalcontain>
        <Modalcontain id="parties"> 
          <Partiesmodal  />
        </Modalcontain>
        {/* Pop Up Modals */}

        < Video>
        <video src={videoBg} autoPlay loop muted />
        </Video>
        < Overlay />
    </main>
  )
}
