
import { Modal } from "./Modal"
import { Paragraphstyle } from "./Paragraphstyle"
import { Governortable } from "./Governortable"
import { Table } from "./Table"
import Queen from "../assests/queen.jpg"
import Windsor from "../assests/windsor.png"
import CPP from "../assests/CPP.jpg"
import PNC from "../assests/PNC.jpg"
import NDC from "../assests/ndc.png"
import NPP from "../assests/npp.png"
import Nkrumah from "../assests/kn.jpg"
import ArdenClarke from "../assests/govgeneral (1).jpg"
import Korsah from "../assests/govgeneral (2).jpg"
import Listowel from "../assests/govgeneral (3).jpg"
import Ankrah from "../assests/ankrah.webp"
import Afrifa from "../assests/afrifa.jpeg"
import Armedforces from "../assests/armedforces.png"
import Busia from "../assests/busia.jpeg"
import Ollennua from "../assests/Ollennu.jpg"
import EdwardAddo from "../assests/Akufo_Addo.jpg"
import Independent from "../assests/flag.png"
import Ignatius from "../assests/Ignatius.jpg"
import Akuffo from "../assests/fred-will.jpg"
import Rawlings from "../assests/rawlings.webp"
import Hillman from "../assests/Limann.jpg"
import Kufor from "../assests/kufuor.jpg"
import Mahama from "../assests/mahama.jpg"
import Mills from "../assests/mills.webp"
import Addo from "../assests/addo (1).jpg"

export const Headsmodal = () => {

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
        pm:Nkrumah 
    }
]
const governor_general = [
  {
      No:'1',
      name:'Sir Charles Arden-Clarke',
      potrait: ArdenClarke,
      term:'6 March 1957 - 14 May 1957',
      length:'69 days',
      party:Windsor,
      partyName: 'Windsor',
      description:'Sir Charles Arden-Clarke was a British Colonial Adminstrator, furthermore he was a representative of the monarchy in Ghana.',
      pm: Nkrumah,
      title: 'Kwame Nkrumah'
  },
  {
      No:'2',
      name:'Kobina Arku Korsah',
      potrait:Korsah ,
      term:'14 May 1957 - 13 November 1957',
      length:'183 days',
      party:Windsor,
      partyName: 'Windsor',
      description:'Kobina Arku Korsah was the first chief of justice of Ghana in 1956.',
      pm: Nkrumah,
      title: 'Kwame Nkrumah'
  },
  {
      No:'3',
      name:'The Rt. Hon. The Earl of Listowel',
      potrait:Listowel,
      term:'13 November 1957 - 1 July 1960',
      length:'2 years, 231 days',
      party:Windsor,
      partyName: 'Windsor',
      description:'William Francis Hare, 5th Earl of Listowel ,was an Anglo-Irish peer and Labour politician. He was the last Secretary of State for India as well as the last Governor-General of Ghana.',
      pm: Nkrumah,
      title: 'Kwame Nkrumah' 
  }
]

const first_republic = [
  {
    No:'1',
    name:'Kwame Nkrumah',
    potrait: Nkrumah,
    term:'1 July 1960 - 26 February 1966 (deposed) ',
    length:'5 years, 240 days',
    party: CPP ,
    partyName: 'Convention People\'s Party'
}]

const military_rule = [
    {
      No:'2',
      name:'Lieutenant-General Joseph Arthur Ankrah',
      potrait: Ankrah,
      term:'24 February 1966 - 2 April 1969 (resigned) 3 years, 37 days',
      party: Armedforces ,
      partyName: 'Military'
  },
  {
    No:'3',
    name:'Brigadier Akwasi Afrifa',
    potrait: Afrifa,
    term:'2 April 1969 - 3 September 1969 154 days',
    party: Armedforces ,
    partyName: 'Military'
  }
]

