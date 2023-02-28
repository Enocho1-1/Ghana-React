import { Modal } from "./Modal"
import Playright from "../assests/marriage+ana.jpg"
import Efua from "../assests/efua.jpg"
import Ama from "../assests/ama.jpeg"
import Ayi from "../assests/ayi.jpg"
import Carving from "../assests/wood carving.jpg"
import Dance from "../assests/dance.jpg"
import Danceensemble from "../assests/dance-ensemble.jpg"

export const Artmodal = () => {
  return (
    <>
        <Modal>
            {/* Literature And Art Section */}
            <section>
                <h1 className="explore-head">Literature & Art</h1> 
                <hr />
                <div className="explore-text">
                    <img src={Playright} alt="Efua Sunderland playright" style={{float:"left"}} title="Efua Sunderland playright"/>
                    <p>Ghana has a rich tradition of storytelling. Large audiences still enjoy Ghanaian folktales and epics exalting past chiefs in the country. Kwaku Ananse, a spider, is a popular figure in Ghanaian folklore. There is a small body of written literary works in the country’s indigenous languages. Literature in English is, however, well developed. <a href="#" className="inner-link"> Efua Sutherland</a><img src={Efua} className="hide"/>, <a href="#" className="inner-link">Ama Ata Aiddo</a><img src={Ama}  className="hide"/>, and <a href="#" className="inner-link">Ayi Kwei Armah</a><img src={Ayi} className="hide"/> are Ghanaian writers who are internationally well-known.</p>
                    <br/>
                    <br/>
                    <img src={Carving} alt="Ghana Wood Carving" style={{float:"right"}} title="Ghana Wood Carving"/>
                    <p>Ghana also has a rich tradition of graphic art. Ghanaian craftsmen are wood carving connoisseurs. Stools representing abstract designs or animals are carved out of large logs. These stools become objects of deference after the deaths of their owners. Sculpting is another craft form of Ghana whereby iron and bronze casting techniques are used to produce ceremonial swords, gold weights, and other products. Textiles and pottery are also produced by Ghanaian artisans.</p>
                </div>
            </section>
            {/* Performance Arts Section */}
            <section>
                <h1 className="explore-head">Performance Arts</h1> 
                <hr />
                <div className="explore-text">
                    <img src={Dance} alt="Ghana Traditional Dance" style={{float:"left"}} title="Ghana Traditional Dance"/>
                    <p>Ghanaian music and dance performances were traditionally held within the confines of religious or political rites. They were also part of wedding ceremonies, initiation ceremonies, and other social situations. Today, while music and dance continue to serve these purposes, they also represent the country’s culture. Such performances are part of cultural festivals and public occasions and are also performed in front of tourists.</p> 
                    <br/>
                    <br/>
                    <img src={Danceensemble} alt="Ghana Dance Ensemble" style={{float:"right"}} title="Ghana Dance Ensemble"/>
                    <p>The Ghana Dance Ensemble of the University of Ghana is a cultural institution of global ingratiation. Today, Ghanaian youth, especially those in urban areas, also favor contemporary music and dance styles. Highlife and Hiplife are the most popular modern music and dance forms in the country. This type of music is usually played in urban nightclubs.</p>
                </div>
            </section>
        </Modal>
    </>
  )
}
