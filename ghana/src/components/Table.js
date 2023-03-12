

export const Table = ({list}) => {
  return (
    <table>
    <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Portrait</th>
        <th>Term in Office</th>
        <th>Party</th>
    </tr>
    {list.map( item => (
        <tr>
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
</table>
  )
}