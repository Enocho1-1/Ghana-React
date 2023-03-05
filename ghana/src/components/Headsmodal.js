
import { Modal } from "./Modal"
import { Governortable } from "./Governortable"

export const Headsmodal = () => {

  const style = {
    fontSize: "1.563rem",
    width:"fit-content",
    margin:"5px",
    padding:"10px"
  }
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
const governor_general = [
  {
      No:'1',
      name:'Sir Charles Arden-Clarke',
      potrait:'http://127.0.0.1:5501/Ghana/imgs/The_National_Archives_UK_-_CO_1069-43-9_-_crop.jpg',
      term:'6 March 1957 - 14 May 1957',
      length:'69 days',
      royal:'Queen Elizabeth II',
      description:'Sir Charles Arden-Clarke was a British Colonial Adminstrator, furthermore he was a representative of the monarchy in Ghana.',
      pm:'Nkrumah'
  },
  {
      No:'2',
      name:'Kobina Arku Korsah',
      potrait:'http://127.0.0.1:5501/Ghana/imgs/Korsah.jpg',
      term:'14 May 1957 - 13 November 1957',
      length:'183 days',
      royal:'Queen Elizabeth II',
      description:'Kobina Arku Korsah was the first chief of justice of Ghana in 1956.',
      pm:'Nkrumah'
  },
  {
      No:'3',
      name:'The Rt. Hon. The Earl of Listowel',
      potrait:'http://127.0.0.1:5501/Ghana/imgs/Earl_of_Listowel_1962.jpg',
      term:'13 November 1957 - 1 July 1960',
      length:'2 years, 231 days',
      royal:'Queen Elizabeth II',
      description:'William Francis Hare, 5th Earl of Listowel ,was an Anglo-Irish peer and Labour politician. He was the last Secretary of State for India as well as the last Governor-General of Ghana.',
      pm:'Nkrumah'
  }
]
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
              {monarch_branch .map(item => (
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
          <div style={style}>
            <p>The governor-general was the representative of the monarchy in Ghana and exercised most of the powers of the monarch. The governor-general was appointed for an indefinite term, serving at the pleasure of the monarch.  </p>  
          </div>
          <Governortable list={governor_general}/>
        </section>
    </Modal>
  )
}
