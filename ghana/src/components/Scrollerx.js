import "./scrollerx.css"

export const Scrollerx = ({list}) => {
  
  return (
    <section className="scrollerx">
        {list.map(listItem => (
        <div key={listItem.number} className="item">
            <img src={listItem.image} alt="" />
            <section>
                <h1>Name: {listItem.name}</h1>
                <h1>Birth Place: {listItem.birthplace}</h1>
                <h1>Sport: {listItem.sport}</h1>
            </section>
        </div>
        ))}
    </section>
  )
}
