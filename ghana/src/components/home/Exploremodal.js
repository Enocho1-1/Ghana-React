
import "./landmarks.css"
import "../modal/modal.css"
import { Landmarksdisplay } from "./Landmarksdisplay"
import { Modal } from "../modal/Modal"


export const Exploremodal = () => {

  return (
    <>
      <Modal>
          <h1 className="explore-head">Welcome To Ghana</h1>
          <div className="explore-text">
            <p> Ghana (The Gold Coast) officially known as the Republic of Ghana is a country in West Africa. Spanning the Gulf of Guinea and the Atlantic Ocean to the south, sharing borders with the Ivory Coast in the west, Burkina Faso in the north, and Togo in the east. With over 31 million people, Ghana is the second-most populous country in West Africa, after Nigeria. The capital and largest city is Accra; other major cities include Kumasi, Tamale, and Sekondi-Takoradi.  </p>
          </div>
          <h1 className="explore-head">Famous Ghana Landmarks</h1>
          <div className="landmarks">
              {/* Famous Ghana Landmarks */}
              < Landmarksdisplay />
          </div>
      </Modal>
    </>
  )
}
