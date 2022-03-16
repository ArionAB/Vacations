import React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { MdTravelExplore } from "react-icons/md"
import { GiHamburgerMenu } from "react-icons/gi"
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            {" "}
            <MdTravelExplore className="logo" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <GiHamburgerMenu />
          </button>
        </div>

        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link to="/" className="nav-link" activeClassName="active-link">
            home
          </Link>
          <Link
            to="/destinations"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Destinations
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Tags
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={() => setShow(false)}>
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
