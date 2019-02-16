import React from "react";
import Typed from "react-typed";

import Layout from "../components/layout";
import SEO from "../components/seo";
import * as Icon from "../components/icons";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section id="home">
      <div className="container">
        <h2>
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
        </h2>
        <p>
          As a Web Developer, I love innovations and technologies. I help
          companies develop outstanding and highly optimised websites and web
          apps, to operate more efficiently and communicate effectively through
          custom-built web solutions.
        </p>
        <a
          href="https://github.com/jakeherp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.Github />
        </a>
        <a
          href="https://www.linkedin.com/in/jacobherper"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.Linkedin />
        </a>
        <a
          href="https://twitter.com/jakeherp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.Twitter />
        </a>
        <a
          href="https://instagram.com/jakeherp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.Instagram />
        </a>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