const second_republic = [
    {
      No:'4',
      name:'Brigadier Akwasi Afrifa',
      potrait: Afrifa,
      term:'3 September 1969 - 7 August 1970 ',
      length:'338 days',
      party: Armedforces ,
      partyName: 'Military',
      pm: Busia,
      title: 'Kofi A. Busia' 
  },
  {
    No:'-',
    name:'Nii Amaa Ollennua',
    potrait: Ollennua,
    term:'7 August 1970 - 31 August 1970',
    length:'24 days',
    party: Independent ,
    partyName: 'Independent',
    pm: Busia,
    title: 'Kofi A. Busia' 
},
{
  No:'5',
  name:'Edward Akufo-Addo',
  potrait: EdwardAddo,
  term:'31 August 1970 - 13 January 1972 (deposed)',
  length:'1 year, 135 days',
  party: Independent ,
  partyName: 'Independent',
  pm: Busia,
  title: 'Kofi A. Busia' 
}
]

const military_rule_two = [
  {
      No:'6',
      name:'General Ignatius Kutu Acheampong',
      potrait: Ignatius,
      term:'13 January 1972 - 5 July 1978 (deposed)',
      length: '6 years, 173 days',
      party: Armedforces ,
      partyName: 'Military'
  },
  {
    No:'7',
    name:'	Lieutenant-General Fred Akuffo',
    potrait: Akuffo ,
    term:'5 July 1978 - 4 June 1979 (deposed)',
    length: '334 days',
    party: Armedforces ,
    partyName: 'Military'
  },
  {
    No:'8',
    name:'Flight Lieutenant Jerry Rawlings',
    potrait: Rawlings,
    term:'4 June 1979 - 24 September 1979',
    length: '112 days',
    party: Armedforces ,
    partyName: 'Military'
  }
]

const third_republic = [
  {
    No:'9',
    name:'Khilla Limann',
    potrait: Hillman,
    term:'24 September 1979 - 31 December 1981 (deposed)',
    length:'2 years, 98 days',
    party: PNC ,
    partyName: 'People\'s National Convention'
}]

const military_rule_three = [
  {
      No:'(8)',
      name:'Flight Lieutenant Jerry Rawlings',
      potrait: Rawlings,
      term:'31 December 1981 - 7 January 1993',
      length: '11 years, 7 days',
      party: Armedforces ,
      partyName: 'Military'
  }
]

