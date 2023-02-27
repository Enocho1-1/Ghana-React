import { Navbar } from "../components/Navbar"
import { Sidemenu } from "../components/Sidemenu"
import { Video } from "../components/Video"
import { Overlay } from "../components/Overlay"
import { Buttoncontainer } from "../components/Buttoncontainer"
import { Button } from "../components/Button"
import { Branches } from "../components/Branches"
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
            <Button topic="govt">
                <h1>Government & Politics</h1>
            </Button>
            <Branches />
            <Button topic="parties">
                <h1>Political Parties</h1>
            </Button>
        </Buttoncontainer>
        < Video>
        <video src={videoBg} autoPlay loop muted />
        </Video>
        < Overlay />
    </main>
  )
}
