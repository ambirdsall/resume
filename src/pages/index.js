import Helmet from "react-helmet"
import React from "react"

import Nameplate from "../components/nameplate"
import Resume from "../components/resume"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <>
    <Helmet>
      <link href='https://fonts.googleapis.com/css?family=Droid+Sans:300,400|Droid+Serif:400,700,400italic' rel='stylesheet' type='text/css'/>
    </Helmet>

    <SEO title="Alex Birdsall, Software Engineer" />

    <div className="block-group container">
      <Nameplate
        name="Alex Birdsall"
        title="Full Stack Web Developer"
        phone="(802) 989-5647"
        email="ambirdsall@gmail.com">
        I care about solving problems and I hope to build beautiful, logically
        interesting things, working in a team that cares about ethics,
        collaboration, simplicity, and quality.
      </Nameplate>

      <Resume/>
    </div>
  </>
)

export default IndexPage
