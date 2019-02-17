import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import PageTransition from "gatsby-v2-plugin-page-transitions";

import Header from "./header";
import "../assets/sass/style.scss";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <PageTransition>
          <main>{children}</main>
          <footer>© {new Date().getFullYear()} Jacob Herper</footer>
        </PageTransition>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
