import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

class PortfolioItem extends React.Component {
  state = {};
  render() {
    const post = this.props.data.contentfulItem;
    // const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout>
        <SEO title={post.title} description={post.description} />
        <Img
          fluid={post.featured_image.fluid}
          alt={post.title}
          style={{ maxHeight: "400px" }}
        />
        <div className="container" style={{ marginTop: "2rem" }}>
          <h2>{post.title}</h2>
          <h3>{post.type}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.childContentfulRichText.html
            }}
          />
          <p>
            <strong>Technologies used:</strong> {post.technologies.join(", ")}
          </p>
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Visit project
          </a>
          <ul className="pagination">
            {previous && (
              <li>
                <Link to={`/${previous.slug}/`} rel="prev">
                  &laquo; {previous.title}
                </Link>
              </li>
            )}
            {next && (
              <li>
                <Link to={`/${next.slug}/`} rel="next">
                  {next.title} &raquo;
                </Link>
              </li>
            )}
          </ul>
        </div>
      </Layout>
    );
  }
}

export default PortfolioItem;

export const pageQuery = graphql`
  query PortfolioItemBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulItem(slug: { eq: $slug }) {
      title
      client
      type
      technologies
      url
      description
      content {
        childContentfulRichText {
          html
        }
      }
      featured_image {
        fluid(maxWidth: 1920, quality: 70) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
