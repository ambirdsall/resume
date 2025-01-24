import Helmet from "react-helmet"
import React from "react"

import Resume from "../components/resume"
import SEO from "../components/seo"
import "./index.css"

// "\u00a0" is unicode codepoint for non-breaking space
const unbroken = text => text.replace(" ", "\u00a0")

const email = "ambirdsall@gmail.com"
const phone = new String("(802) 989-5647")
      phone.plain = "802-989-5647"

const IndexPage = () => (
  <>
    <Helmet>
      <link href='https://fonts.googleapis.com/css?family=Droid+Sans:300,400|Droid+Serif:400,700,400italic' rel='stylesheet' type='text/css'/>
    </Helmet>

    <SEO title="Resumé" />

    <header>
      <h1>Alex Birdsall</h1>
      <h2>Full Stack Web Developer</h2>
      <div className="contact-info">
          <a className="contact" href='ambirdsall.com'>
            <FaGlobe />
            ambirdsall.com
          </a>
          <a className="contact" href={`mailto:${email}`}>
            <FaAt />
            {email}
          </a>
          <a className="contact" href={`tel:${phone.plain}`}>
            <FaPhone />
            {unbroken(phone)}
          </a>
          <a className="contact" href="https://en.wikipedia.org/wiki/Portland,_Oregon">
            <FaMapMarkerAlt/>
            Portland, OR
          </a>
          <a className="contact" href="https://github.com/ambirdsall">
            <FaGithub />
            ambirdsall
          </a>
          <a className="contact" href="https://linkedin.com/in/ambirdsall">
            <FaLinkedin />
            ambirdsall
          </a>
      </div>
      <p className="intro--description">
        Full-stack web developer with 9+ years of experience building scalable,
        user-friendly applications across diverse industries. Proficient in Python,
        TypeScript, React, and cloud technologies. Demonstrated success in designing and
        building complex features, optimizing systems, and collaborating with both
        nontechnical colleagues and other engineers to deliver high-impact solutions.
        Passionate about solving problems for users and developers through ethical and
        efficient development.
      </p>
      <section className="key-skills">
        <div className="skillset">
          <h4>Languages</h4>
          <ul>
            <li><SiPython />Python</li>
            <li><SiTypescript />TypeScript</li>
            <li><SiRuby />Ruby</li>
            <li><SiGnubash />Bash</li>
            <li><SiScala />Scala</li>
          </ul>
        </div>

        <div className="skillset">
          <h4>Frameworks</h4>
          <ul>
            <li><SiFastapi />FastAPI</li>
            <li><SiRubyonrails />Rails</li>
            <li><SiReact />React</li>
            <li><SiVuedotjs />Vue</li>
            <li><SiCypress />Cypress</li>
          </ul>
        </div>

        <div className="skillset">
          <h4>Tools & Technologies</h4>
          <ul>
            <li><SiDocker />Docker</li>
            <li><SiPostgresql/>PostgreSQL</li>
            <li><SiLinux/>Linux</li>
            <li><SiRedis/>Redis</li>
            <li><SiDigitalocean/>DigitalOcean</li>
            <li><SiGooglecloud/>GCP</li>
            <li><SiAmazonwebservices/>AWS</li>
          </ul>
        </div>

        <div className="skillset">
          <h4>Other</h4>
          <ul>
            <li>shell scripting</li>
            <li>REST API design</li>
            <li>database modeling</li>
            <li>CI/CD automation</li>
            <li>maintainable test code</li>
          </ul>
        </div>
      </section>

    </header>
  </>
)

export default IndexPage
