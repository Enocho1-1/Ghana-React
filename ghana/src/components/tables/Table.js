import"./table.css"

export const Table = ({list}) => {

  return (
    <div className="tableScroller">
      <table>
        <thead>
          <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Portrait</th>
              <th>Term in Office</th>
              <th>Party</th>
          </tr>
        </thead>
    
     <tbody>
     {list.map( item => (
            <tr key={item.No}>
                <td>{item.No}</td>
                <td>{item.name}</td>
                <td><img src={item.potrait}/></td>
                <td>
                  {item.term}
                    <br/>
                  {item.length}
                </td>
                <td><img src={item .party} alt="" title={item.partyName}/></td>
            </tr>
        ))}
     </tbody>
    
      </table>
    </div>

  )
}