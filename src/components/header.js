import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import { Menu } from "./icons";
import Nav from "./nav";
import MobileMenu from "./menu";

class Header extends React.Component {
  state = {
    showMenu: false
  };

  render() {
    return (
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
          {this.state.showMenu && <MobileMenu />}
          <Menu
            onClick={() => this.setState({ showMenu: true })}
            state={this.state.showMenu ? "active" : "inactive"}
          />
          <Nav />
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
