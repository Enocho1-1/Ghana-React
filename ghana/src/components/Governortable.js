

export const Governortable = ({list}) => {
  return (
    <table>
        <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Portrait</th>
            <th>Term in Office</th>
            <th>Royal House</th>
            <th>Prime Minister</th>
        </tr>
        {list.map( item => (
            <tr>
                <td>{item.No}</td>
                <td>{item.name}</td>
                <td><img src={item.potrait}/></td>
                <td>
                    {item.reign}
                    <br/>
                    {item.length}
                </td>
                <td>{item .royal}</td>
                <td>{item.pm}</td>
            </tr>
        ))}
    </table>
  )
}
