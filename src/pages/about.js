import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Skill from "../components/skill";

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="container" style={{ marginTop: "2rem" }}>
      <h2>About</h2>
      <div className="grid">
        <div className="column a">
          <p>
            The advancement of technology today is amazing and has helped
            improve our society.
            <br />
            Having a website that expresses the cohesive brand of your business
            makes it easier for visitors (potential customers) to navigate,
            understand and have a better experience visiting your website.{" "}
          </p>
          <p>
            As a Web Developer, I love innovations and technologies right from
            childhood. I was fortunate to learn HTML at age 12 and PHP at age
            15, for this reason, I enjoy multi-tasking and getting to wear many
            hats. These have made me gain a lot of experience, having worked
            with companies like ASA GmbH, Immovato and The Specialist Works as a
            front end developer while running my own company Creativ Agency Ltd.
          </p>
          <p>
            A digital graphic designer with over 10 years of professional
            experience who has worked with brands like Porsche Design or
            Commerzbank should be the perfect fit for your products. Over the
            years, I have founded and co-founded six companies.{" "}
          </p>
          <p>
            Having worked with a number of professionals around the globe, I
            eventually turned out to be a bilingual enthusiast speaking both
            English and German. Also, I can communicate in Russian and Italian
            while learning Spanish presently.
          </p>
          <p>
            As a technologist, I help companies develop outstanding and highly
            optimised websites and web apps, operate more efficiently and
            communicate effectively with customised web solutions.
          </p>
          <p>
            Currently, I belong to the UK Web Design Association and Allianz
            Deutscher Designer (Alliance of German Designers), and I'm free to
            trade my expertise with any company that craves for my service. Feel
            free to get in touch!{" "}
          </p>
          <p>
            My duties embrace making your website easily accessible on any
            device, helping your business get found anywhere, keeping my clients
            up to date with search engine algorithms, and my skill set include
            Web Development, JavaScript Development, API integration, social
            media marketing, React Development and Project Management just to
            mention a few.
          </p>
        </div>
        <div className="column b">
          <h3>My Skills</h3>
          <Skill>HTML5</Skill>
          <Skill>CSS</Skill>
          <Skill>SASS / Less</Skill>
          <Skill>JavaScript</Skill>
          <Skill>PHP</Skill>
          <Skill color="blue">ReactJS</Skill>
          <Skill color="blue">Vue.js</Skill>
          <Skill color="blue">Gatsby</Skill>
          <Skill color="blue">Next.js</Skill>
          <Skill color="green">MySQL</Skill>
          <Skill color="green">MongoDB</Skill>
          <Skill color="orange">SEO</Skill>
          <Skill color="orange">Scrum</Skill>
          <Skill color="orange">WordPress</Skill>
          <Skill color="orange">Drupal</Skill>
          <Skill color="red">Adobe Illustrator</Skill>
          <Skill color="red">Adobe InDesign</Skill>
          <Skill color="red">Adobe Photoshop</Skill>
          <Skill color="red">Sketch</Skill>
          <Skill color="red">Figma</Skill>
          <hr />
          <h3>Soft Skills</h3>
          <Skill>Strong communication skills</Skill>
          <Skill>Leadership Skills</Skill>
          <Skill>Problem Solving</Skill>
          <Skill>Flexible and adaptable</Skill>
          <Skill>Wide array of skills</Skill>
          <Skill>Teamwork</Skill>
          <Skill>Always on time</Skill>
          <hr />
          <h3>Languages</h3>
          <strong>English</strong> - Bi-Lingual Proficiency
          <br />
          <strong>German</strong> - Bi-Lingual Proficiency
          <br />
          <strong>Spanish</strong> - Basic Proficiency
          <br />
          <strong>Italian</strong> - Basic Proficiency
          <br />
          <strong>Russian</strong> - Basic Proficiency
          <br />
        </div>
        <div className="column c" />
        <div className="column d" />
      </div>
    </div>
  </Layout>
);

export default About;
