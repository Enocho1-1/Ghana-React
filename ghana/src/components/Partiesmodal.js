import { Modal } from "./Modal"
import Parties from "../assests/ndc-npp.jpg" 
import NDC from "../assests/ndc.png"
import NPP from "../assests/npp.png"
import Rawlings from "../assests/Jerry_Rawlings(cropped).jpg"
import Ignatius from "../assests/Ignatius.jpg"
import Kufor from "../assests/kufuor.jpg"

export const Partiesmodal = () => {
  return (
    <Modal>
        {/* Political Parties Section */}
        <section>
            <h1 className="explore-head">Political Parties</h1> 
            <hr />
            <div className="explore-text">
            <img src={Parties} alt="political parties" style={{float:"left"}} title="political parties"/>
            <p>Ghana has been dominated by two parties the National Democratic Congress (NDC) and the New Patriotic Party (NPP). Although, there have been other parties that emerged in the past these parties lacked the advocacy of the Ghanaian people and eventually became obsolete.</p>
            </div>
        </section>
        {/* National Democratic Congress Section */}
        <section>
            <h1 className="explore-head">National Democratic Congress</h1> 
            <hr />
            <div className="explore-text">
            <img src={NDC} alt="NDC" style={{float:"right"}} title="NDC"/>
            <p>The National Democratic Congress (NDC) is a social democratic political party in Ghana, founded by <a href="#" class="inner-link">Jerry Rawlings</a><img src={Rawlings}class="hide"/>, who served as Head of State of Ghana from 1981 to 1993 and the President of Ghana from 1993 to 2001. Following the formation of the Provisional National Defence Council (PNDC), which ruled Ghana following the military coup d'état of <a href="#" class="inner-link">Ignatius Kutu Acheampong's</a><img src={Ignatius} class="hide"/> government on 31 December 1981. Consequently, there was pressure from the international community to restore democracy. The NDC was conceived as the ruling party ahead of elections in 1992, in which Rawlings was elected president, and in 1996 Rawlings was re-elected as the NDC candidate. Rawlings' second term ended in 2001.</p>
            </div>
        </section>
         {/* New Patriotic Party Section */}
         <section>
            <h1 className="explore-head">New Patriotic Party</h1> 
            <hr />
            <div className="explore-text">
            <img src={NPP} alt="NPP" style={{float:"left"}} title="NPP"/>
            <p>The New Patriotic Party (NPP) is a center-right and liberal-conservative political party in Ghana. Since the democratization of Ghana in 1992, it has been one of the two dominant parties in Ghanaian politics, with its primary rival being the National Democratic Congress (NDC). <a href="#" class="inner-link">John Kufuor</a><img src={Kufor} class="hide"/> of the NPP was President of Ghana from 2001 to 2009 following the Rawlings Administration (NDC). In Ghana presidential terms last for 4 years with a maximum of two terms that can be served, thus Kufor was re-elected on 7 December 2004, and the NPP won 129 out of 230 seats.</p>
            </div>
        </section>
    </Modal>
  )
}
