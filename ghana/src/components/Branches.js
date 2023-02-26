import "../components/button.css"

export const Branches = () => {
    const branch = {
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-between",
        flexWrap: "wrap",
        width: "31.25em"
      }


  return (
    <div style={branch}>
        <a href="" className="branchLink executive">
            <h1>Executive branch</h1>
        </a>
        <a href="" className="branchLink legislative">
            <h1>Legislative branch</h1>
        </a>
        <a href="" className="branchLink judicial">
            <h1>Judicial branch</h1>
        </a>
        <a href="" className="branchLink heads">
            <h1>Heads of State</h1>
        </a>
    </div>
  )
}