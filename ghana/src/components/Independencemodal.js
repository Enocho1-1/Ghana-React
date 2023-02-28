import { Modal } from "./Modal"
import Bigsix from "../assests/big-six.png"
import Salute from "../assests/Ghana Salute.jpg"
import Coloniser from "../assests/colonize.jpg"
import "./landmarks.css"

export const Independencemodal = () => {
  return (
    <>
        <Modal>
             {/* Independence Section */}
             <section>
                <h1 className="explore-head">Independence Day</h1> 
                <hr />
                <div className="explore-text">
                    <img src={Bigsix } alt="The Big Six" style={{float:"left"}} title="The Big Six"/>
                    <p>The Independence Day of Ghana is a national holiday celebrated yearly. This day is an official state holiday for the citizens of Ghana both within and in the diaspora to honour and celebrate the Heroes of Ghana who led the country to attain its independence. The Independence Day is celebrated on March 6 every year. Independence Day is also remembrance of the day that marks the declaration of Ghanaian independence from British colonial rule. The first Prime Minister of Ghana; Kwame Nkrumah became the Head of Government from 1957 to 1960. On March 6, 1957, Kwame Nkrumah declared to the people of Ghana about their freedom, he added that, "the African People are capable of managing their own affairs and Ghana our beloved country is free forever."</p>
                </div>
            </section>
             {/* Pioneers Section */}
            <section>
                <h1 className="explore-head">Pioneers</h1> 
                <hr />
                <div className="explore-text">
                    <img src={Salute} alt="International Recognition" style={{float:"right"}} title="International Recognition"/>
                    <p>Ghana was the first country in sub-Saharan Africa to achieve its independence from European colonial rule. Many Ghanaians who have had the chance to lead the country as Presidents have commemorated the occasion of Ghana Independence Day and have declared the day a public holiday for a celebration. Granting the day as a national holiday is well recognized such that, if 6 March of a year fell on a weekend of the Independence Day celebration,the working day that follows which is a Monday will be granted and observed as a holiday by the whole nation.Many Presidents from other African countries and Europe have been invited to Ghana to join in the celebration either as Guest Speakers or Invited Guests since the reign of former President Kwame Nkrumah till now.</p>
                </div>
            </section>
             {/* Colonialism Section */}
             <section>
                <h1 className="explore-head">Colonialism </h1> 
                <hr />
                <div className="explore-text">
                    <img src={Coloniser} alt="Colonialism" style={{float:"left"}} title="Colonialism"/>
                    <p>Ghana formerly known as the Gold Coast had many natural resources categorized into two as minerals and forest resources.The mineral resources are gold and ivory, bauxite, diamond, and manganese, which enticed the Europeans.There are also food and cash crops.Many controversies arose among the European countries as to who should take charge of the Gold Coast due to its rich natural resources.</p>
                        <br/>
                        <br/>
                    <p>In 1874, the British took control over parts of Gold coast although the Portuguese were the first to settle at Elmina in the Gold Coast in 1482.After the British control, Gold Coast was named the British Gold Coast.After the World War II, the British reduced its control over its colonies in Africa including the Gold Coast.The United Gold Coast convention (UGCC) pioneered the call for independence within the shortest possible time after the Gold Coast legislative election in 1947.Osagyefo Dr. Kwame Nkrumah was elected the leader of the Gold Coast government in 1952 after he won the Gold Coast legislative election in 1951.Led by the big six, the Gold Coast declared its independence from the British on 6 March 1957.The Gold Coast was named Ghana.</p>
                </div>
            </section>
        </Modal>
    </>
  )
}
