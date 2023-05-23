
import { Video, Overlay } from "../components/index"
import {  Button, Buttoncontainer } from "../components/index"
import { Modalcontain } from "../components/index"
import { Historymodal, Independencemodal, Presentmodal} from "../components/index"
import videoBg from "../assests/indy-arch.mp4"
import "../components/buttons/button.css"

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
          <video className="h-screen w-screen object-cover"  src={videoBg} autoPlay loop muted />
        </Video>
        < Overlay />
    </main>
  )
}
