import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

const Header = ({ siteTitle }) => (
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
      <Link class="navbar-brand" to="/">
        Navbar
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="#navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item ">
            <Link class="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item text-white">
            <Link class="nav-link" to="/about/">
              About
            </Link>
          </li>
          <li class="nav-item text-white">
            <Link class="nav-link" to="/contact/">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
