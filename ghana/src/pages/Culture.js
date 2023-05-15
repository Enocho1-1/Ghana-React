
import { Video } from "../components/Video"
import { Overlay } from "../components/Overlay"
import { Buttoncontainer } from "../components/Buttoncontainer"
import { Button } from "../components/Button"
import { Modalcontain } from "../components/Modalcontain"
import { Culturemodal, Artmodal, Sportsmodal } from "../components/index"
import videoBg from "../assests/volta.mp4"
import "../components/button.css"

export const Culture = () => {

  return (
    <main>
        <Buttoncontainer>
            <Button topic="culture" target="#culture">
              <h1>Cultural Environment</h1>
            </Button>
            <Button topic="art" target="#art">
              <h1>Literature & Art</h1>
            </Button>
            <Button topic="sports" target="#sports">
              <h1>Sports</h1>
            </Button>
        </Buttoncontainer>

        {/* Pop Up Modals */}
        <Modalcontain id="culture"> 
          <Culturemodal />
        </Modalcontain>
        <Modalcontain id="art"> 
          <Artmodal />
        </Modalcontain>
        <Modalcontain id="sports"> 
          <Sportsmodal />
        </Modalcontain>
        {/* Pop Up Modals */}
        < Video>
        <video src={videoBg} autoPlay loop muted />
        </Video>
        < Overlay />
    </main>
  )
}
