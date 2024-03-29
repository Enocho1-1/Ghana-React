import { Modal } from "../modal/Modal"
import NPP from "../../assests/npp.png"
import Addo from "../../assests/addo (1).jpg"
import Bawumia from "../../assests/addo (2).jpg"
import"../tables/table.css"

export const Executivemodal = () => {
  const executive_branch = [
    {
        no:'1',
        office:'President',
        name: 'Nana Akufo-Addo',
        party:'New Patriotic Party',
        term:'7 January 2017',
        image: Addo,
        party_image: NPP
    },
    {
        no:'2',
        office:'Vice President',
        name: 'Mahamudu Bawumia',
        party:'New Patriotic Party',
        term:'7 January 2017',
        image:Bawumia,
        party_image: NPP
    }
]

  return (
    <Modal>
        {/* Executive Section */}
        <section>
            <h1 className="explore-head"> Executive Branch </h1> 
            <hr />
            <div className="tableScroller">
              <table>
                <thead>
                  <tr>
                      <th>Office</th>
                      <th>Name</th>
                      <th>Portrait</th>
                      <th>Party</th>
                      <th>Term</th>
                    </tr>
                </thead>
                
                <tbody>
                  {executive_branch.map( item => (
                      <tr key={item.no}>
                        <td>{item.office}</td>
                        <td>{item.name}</td>
                        <td><img src={item.image} alt="" /></td>
                        <td><img src={item.party_image} title={item.party}/></td>
                        <td>{item.term}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          
            <div className="explore-text">
              <p> Nana Akufo-Addo holds the office of Presidency, in tandem with his Council of State. The president is the head of state, head of government, and commander in chief of the armed forces. He also selects the vice president. According to the Constitution, more than half of the presidentially appointed ministers of state must be selected from among members of Parliament.</p>
            </div>
        </section>
    </Modal>
  )
}
