import { Navbar } from "../components/Navbar"
import { Sidemenu } from "../components/Sidemenu"
import { Video } from "../components/Video"
import { Overlay } from "../components/Overlay"
import { Buttoncontainer } from "../components/Buttoncontainer"
import { Button } from "../components/Button"
import videoBg from "../assests/volta.mov"
import "../components/button.css"

export const Culture = () => {

  return (
    <main>
        {/* Navagation Button */}
        < Navbar />
        {/* Navagation Menu */}
        < Sidemenu />
        <Buttoncontainer>
            <Button topic="culture" >
              <h1>Cultural Environment</h1>
            </Button>
            <Button topic="art">
              <h1>Literature & Art</h1>
            </Button>
            <Button topic="sports">
              <h1>Sports</h1>
            </Button>
        </Buttoncontainer>
        < Video>
        <video src={videoBg} autoPlay loop muted />
        </Video>
        < Overlay />
    </main>
  )
}
