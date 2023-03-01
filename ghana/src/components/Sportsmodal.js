import { useState } from "react"
import { Modal } from "./Modal"
import { Scrollerx } from "./Scrollerx"



export const Sportsmodal = () => {
  const top_athletes = [
    {number:"1", name:"Abedi Pele", sport:"Football (soccer)", birthplace:"Kyebi, Ghana",image:"https://media.cnn.com/api/v1/images/stellar/prod/130604144727-abedi-peli-ghana-national-team.jpg?q=w_1458,h_1941,x_0,y_0,c_fill/w_1280"},
    {number:"2", name:"Michael Essien", sport:"Football (soccer)", birthplace:"Accra, Ghana",image:"http://4.bp.blogspot.com/-FPy9m4vICtI/TmCc5yy00yI/AAAAAAAAAKc/RRXbTVZUp_g/s1600/Michael%252BEssien.jpg"},
    {number:"3", name:"Azumah Nelson", sport:"Boxing", birthplace:"Accra, Ghana",image:"http://127.0.0.1:5501/Ghana/imgs/Azumah-Nelson-ring-cropped.jpg"},
    {number:"4", name:"Janet Amponsah", sport:"Track/Field", birthplace:"Kumasi, Ghana",image:"https://cdn.ghanaweb.com/imagelib/pics/249/24977064.jpg"},
    {number:"5", name:"Isaac Dogboe", sport:"Boxing", birthplace:"Accra, Ghana",image:"https://pbs.twimg.com/profile_images/1604920110342438926/QsLUWLYe_400x400.jpg"},
    {number:"6", name:"Asamoah Gyan", sport:"Football (soccer)", birthplace:"Accra, Ghana",image:"https://upload.wikimedia.org/wikipedia/commons/7/71/Asamoah_Gyan_%282014%29.jpg"},
    {number:"7", name:"Nadia Eke ", sport:"Track/Field", birthplace:"Accra, Ghana",image:"https://cdn.ghanaweb.com/imagelib/pics/626/62685604.jpg"},
    {number:"8", name:"Joseph Amoah", sport:"Track/Field", birthplace:"Accra, Ghana",image:"https://pbs.twimg.com/profile_images/1629194468405420032/ODTm5hon_400x400.jpg"},
    {number:"9", name:"Mohammed Kudus", sport:"Football (soccer)", birthplace:"Nima, Ghana",image:"https://www.ghanaiantimes.com.gh/wp-content/uploads/2022/11/Kudus-Mohammed-2.jpg"},
    {number:"10", name:"Margaret Simpson", sport:"Track/Field", birthplace:"Krapa, Ghana",image:"https://api.athleticspodium.com/media/athletes/26621/d6242d6a-79d2-4b14-bda6-f0e66fb3601b.jpeg"}
  ]
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
              <p>Association football is Ghana’s most popular sport. The country’s national football team known as the Black Stars have taken part in many international football tournaments like the FIFA World Cup and African Cup of Nations. Football is also played informally throughout the nation. Other popular sporting events in Ghana include track & field, basketball, rugby, hockey, golf, etc.</p>
              </div>
          </section>
          {/* Sports Section */}
          <section>
            <h1 className="explore-head">Athletes From Ghana</h1> 
            <hr />
            <Scrollerx  list={athletes}/>
          </section>
        </Modal>
    </>
  )
}

