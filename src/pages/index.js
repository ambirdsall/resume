import React from "react"
import Helmet from "react-helmet"

import Entry from "../components/entry"
import Header from "../components/header"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <Helmet>
      <link href='https://fonts.googleapis.com/css?family=Droid+Sans:300,400|Droid+Serif:400,700,400italic' rel='stylesheet' type='text/css'/>
    </Helmet>

    <div className="block-group container">
      <SEO title="Alex Birdsall, Software Engineer" />
      <Header/>

      <div className="block-group work-experience">
        <Entry title="SigFig"
               titleLink="https://sigfig.com"
               dates="Jul '17-Present"
               skills={[
                 "typescript",
                 "scala",
                 "angularJS",
                 "frontend builds",
                 "react",
                 "A/B testing",
               ]}>
            My first role at SigFig was as an angularJS dev. Along with developing unit-tested
            features and fixing bugs, I helped redesign the build system of a large whitelabeled
            typescript app to use ES2015 modules and manage dependencies with npm or yarn; I converted
            hundreds of files to the new system during the migration. I personally refactored the
            build system to decouple its new build tool from its old one, significantly simplifying
            its configuration. I also designed the component A/B testing API and rewrote its
            integration with a 3rd-party user assignment backend, using a modular design so that the
            testing backend could easily be replaced by a better alternative down the line. I was also
            involved in the early stages of work with a new frontend application using typescript and
            react.
            <br/><br/>
            Soon after, I transfered over to work on building the Scala backend service which supports
            that product. I helped spec out the REST API, and I wrote code which aggregated and
            composed data from various microservices to simplify complex, paperwork-heavy workflows.
        </Entry>
        <Entry title="Legal Information Institute, Cornell Law"
               titleLink="https://law.cornell.edu/rio"
               dates="Aug '16-Jun '17"
               skills={[
                 "ES2015",
                 "build scripts",
                 "browser caching",
               ]}>
          Cornell Law School picked up the Lawfetcher project, rebranding it as RIO (Read It Online) and
          hiring me to maintain and expand it. I refactored and completed test coverage of the
          domain logic; wrote code to parse a broader set of citation types and link to more
          sources; converted the build process to transpile modular ES2015 application code and
          tests; and implemented a <a href="http://guides.rubyonrails.org/asset_pipeline.html#what-is-fingerprinting-and-why-should-i-care-questionmark">
            filename fingerprinting</a> system to manage browser caching, enabling both frequent,
          iterative code deployment and efficient loading.
        </Entry>
        {/* emoji dictionary */}
        <Entry title="The Emoji Dictionary" titleLink="https://emojidictionary.emojifoundation.com/"
               dates="Jan '17-Jun '17"
               skills={[
                 "php 7",
                 "Apache",
                 "build scripts",
                 "SEO",
               ]}>
          As a consultant, I did freelance work for The Emoji Foundation's crowdsourced Emoji
          Dictionary. The work focused on human-readable URLs, rewriting database queries and
          building indexes for clarity and efficiency, and other SEO and performance fundamentals,
          as well as extracting shared templates and refactoring old code for better semantics and
          maintainability.
        </Entry>
        {/* Flock */}
        <Entry title="Flock" titleLink="www.helloflock.com"
               dates="Jan '16-July '16"
               skills={[
                 "Rails 4",
                 "Middleman",
                 "SCSS",
                 "encryption & authentication",
               ]}>
          As software engineer for an HR and compliance startup, I worked with the entire stack from
          stylesheets to server ops. I maintained Middleman static sites for the company's landing
          page and blog as well as its Rails app. I personally implemented secure and user-friendly
          integrations with TraxPayroll and Greenhouse.io, which involved complicated data mapping,
          multiple forms of encryption, and, at times, working with out-of-date and contradictory
          documentation. I organized both the stylesheets and javascript assets, spanning hundreds
          of files (some containing several thousands of lines); and in general, worked hard to model and
          advocate for consistency of data modeling, clear and explicit API boundaries, and well-designed
          abstraction on a codebase, initially built by foreign contractors, that left much to be desired
          in those regards.
        </Entry>
        {/* lawfetcher */}
        <Entry title="Lawfetcher" titleLink="http://www.access-to-law.com/lawfetcher"
               dates="Aug '15-Dec '15"
               skills={[
                 "JavaScript",
                 "regular expressions",
                 "browserify",
               ]}>

          A freelance project in collaboration with Emeritus Prof. Peter W. Martin of Cornell Law. A
          free tool for legal writing, it semantically parses US legal citations and
          programmatically builds direct links to the full text in various free and subscription
          services. More regular expressions than you can shake a stick at.

        </Entry>
        {/* magoosh */}
        <Entry title="Magoosh" titleLink="www.magoosh.com"
               dates="Jan '15-Mar '15"
               skills={[
                 "MySQL",
                 "Rails 3",
                 "CoffeeScript",
                 "HAML",
                 "Bootstrap",
               ]}>

          I worked as a junior dev with Magoosh, a leader in online test prep based in Berkeley. I shipped many
          features, including auto-tagging for support tickets, an instructor dashboard, an in-house A/B testing
          library, and a photo upload system for static pages. I focused intensely on improving the design
          quality and professionalism of my code.

        </Entry>
      </div>
    </div>
  </>
)

export default IndexPage
