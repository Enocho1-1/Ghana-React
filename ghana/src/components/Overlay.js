
export const Overlay = () => {
  const overlay = {
    position: "absolute",
    height: "100%",
    width: "100%", 
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(26,26,26,0.50)",
    zIndex: 0
  }
  return (
    <div style={overlay}></div>
  )
}
