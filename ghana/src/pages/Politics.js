import { Navbar } from "../components/Navbar"
import { Sidemenu } from "../components/Sidemenu"
import { Video } from "../components/Video"
import { Overlay } from "../components/Overlay"
import { Buttoncontainer } from "../components/Buttoncontainer"
import { Button } from "../components/Button"
import { Modalcontain } from "../components/Modalcontain"
import { Branches } from "../components/Branches"
import { Govtmodal } from "../components/Govtmodal"
import { Executivemodal } from "../components/Executivemodal"
import { Legislativemodal } from "../components/Legislativemodal"
import { Judicialmodal } from "../components/Judicialmodal"
import { Headsmodal } from "../components/Headsmodal"
import { Partiesmodal } from "../components/Partiesmodal"
import videoBg from "../assests/timelapse.mp4"
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
          <Modalcontain id="executive"> 
            <Executivemodal   />
          </Modalcontain>
          <Modalcontain id="legislative"> 
            <Legislativemodal   />
          </Modalcontain>
          <Modalcontain id="judicial"> 
            <Judicialmodal   />
          </Modalcontain>
          <Modalcontain id="heads"> 
            <Headsmodal   />
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
