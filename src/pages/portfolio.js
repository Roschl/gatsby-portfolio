import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

class Portfolio extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allContentfulItem.edges;

    return (
      <Layout>
        <SEO title="Portfolio" />
        <div className="container" style={{ marginTop: "2rem" }}>
          <h2>Portfolio</h2>
          <div className="wrapper">
            {posts.map(({ node }) => {
              const title = node.title || node.slug;
              return (
                <div key={node.slug} className="portfolio-item">
                  <Link to={`/${node.slug}/`}>
                    <Img fluid={node.featured_image.fluid} />
                    <div className="overlay">
                      <h3>{title}</h3>
                      <small>{node.type}</small>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Portfolio;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulItem {
      edges {
        node {
          title
          slug
          client
          type
          featured_image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
