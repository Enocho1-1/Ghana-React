
import { Video } from "../components/Video"
import { Overlay } from "../components/Overlay"
import { Buttoncontainer } from "../components/Buttoncontainer"
import { Button } from "../components/Button"
import { Modalcontain } from "../components/Modalcontain"
import { Historymodal, Independencemodal, Presentmodal} from "../components/index"
import videoBg from "../assests/indy-arch.mp4"
import "../components/button.css"

export const History = () => {
  return (
    <main>
        <Buttoncontainer>
            <Button topic="early-history" target="#earlyhistory">
                <h1>Early History</h1>
            </Button>
            <Button topic="independence" target="#independence">
                <h1>Independence</h1>
            </Button>
            <Button topic="present" target="#present">
                <h1>Ghana Today</h1>
            </Button>
        </Buttoncontainer>

        {/* Pop Up Modals */}
        < Modalcontain id="earlyhistory"> 
            <Historymodal />
        </Modalcontain>
        < Modalcontain id="independence"> 
            <Independencemodal />
        </Modalcontain>
        < Modalcontain id="present"> 
            <Presentmodal />
        </Modalcontain>
        {/* Pop Up Modals */}
        < Video>
          <video src={videoBg} autoPlay loop muted />
        </Video>
        < Overlay />
    </main>
  )
}
