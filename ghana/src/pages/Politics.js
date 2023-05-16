
import { Video } from "../components/Video"
import { Overlay } from "../components/Overlay"
import {  Button, Buttoncontainer } from "../components/index"
import { Modalcontain } from "../components/Modalcontain"
import { Branches, Govtmodal, Executivemodal, Legislativemodal, Judicialmodal, Headsmodal, Partiesmodal } from "../components/index"
import videoBg from "../assests/timelapse.mp4"
import "../components/buttons/button.css"

export const Politics = () => {
  return (
    <main>
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
