import React from "react"

import Entry from "../components/entry"

const Resume = () => (
  <>
    <div id="work-experience" className="block-group">
      <Entry title="Indiegogo"
        titleLink="https://indiegogo.com"
        dates="Feb '20-May '22"
        skills={[
          "typescript",
          "rails",
          "elixir/phoenix",
          "vue/nuxt",
          "cypress",
          "redis"
        ]}>
        For two and a half years, I worked as a full-stack developer at Indiegogo. I helped rewrite the
        legacy payment processing and checkout experience from angularJS to vue; implementing a new suite of
        integration tests (including its CI and github integration) using Cypress, leading to faster,
        cheaper test runs, fewer test flakes, and improved developer experience. I personally designed and
        implemented a total rewrite of the advertising metric gathering campaigners rely on after a facebook
        policy change, which involved frontend changes, database updates, a new set of API interactions, and
        extremely high-volume async job processing. It also required close coordination with nontechnical
        stakeholders both internal and external and thorough documentation. I played a key role in the
        design and implementation of an upcoming product, a new web app to help campaigners manage
        inventory, shipping, and backer communication. I specifically was responsible for the new product's
        frontend architecture and testing strategy. With its Elixir backend and an aggressively prerendered
        vue frontend, the site performance dramatically outperformed the legacy Indiegogo website
        (particularly its time to first byte, largest contentful paint, and time to interactive
        measurements) while using similar technologies to minimize the learning curve for other devs and
        unblock future "upstreaming" of improvements to the indiegogo.com frontend.
      </Entry>
      <Entry title="SigFig"
        titleLink="https://sigfig.com"
        dates="Jul '17-Oct '19"
        skills={[
          "typescript",
          "scala",
          "angularJS",
          "frontend builds",
          "react",
          "A/B testing",
        ]}>
        Working primarily as a frontend engineer at a digital wealth management startup, I helped
        redesign the build system of a large whitelabeled typescript app to use ES2015 modules and
        manage dependencies with npm or yarn; I converted thousands of files to the new system during
        the migration. I personally refactored the build system to remove its gulp dependency,
        dramatically simplifying configuration work. I also designed the frontend A/B testing API and rewrote
        its integration with a 3rd-party assignment backend, using a more modular design to decouple
        internal code from the idiosyncracies of that vendor. I helped launch a new typescript/react
        frontend application, including work on its Scala REST API.
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
        stylesheets to server ops. I maintained statically-built marketing sites as well as its
        Rails app. I personally implemented secure and user-friendly integrations with TraxPayroll
        and Greenhouse.io, which involved complicated data mapping, multiple forms of encryption,
        and, at times, working with out-of-date and contradictory documentation.
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
        services.

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

          I worked a contract job with Magoosh, a leader in online test prep
          based in Berkeley. I shipped new features in their Rails app,
          including auto-tagging for support tickets, an instructor dashboard,
          an in-house A/B testing library, and a photo upload system.

      </Entry>
    </div>
    <div id="education" className="block-group">
      <Entry title="Dev Bootcamp" titleLink="https://en.wikipedia.org/wiki/Dev_Bootcamp"
        dates="Jul-Sept '14"
        skills={[
          "Programming & web fundamentals",
          "git & *nix CLI",
          "Ruby & Rails",
          "JavaScript, HTML, & CSS",
        ]}>

        An immersive 19-week web development program. Over the final 9 weeks alone, I worked over
        1000 hours at the San Francisco campus in an intensely collaborative environment that
        emphasized hands-on learning, empathy, communication, and problem-solving.

      </Entry>
      <Entry title="Portland Community College" titleLink="www.pcc.edu"
        dates="Nov '12-Jun '14"
        skills={[]}>

        While working as an art teacher, independently pursued interests in Statistics and Computer Science. Where
        I discovered how much I enjoy programming.

      </Entry>

      <Entry title="Cornell College" titleLink="https://cornellcollege.edu/"
        dates="Class of '08"
        skills={[]}>

        B.A. in English, minor in Music.
        Received 2007 Winnifred Van Etten Award for Creative and Scholarly Excellence.

        <br /><br />

        Though seemingly unrelated, my studies centered on an interest in how human expression exists within
        and is influenced by logically analyzable systems like syntax, music theory, or grammar. I have found
        this to be surprisingly good preparation for the work of programming.

      </Entry>

    </div>
  </>
)

export default Resume
