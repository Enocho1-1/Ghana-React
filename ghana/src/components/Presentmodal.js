import { Modal } from "./Modal"
import Asante from "../assests/asante chief.webp"
import Religion from "../assests/religion.webp"
import Fishing from "../assests/fishing.jpg"
import Coco from "../assests/coco.jpg"
import Timber from "../assests/timber.jpg"
import "./landmarks.css"

export const Presentmodal = () => {
  return (
    <>
        <Modal>
            {/* Ethnic and linguistic Section */}
            <section>
                <h1 className="explore-head">Ethnic and linguistic groups</h1> 
                <hr />
                <div className="explore-text">
                    <img src={Asante} alt="Asante Cheif" style={{float:"left"}} title="Asante Cheif"/>
                    <p>Ethnically, the people of Ghana may be said to belong to one broad group within the African family, but there is a large variety of subgroups. On the basis of language, it is possible to distinguish at least 75 of these. Many of these are very small, and only 10 of them are numerically significant. The largest of these groups are the Akan(which includes the Anyi, Asante [Ashanti], Baule, Fante, and Guang), Mole-Dagbani (see Dagomba), Ewe, Ga-Adangme (see Ga and Adangme), and Gurma. Despite the variety, there were no serious ethnic dissensions when Ghana became independent. Ethnic consciousness persists in many areas, however, and at times tensions have erupted—especially in northern Ghana—into violent clashes with many fatalities. At all levels in government and in public life, an effort has been made to play down ethnic differences, a policy that has been helped by the adoption of English as the official language.</p>
                </div>
            </section>
             {/* Religion Section */}
             <section>
                <h1 className="explore-head">Religion</h1> 
                <hr />
                <div className="explore-text">
                    <img src={Religion} alt="Ghana Religion Pie Chart" style={{float:"right"}} title="Ghana Religion Pie Chart"/>
                    <p>More than one-half of the population is Christian, about one-fifth is Muslim, and a small segment adheres to the traditional indigenous religions. Indigenous religions, while widespread and deep-rooted, lack a systematic body of doctrines. Though they are based, in general, on belief in the existence of a supreme being, a number of lesser deities associated with various natural phenomena are recognized. Considerable prominence is given to dead ancestors, who are considered to be ever-present, capable of influencing the course of events for the living and capable of serving as intermediaries between the living and the gods.</p>
                </div>
            </section>
             {/* Settlement Patterns Section */}
             <section>
                <h1 className="explore-head">Settlement Patterns</h1> 
                <hr />
                <div className="explore-text">
                    <p>Ghana has three major geographic regions—coastal, forest, and northern savanna—the boundaries of which are not always clearly defined.</p>
                    <br />
                    <br />
                    <img src={Fishing} alt="Fishing in Ghana" style={{float:"right"}} title="Fishing in Ghana"/>
                    <p>By far the smallest of the regions, the coastal zone is traditionally a region of fishermen and small-scale farmers. This region was formerly occupied by a series of small kingdoms, the inhabitants of which were the first people from what would become Ghana to be exposed to European contact—from the 15th century onward, perhaps even earlier. From east to west the principal ethnic groups are the Ewe, Adangme (Adangbe), Ga, Efutu, Fante, Ahanta, and Nzima. The seaboard has made the region an important hub of commerce, resulting in the growth of such urban centres as Accra, Cape Coast, and Sekondi-Takoradi. The coastal zone has more urban centres than any other region in Ghana.</p>
                    <br />
                    <br />
                    <img src={Coco} alt="Coco Beans" style={{float:"left"}} title="Coco Beans"/>
                    <p>Farther inland, occupying about one-third of the country, is the forest region with its relatively large and prosperous traditional states and rich agricultural lands. West of the Volta these states consist mostly of Akan peoples; to the east the Ewe predominate. The forest environment and the economic activities and modes of life engendered by it, especially since the introduction of the farming of cacao source of <strong>cocoa beans</strong> in 1879, have served to give the region a common stamp. Apart from the Ewe, the major ethnic groups are the Akwapim and Kwahu in the east, the Akim in the south, the Asante and Brong in the centre and north, and the Wasaw and Sefwi in the west. While all the peoples in the region have a relatively long history of settlement and political activity, those with the most impressive record are the Asante, who from the 17th to the late 19th century built a political empire centred on Kumasi that included a large number of subject and satellite states spread throughout the forest region and in both the coastal and northern savanna zones.</p>
                    <br />
                    <br />
                    <img src={Timber } alt="Timber" style={{float:"right"}} title="Timber"/>
                    <p>Almost all the timber, cacao, and exploited mineral wealth, as well as a number of minor cash crops grown for export and a large part of the foodstuffs consumed in Ghana, come from the forest region. Population density is relatively high, especially in the cacao-growing areas. Except for Kumasi, there are few really large urban centres, although other administrative centres—Ho, Koforidua, and Sunyani—form significant population concentrations.</p>
                </div>
            </section>
        </Modal>
    </>
  )
}
