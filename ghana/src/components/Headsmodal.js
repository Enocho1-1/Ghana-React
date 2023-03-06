
import { Modal } from "./Modal"
import { Governortable } from "./Governortable"
import { Table } from "./Table"
import Queen from "../assests/queen.jpg"
import Windsor from "../assests/windsor.png"
import CPP from "../assests/CPP.jpg"
import Nkrumah from "../assests/kn.jpg"
import ArdenClarke from "../assests/govgeneral (1).jpg"
import Korsah from "../assests/govgeneral (2).jpg"
import Listowel from "../assests/govgeneral (3).jpg"

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
        potrait: Queen,
        reign:'6 March 1957 - 1 July 1960',
        length:'3 years, 117 days',
        royal: 'Windsor',
        image: Windsor,
        description:'Queen Elizabeth II reigned over Ghana from 1957 to 1960 while simultaneously ruling the United Kingdom and the other Commonwealth realms.',
        pm:'Nkrumah'
    }
]
const governor_general = [
  {
      No:'1',
      name:'Sir Charles Arden-Clarke',
      potrait: ArdenClarke,
      term:'6 March 1957 - 14 May 1957',
      length:'69 days',
      royal:Windsor,
      description:'Sir Charles Arden-Clarke was a British Colonial Adminstrator, furthermore he was a representative of the monarchy in Ghana.',
      pm: Nkrumah 
  },
  {
      No:'2',
      name:'Kobina Arku Korsah',
      potrait:Korsah ,
      term:'14 May 1957 - 13 November 1957',
      length:'183 days',
      royal:Windsor,
      description:'Kobina Arku Korsah was the first chief of justice of Ghana in 1956.',
      pm: Nkrumah 
  },
  {
      No:'3',
      name:'The Rt. Hon. The Earl of Listowel',
      potrait:Listowel,
      term:'13 November 1957 - 1 July 1960',
      length:'2 years, 231 days',
      royal:Windsor,
      description:'William Francis Hare, 5th Earl of Listowel ,was an Anglo-Irish peer and Labour politician. He was the last Secretary of State for India as well as the last Governor-General of Ghana.',
      pm: Nkrumah 
  }
]

const first_republic = [
  {
    No:'1',
    name:'Kwame Nkrumah',
    potrait: Nkrumah,
    term:'1 July 1960 - 26 February 1966 (deposed) 5 years, 240 days',
    party: CPP ,
    partyName: 'Convention People\'s Party'
}]
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
                  <td><img src={item.image} title={item.royal}/></td>
                  <td>{item.pm}</td>
                </tr>
              ))}
          </table>
          <h2 className="explore-head">Governor General</h2>
          <div style={style}>
            <p>The governor-general was the representative of the monarchy in Ghana and exercised most of the powers of the monarch. The governor-general was appointed for an indefinite term, serving at the pleasure of the monarch.  </p>  
          </div>
          <Governortable list={governor_general}/>
          <h2 className="explore-head">First Republic (1960–1966)</h2>
          <div style={style}>
          <p>Under the Constitution of 1960, the first constitution of the Republic of Ghana, the president replaced the monarch as the executive head of state. The president was elected by Parliament for a 5-year term. In the event of a vacancy, three members of the Cabinet served jointly as acting president.</p> 
          </div>
          <Table list={first_republic} />
        </section>
    </Modal>
  )
}
