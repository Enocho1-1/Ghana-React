

import { Introtext,  Exploremodal} from "../components/index"
import { Video, Overlay } from "../components/index"
import { Modalcontain } from "../components/index"
import videoBg from "../assests/ghana-133663.mp4"

export const Home = () => {
  return (
    <main>
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
