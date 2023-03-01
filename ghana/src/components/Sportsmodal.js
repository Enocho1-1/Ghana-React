import { useState } from "react"
import { Modal } from "./Modal"
import { Scrollerx } from "./Scrollerx"



export const Sportsmodal = () => {
  const top_athletes = [
    {number:"1", name:"Abedi Pele", sport:"football", birthplace:"Kyebi, Ghana",image:"https://media.cnn.com/api/v1/images/stellar/prod/130604144727-abedi-peli-ghana-national-team.jpg?q=w_1458,h_1941,x_0,y_0,c_fill/w_1280"},
    {number:"2", name:"Michael Essien", sport:"football", birthplace:"Accra, Ghana",image:"http://4.bp.blogspot.com/-FPy9m4vICtI/TmCc5yy00yI/AAAAAAAAAKc/RRXbTVZUp_g/s1600/Michael%252BEssien.jpg"},
    {number:"3", name:"Azumah Nelson", sport:"Boxing", birthplace:"Accra, Ghana",image:"http://127.0.0.1:5501/Ghana/imgs/Azumah-Nelson-ring-cropped.jpg"}]
  const [athletes, setAthletes] = useState(top_athletes)
  console.log(athletes)
  return (
    <>
        <Modal>
          {/* Sports Section */}
          <section>
              <h1 className="explore-head">Sports</h1> 
              <hr />
              <div className="explore-text">
              <p>Association football is Ghana’s most popular sport. The country’s national football team known as the Black Stars have taken part in many international football tournaments like the FIFA World Cup and African Cup of Nations. Football is also played informally throughout the nation. Other popular sporting events in Ghana include tennis, basketball, rugby, hockey, golf, etc.</p>
              </div>
          </section>
          {/* Sports Section */}
          <section>
            <h1 className="explore-head">Top Athletes From Ghana</h1> 
            <hr />
            <Scrollerx  list={athletes}/>
          </section>
        </Modal>
    </>
  )
}

