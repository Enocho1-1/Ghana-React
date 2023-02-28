import { Modal } from "./Modal"
import Ancientmap from "../assests/ancient_ghana_map.jpg"
import Goldenstool from "../assests/golden_stool.jpg"
import King from "../assests/King.jpg"
import Trade from "../assests/traderoutes.png"
import "./landmarks.css"

export const Historymodal = () => {
  return (
    <>
        <Modal>
            {/* Early History Section */}
            <section>
                <h1 className="explore-head">Early History</h1> 
                <hr />
                <div className="explore-text">
                    <img src={Ancientmap} alt="Ancient Ghana Map" style={{float:"left"}} title="Ancient Ghana Map"/>
                    <p>Between the 9th and 11th centuries C.E., the kingdom of Ghana was so rich that its dogs wore golden collars, and its horses, which were adorned with silken rope halters, slept on plush carpets. Based on animal luxuries alone, it is no wonder that foreigners touted Ghana's kings as the richest men in the world. Certainly they were living the high life ... but how did they do it? Located within the present-day borders of Mauritania, Mali, and Senegal, medieval Ghana literally sat on a gold mine. The land's abundance of resources allowed Ghana's rulers to engage in years of prosperous trading. Strategic governing coupled with great location led to the rapid emergence of a very wealthy empire.</p>
                </div>
            </section>
            {/* Gold in Wagadugu Section */}
            <section>
                <h1 className="explore-head">Gold in Wagadugu</h1> 
                <hr />
                <div className="explore-text">
                    <img src={Goldenstool} alt="Golden Stool" style={{float:"right"}} title="Golden Stool"/>
                    <p>Most of what we know about ancient Ghana (which is more accurately called Wagadugu) is based on writings of Arab travelers who came in contact with the nation's peoples. "Ghana" was actually the title given to Wagadugu kings and was used by the Islamic "reporters" to describe the rich and mysterious place they observed. Evidence of Ghana's occupation dates back to the 4th century, but it was several hundred years later that it became established as a nation by a tribe known as the Soninke, whose leaders have been credited with the early strengthening of the Wagadugu state and the expansion of its territories. By 1000 B.C.E., the nation had undergone strategic expansion and taken control of a large pocket of land between the upper Niger and Senegal Rivers. The region was rich in gold, and its acquisition meant that Ghana would become a leading force in the trans-Saharan trade network.</p>
                </div>
            </section>
            {/* Early Ghanian Politics Section */}
            <section>
                <h1 className="explore-head">Early Ghanian Politics</h1> 
                <hr />
                <div className="explore-text">
                    <img src={King} alt="King Kanaissa ai" style={{float:"left"}} title="King Kanaissa ai"/>
                    <p>The leader of all leaders was the king, who was also known as the ghana, or war chief. His word was law. He served as the commander in chief of a highly organized army, the controller of all trade activities, and the head administrator of justice. Mayors, civil servants, counselors, and ministers were appointed by the king to assist with administrative duties — but at all times, the king was in charge. Each day, the king assembled his court and allowed people to publicly voice their complaints. Beating drums that resounded throughout the area signaled the courts assemblage and people gathered to speak their minds. Whether they were neighborly conflicts, or cases of violated rights, the king listened to the complaints and gave his judgment.</p>
                </div>
            </section>
             {/* Trans-Saharan Trade Section */}
            <section>
                <h1 className="explore-head">Trans-Saharan Trade</h1> 
                    <hr />
                <div className="explore-text">
                    <img src={Trade} alt="Ghana Trade Routes" style={{float:"right"}} title="Ghana Trade Routes" />
                    <p>When the king was not busy enforcing his power among the people, he was spreading it internationally through trade. At its peak, Ghana was chiefly bartering gold, ivory, and slaves for salt from Arabs and horses, cloth, swords, and books from North Africans and Europeans. As salt was worth its weight in gold, and gold was so abundant in the kingdom, Ghana achieved much of its wealth through trade with the Arabs. Islamic merchants traveled over two months through the desert to reach Ghana and "do business." They were taxed for both what they brought in and what they took out. With this system, it is no wonder that Ghana got rich quickly.</p>
                    <br />
                    <br />
                    <p>The wealth that the kingdom acquired did not, however, serve in its favor forever. Competition from other states in the gold trade eventually took its toll. Jealousy, fear, and anger of Ghana's power prompted its neighbors to stand up against the kingdom. Their efforts were at first weak and insignificant, but eventually, in the mid-11th century, a Muslim group known as the Almoravids launched a devastating invasion on the capital city of Koumbi Saleh. Though territories were seized, and a tribute tax was enforced, Ghana recovered and forced the invaders to withdraw. A little less than 200 years later, however, Ghana was not so lucky. Weakened by subsequent attacks, and cut-off from international trade, the kingdom was vulnerable and unable to prevent defeat. In 1240 C.E., Ghana was absorbed into the growing nation of Mali, which would soon become the next great empire.</p>
                      
                </div>
            </section>
        </Modal>
    </>
  )
}
