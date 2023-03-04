import { Modal } from "./Modal"
import Parliament from "../assests/parliament.jpg"
import Emblem from "../assests/Ghana_Parliament_Emblem.png"

export const Legislativemodal = () => {
  return (
    <Modal>
      {/* Colonialism Section */}
      <section>
            <h1 className="explore-head"> Legislative Branch </h1> 
            <hr />
            <div className="explore-text">
                <img src={Parliament} alt="Ghana Parliament" style={{float:"left"}} title="Ghana Parliament"/>
                <p>Legislative functions reside in the <a href="#" className="inner-link">Parliament</a><img src={Emblem} className="hide"/>, which is comprised of a unicameral 275-member body plus the Speaker. In order for laws to be enacted, legislation must have the approval of the president. Additionally, the president has qualified veto over all bills except those to which a vote of urgency is attached. Members are elected for a four-year term in single-seat constituencies by simple plurality vote. This voting system epitomizes Duverger's law, which asserts that single-ballot majoritarian elections with single-member districts are inclined to favor a two-party system.</p>
                <br />
                <br />
                <p>Consequently, with this voting system in place, it has confined Ghanaian politics into a two-party system, which means that there are two dominant political parties, which makes it extremely daunting for anybody to achieve electoral success under the banner of any other party. Elections have been held every four years since 1992. Presidential and parliamentary elections are held alongside each other, generally on 7 December.</p>
            </div>
        </section>
    </Modal>
  )
}
