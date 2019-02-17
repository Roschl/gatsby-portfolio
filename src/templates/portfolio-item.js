import React from "react";
import { Link, graphql } from "gatsby";

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

        <div className="container" style={{ marginTop: "2rem" }}>
          <h2>{post.title}</h2>
          <h3>{post.client}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.childContentfulRichText.html
            }}
          />
          <ul>
            {previous && (
              <li>
                <Link to={previous.slug} rel="prev">
                  &laquo; {previous.title}
                </Link>
              </li>
            )}
            {next && (
              <li>
                <Link to={next.slug} rel="next">
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
      description
      content {
        childContentfulRichText {
          html
        }
      }
      featured_image {
        fluid {
          src
        }
      }
    }
  }
`;
