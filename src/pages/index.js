import React from "react";
import { Link } from "gatsby";
import Typed from "react-typed";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section id="home">
      <div className="container">
        <h1>
          <Typed
            loop
            typeSpeed={80}
            backSpeed={20}
            strings={[
              "I'm <span class='accent'>Jacob</span> Herper.",
              "I'm a <span class='accent'>web developer</span>.",
              "I'm a <span class='accent'>creative</span> mind."
            ]}
            smartBackspace
            backDelay={1000}
            loopCount={0}
            showCursor
            cursorChar="|"
            className="typed"
          />
        </h1>
        <p>
          As a Web Developer, I love innovations and technologies. I help
          companies develop outstanding and highly optimised websites and web
          apps, to operate more efficiently and communicate effectively through
          custom-built web solutions.
        </p>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
