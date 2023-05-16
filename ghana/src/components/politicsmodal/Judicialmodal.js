import { Modal } from "../modal/Modal"
import Supremecourt from "../../assests/supreme.jpg"
import Judges from "../../assests/supreme-court-judges-in-parliament.jpg"
import Wood from "../../assests/CJ Georgina Wood.jpg"
export const Judicialmodal = () => {
  return (
    <Modal>
        {/*Judicial Section */}
        <section>
            <h1 className="explore-head"> Judicial Branch </h1> 
            <hr />
            <div className="explore-text">
                <img src={Supremecourt} alt="Ghana Supreme Court Building" style={{float:"left"}} title="Ghana Supreme Court Buildingt"/>
                <p>The structure and the power of the judicial branch is independent of the two other branches of government. The Judiciary of Ghana is responsible for interpreting, applying, and enforcing the laws of Ghana, and exists to settle legal conflicts fairly and in a more adequate way. The Supreme Court of Ghana has broad powers of judicial review. It is authorized by the Constitution to rule on the constitutionality of any legislation or executive action at the request of any aggrieved citizen.</p> <p>The structure and the power of the judicial branch is independent of the two other branches of government. The Judiciary of Ghana is responsible for interpreting, applying, and enforcing the laws of Ghana, and exists to settle legal conflicts fairly and in a more adequate way. The Supreme Court of Ghana has broad powers of judicial review. It is authorized by the Constitution to rule on the constitutionality of any legislation or executive action at the request of any aggrieved citizen.</p>
                <br />
                <br />
                <img src={Judges } alt="Supreme Court Judges" style={{float:"right"}} title="Supreme Court Judges"/>
                <p>The hierarchy of courts derives largely from British juridical forms. The courts have jurisdiction over all civil and criminal matters. They include the Superior Courts of Judicature, established under the 1992 Constitution, and the Inferior Courts, established by Parliament. The Superior Courts are, from highest to lowest, the Supreme Court of Ghana, the Court of Appeal, the High Court of Justice, and the ten Regional Tribunals. The Inferior Courts, since the Courts Act 2002, include the Circuit Courts, the Magistrate Courts, and special courts such as the Juvenile Courts. In 2007, <a href="#" className="inner-link">Georgina Wood</a><img src={Wood} className="hide"/> became the first ever female chief justice of the Ghanaian Supreme Court.</p>
            </div>
        </section>
    </Modal>
  )
}
