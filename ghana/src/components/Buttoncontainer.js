import { Button } from "./Button"
import "./button.css"

export const Buttoncontainer = () => {
    const container = {
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignItems:"center",
         position: "absolute",
         height: "100vh",
         width: "100vw",
        // alignItems: "center",
       
        // top: "25%",
        // left: "42%",
        // transform: "translate(-40%, -40%)",
        flexDirection: "row",
        zIndex: "2",
        // marginTop: "12.5em"
    }
  return (
    <div style={container}>
        <Button topic="early-history">
            <h1>Early History</h1>
        </Button>
        <Button topic="independence">
            <h1>Independence</h1>
        </Button>
        <Button topic="present">
            <h1>Present</h1>
        </Button>
    </div>
  )
}
