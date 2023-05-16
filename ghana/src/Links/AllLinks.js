import { Link } from "react-router-dom";

export const AllLinks = () => {
  return (
    <>
        <Link to="/">Home</Link>
        <Link to="history">History</Link>
        <Link to="culture">Culture</Link>
        <Link to="politics">Politics</Link>
    </>
  )
}
