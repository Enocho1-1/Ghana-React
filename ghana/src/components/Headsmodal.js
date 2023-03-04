import { useState } from "react"
import { Modal } from "./Modal"

export const Headsmodal = () => {
  const monarch_branch = [
    {
        No: '1',
        name:'Queen Elizabeth II',
        potrait:'http://127.0.0.1:5501/Ghana/imgs/Queen_Elizabeth_II_1959_(cropped).jpg',
        reign:'6 March 1957 - 1 July 1960',
        length:'3 years, 117 days',
        royal: 'Windsor',
        image: 'http://127.0.0.1:5501/Ghana/imgs/Badge_of_the_House_of_Windsor.svg%20-%20Copy.png',
        description:'Queen Elizabeth II reigned over Ghana from 1957 to 1960 while simultaneously ruling the United Kingdom and the other Commonwealth realms.',
        pm:'Nkrumah'
    }
]
  const [monarch, setMonarch] = useState(monarch_branch)
  return (
    <Modal>
       {/*  List of Heads of State Section */}
       <section>
            <h1 className="explore-head"> List of Heads of State</h1> 
            <hr />
            <div className="explore-text">
             <p>This is a list of the heads of state of Ghana, from the independence of Ghana in 1957 to the present day. From 1957 to 1960 the head of state under the Constitution of 1957 was the queen of Ghana, Elizabeth II, who was simultaneously queen of the United Kingdom and the other Commonwealth realms. The monarch was represented in Ghana by a governor-general. Ghana became a republic within the Commonwealth under the Constitution of 1960 and the monarch and governor-general were replaced by an executive president. </p>
            </div>
            {/* Monarchy */}
            <h2 className="explore-head">Monarch (1957–1960)</h2>
            <table>
              <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Portrait</th>
                  <th>Reign</th>
                  <th>Royal House</th>
                  <th>Prime Minister</th>
              </tr>
              {monarch.map(item => (
                <tr>
                  <td>{item.No}</td>
                  <td>{item.name}</td>
                  <td><img src={item.potrait} alt="Queen Elizabeth II" /></td>
                  <td>
                    {item.reign}
                    <br />
                    {item.length}
                  </td>
                  <td><a className="inner-link">{item.royal}</a><img src={item.image} className="hide"/></td>
                  <td>{item.pm}</td>
                </tr>
              ))}
          </table>
          <h2 className="explore-head">Governor General</h2>
        </section>
    </Modal>
  )
}
