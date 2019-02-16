import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Menu } from "icons";
import Nav from "nav";

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`
    }}
  >
    <h1 style={{ margin: 0 }}>
      <Link to="/">
        <span className="accent">Jacob</span> Herper
      </Link>
    </h1>
    <nav>
      <Menu />
      <Nav />
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
