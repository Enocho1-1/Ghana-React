

export const Governortable = ({list}) => {
  return (
    <table>
        <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Portrait</th>
            <th>Term in Office</th>
            <th>Political Party</th>
            <th>Prime Minister</th>
        </tr>
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
                <td><img src={item.pm} alt="" title={item.title}/></td>
            </tr>
        ))}
    </table>
  )
}
