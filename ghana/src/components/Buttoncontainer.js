

export const Buttoncontainer = ({children}) => {
    const container = {
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignItems:"center",
         position: "absolute",
         height: "100vh",
         width: "100vw",
        flexDirection: "row",
        zIndex: "2",
    }
  return (
    <div style={container}>
        {children}
    </div>
  )
}
