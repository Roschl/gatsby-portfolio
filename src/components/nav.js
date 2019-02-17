import React from "react";
import { Link } from "gatsby";

const Nav = () => (
  <ul>
    <li>
      <Link to="/about/">About</Link>
    </li>
    <li>
      <Link to="/portfolio/">Portfolio</Link>
    </li>
    <li>
      <Link to="/contact/">Contact</Link>
    </li>
  </ul>
);

export default Nav;
