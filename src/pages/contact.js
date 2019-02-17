import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import * as Icon from "../components/icons";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container" style={{ marginTop: "2rem" }}>
      <h2>Contact</h2>
      <p>
        Wanna talk? Send me an email through the form below or get in touch
        through my social media.
      </p>

      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <div className="field">
          <label htmlFor="name">
            Name <span className="accent">*</span>
          </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">
            Email <span className="accent">*</span>
          </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="field">
          <label htmlFor="message">
            Message <span className="accent">*</span>
          </label>
          <textarea name="message" id="message" rows="6" required />
        </div>
        <div className="actions">
          <input type="submit" value="Send Message" className="special" />
        </div>
      </form>

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
  </Layout>
);

export default Contact;
