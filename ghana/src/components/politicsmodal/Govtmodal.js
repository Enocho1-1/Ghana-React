import { Modal } from "../Modal"
import NDC from "../../assests/ndc.png"
import NPP from "../../assests/npp.png"

export const Govtmodal = () => {
  return (
    <Modal>
        {/* Government & Politics Section */}
        <section>
            <h1 className="explore-head">Government & Politics</h1> 
            <hr />
            <div className="explore-text">
            <p>Ghana is a unitary presidential constitutional democracy with a parliamentary multi-party system that is dominated by two parties <a href="#" className="inner-link"> the National Democratic Congress (NDC)</a><img src={NDC} className="hide"/> and <a href="#" className="inner-link">the New Patriotic Party (NPP)</a><img src={ NPP } className="hide"/>.</p>
            <br />
            <br />
            <p>Ghana vacillated between civilian and military governments until January 1993, when the military government gave way to the Fourth Republic of Ghana after presidential and parliamentary elections in late 1992. The 1992 constitution of Ghana divides powers among a Commander-in-Chief of the Ghana Armed Forces (President of Ghana), parliament (Parliament of Ghana), cabinet (Cabinet of Ghana), the council of state (Ghanaian Council of State), and an independent judiciary (Judiciary of Ghana). The Government of Ghana is elected by universal suffrage after every four years.</p>
            </div>
        </section>
    </Modal>
  )
}