const fourth_republic = [
  {
    No:'(8)',
    name:'Flight Lieutenant Jerry Rawlings',
    potrait: Rawlings,
    term:'7 January 1993 - 7 January 2001',
    length: '8 years',
    party: NDC ,
    partyName: 'National Democratic Congress'
  },
  {
    No:'10',
    name:'John Kufuor',
    potrait: Kufor,
    term:'7 January 2001 - 7 January 2009',
    length: '8 years',
    party: NPP ,
    partyName: 'New Patriotic Party'
  },
  {
    No:'11',
    name:'John Atta Mills',
    potrait: Mills,
    term:'7 January 2009 - 24 July 2012 (died in office)',
    length: '3 years, 199 days',
    party: NDC ,
    partyName: 'National Democratic Congress'
  },
  {
    No:'12',
    name:'John Mahama',
    potrait: Mahama,
    term:'	24 July 2012 - 7 January 2017',
    length: '4 years, 167 days',
    party: NDC ,
    partyName: 'National Democratic Congress'
  },
  {
    No:'13',
    name:'Nana Akufo-Addo',
    potrait: Addo,
    term:'7 January 2017 - current',
    length: '5 years, 259 days',
    party: NPP,
    partyName: 'New Patriotic Party'
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
                <tr key={item.No}>
                  <td>{item.No}</td>
                  <td>{item.name}</td>
                  <td><img src={item.potrait} alt="Queen Elizabeth II" /></td>
                  <td>
                    {item.reign}
                    <br />
                    {item.length}
                  </td>
                  <td><img src={item.image} title={item.royal}/></td>
                  <td><img src={item.pm} alt="" title="Kwame Nkrumah"/></td>
                </tr>
              ))}
            </table>

          {/* Governor General */}
          <h2 className="explore-head">Governor General</h2>
          <Paragraphstyle>
            <p>The governor-general was the representative of the monarchy in Ghana and exercised most of the powers of the monarch. The governor-general was appointed for an indefinite term, serving at the pleasure of the monarch.  </p>  
          </Paragraphstyle>
          <Governortable list={governor_general}/>

          {/* First Republic (1960–1966) */}
          <h2 className="explore-head">First Republic (1960–1966)</h2>
          <Paragraphstyle>
            <p>Under the Constitution of 1960, the first constitution of the Republic of Ghana, the president replaced the monarch as the executive head of state. The president was elected by Parliament for a 5-year term. In the event of a vacancy, three members of the Cabinet served jointly as acting president.</p> 
          </Paragraphstyle>
          <Table list={first_republic} />

          {/* Military rule (1966–1969) */}
          <h2 className="explore-head">Military rule (1966–1969)</h2>
          <Paragraphstyle>
            <p>Lieutenant-General Joseph Arthur Ankrah led a coup d'état that overthrew President Nkrumah and his government, and all political parties and Parliament became obsolete.</p>
          </Paragraphstyle>
          <Table list={military_rule} />

          {/* Second Republic (1969–1972) */}
          <h2 className="explore-head">Second Republic (1969–1972)</h2>
          <Paragraphstyle>
            <p>Ghana's government returned to civilian authority under the Second Republic in October 1969 after a parliamentary election in which the Progress Party, primarily led by Kofi A. Busia, won 105 of the 140 seats. Until mid-1970, the powers of the chief of state resided within the presidential commission led by Brigadier A.A. Afrifa.</p>
          </Paragraphstyle>
          <Governortable list={second_republic}/>

          {/* Military rule (1972–1979) */}
          <h2 className="explore-head">Military rule (1972–1979)</h2>
          <Paragraphstyle>
            <p>General Ignatius Kutu Acheampong led a coup d'état which overthrew President Akufo-Addo, Prime Minister Abrefa Busia and his government, all political parties, and Parliament were also deposed. Lieutenant General Fred Akuffo led a coup d'état that overthrew General Acheampong, then Flight Lieutenant Jerry Rawlings led a coup d'état that overthrew the Supreme Military Council.</p>
          </Paragraphstyle>
          <Table list={military_rule_two } />

          {/* Third Republic (1979–1981) */}
          <h2 className="explore-head">Third Republic (1979–1981)</h2>
          <Paragraphstyle>
            <p>Under the Constitution of 1979, the president was head of both state and government. The president was directly elected and served a four-year term that ended at the next general election; a president might serve a maximum of two terms. In the event of a vacancy, the vice president served as acting president.</p>
          </Paragraphstyle>
          <Table list={third_republic} />
     

          {/* Military rule (1981–1993) */}
          <h2 className="explore-head">Military rule (1981–1993)</h2>
          <Paragraphstyle>
            <p>Flight Lieutenant Jerry Rawlings led a coup d'état that overthrew President Limann and his government, all political parties and Parliament were also dissolved.</p>
          </Paragraphstyle>
          <Table list={military_rule_three} />

           {/* Fourth Republic (1993–present) */}
           <h2 className="explore-head">Fourth Republic (1993–present)</h2>
          <Paragraphstyle>
            <p>The current Constitution of Ghana follows the same precedent as the constitution of 1979 which states that the president is head of both state and government. The president is directly elected and serves a four-year term that expires at the next general election; a president may serve a maximum of two terms. In the event of a vacancy, the vice president serves the remaining time as the president.</p>
          </Paragraphstyle>
          <Table list={fourth_republic} />
        </section>
    </Modal>
  )
}
