import "../components/button.css"
import { Modalcontain } from "../components/Modalcontain"
import { Executivemodal } from "./Executivemodal"
import { Legislativemodal } from "./Legislativemodal"
import { Judicialmodal } from "./Judicialmodal"
import { Headsmodal } from "./Headsmodal"

export const Branches = () => {
  
  return (
    <>
        <div className="branchLinkcontain">
            <a href="#executive" className="branchLink executive">
                <h1>Executive branch</h1>
            </a>
            <a href="#legislative" className="branchLink legislative">
                <h1>Legislative branch</h1>
            </a>
            <a href="#judicial" className="branchLink judicial">
                <h1>Judicial branch</h1>
            </a>
            <a href="#heads" className="branchLink heads">
                <h1>Heads of State</h1>
            </a>
        </div>

        {/* Pop Up Modals */}
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
        {/* Pop Up Modals */}
    </>
    
    
  )
}
