import React from 'react'

const Navbar = ({pagename}) => {
    return (
        <div className="navbar-container">
            <div className="text-black font-poppins font-bold text-2xl">
                {pagename}
            </div>
            {/* <div className="navbar-search">
                <input type="text" placeholder="Search Order" />
            </div> */}
            {/* <div className="navbar-icons flex">
                <Link to="/Notification" className="heading">
                    <FaBell size={22} style={{ color: "white" }} alt="notification" />
                </Link>
                <Link to="/Settings" className="heading">
                    <FaCog size={22} style={{ color: "white" }} alt="settings" />
                </Link>
                <Link to="/User" className="heading">
                    <FaUser size={22} style={{ color: "white" }} alt="user" />
                </Link>
            </div> */}
        </div>
    )
}

export default Navbar;