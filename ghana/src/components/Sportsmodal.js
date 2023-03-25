import { useState } from "react"
import { Modal } from "./Modal"
import { Scrollerx } from "./Scrollerx"
import Nelson from "../assests/AZ.jpg"
import Kuffour from "../assests/kuffour.jpg"
import Vida from "../assests/anim.jpg"
import Gyan from "../assests/gyan.jpg"


export const Sportsmodal = () => {
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
              <h1 className="explore-head">Top Ghanian Athletes</h1> 
              <hr />
              <div className="explore-text">
                <img src={Nelson} alt="Azumah Nelson" style={{float:"left"}} title="Azumah Nelson"/>
                <p>Azumah Nelson (born 19 July 1958) is a Ghanaian former professional boxer. Widely considered the greatest African boxer of all time, and is currently the 31st greatest pound for pound boxer of all time in Boxrec's ranking, he held the WBC featherweight title once and the WBC super featherweight title twice.</p>
              </div>
              <br />
              <div className="explore-text">
                <img src={Kuffour} alt="Samuel Kuffor" style={{float:"right"}} title="Samuel Kuffor"/>
                <p>Samuel Osei Kuffour (born 3 September 1976) is a Ghanaian retired professional footballer who played as a defender. Known for his great physical power, he is best remembered for his time with Bayern Munich, whom he represented for over a decade, winning a total of 14 honours, and playing in nearly 250 official matches. Kuffour appeared with the Ghanaian national team in the 2006 World Cup, as well as in four Africa Cup of Nations.</p>
              </div>
              <br />
              <div className="explore-text">
                <img src={Vida} alt="Vida Anim" style={{float:"left"}} title="Vida Anim"/>
                <p>Vida Anim (born 7 December 1983 in Accra, Greater Accra) is a Ghanaian sprinter who specializes in the 100 and 200 metres. Together with Mavis Akoto, Monica Twum and Vida Nsiah she holds the Ghanaian record in 4 x 100 metres relay with 43.19 seconds, achieved during the heats at the 2000 Summer Olympics in Sydney.Vida Anim represented Ghana at the 2008 Summer Olympics in Beijing competing at the 100 metres sprint. In her first round heat she placed second behind Shelly-Ann Fraser in a time of 11.47 to advance to the second round. There she improved her time to 11.32 seconds, finishing third behind Debbie Ferguson and Oludamola Osayomi. In the semi finals she was unable to qualify for the final as her time of 11.51 was only the eighth and last time of her heat, causing elimination.</p>
              </div>
              <div className="explore-text">
                <img src={Gyan} alt="Asamoah Gyan " style={{float:"right"}} title="Asamoah Gyan "/>
                <p>Asamoah Gyan ( born 22 November 1985) is a Ghanaian professional footballer who last played as a striker for Kayserispor and is the former captain of the Ghanaian national team. He is currently a free agent.Gyan began his career in 2003 with Ghanaian Premier League club Liberty Professionals scoring ten goals in sixteen matches then spent three seasons with Serie A club Udinese via two seasons loan at Modena netting on fifteen occasions in 53 league matches and at Udinese where he scored 11 times in 39 league matches. In 2008, Gyan joined Ligue 1 club Rennes, netting fourteen times in forty-eight league matches during two seasons. In 2010, Gyan joined Premier League club Sunderland, breaking the club's transfer record and netting on ten occasions in thirty-four Premier League matches during two seasons.In 2011, Gyan joined Al Ain of the UAE Pro-League on loan and became the league's top-goalscorer, scoring 24 times in 27 matches. In the following season, Gyan permanently joined Al Ain and once again became the league's top-goalscorer while he helped Al Ain retain the UAE Pro-League title, scoring an impressive 28 goals in 32 matches. In the 2013–14 season, Gyan scored on 44 occasions in 40 matches with Al Ain.Gyan is the all-time leading goalscorer of the Ghana national team, with 51 goals. He represented Ghana at the 2006, 2010 and 2014 FIFA World Cups. With 6 goals, he is the top African goalscorer in the history of the World Cup. Gyan has also represented Ghana at the 2004 Summer Olympics and in seven Africa Cup of Nations in 2006, 2008, 2010, 2012, 2013, 2015 and 2017, helping them finish in third-place in 2008 and runner-up in 2010 and 2015.</p>
              </div>
          </section>
        </Modal>
    </>
  )
}

