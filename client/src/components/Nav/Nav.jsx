import "./Nav.css"
import { Link } from "react-router-dom"

const Nav = (props) => {
  const { currentUser, handleLogout} = props

  return (
    <nav>
      <Link to="/trips">Trips</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/" onClick={handleLogout}>Logout</Link>
    </nav>
  )
}

export default Nav