import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">
                ponochovnybooking
            </span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar