import React from "react"

import Entry from "../components/entry"

const Resume = () => (
  <>
      <div id="work-experience" className="block-group">
        <Entry title="SigFig"
               titleLink="https://sigfig.com"
               dates="Jul '17-Dec '19"
               skills={[
                 "typescript",
                 "scala",
                 "angularJS",
                 "frontend builds",
                 "react",
                 "A/B testing",
               ]}>

          My first role at SigFig was working on a large, whitelabeled angularJS
          app written in typescript. While regularly developing unit-tested
          features and fixing bugs, I helped redesign its build system to use
          webpack and ES2015 modules, writing custom webpack configuration to
          dramatically simplify the maintenance of customer-specific code; I
          converted thousands of files to the new system during the migration. I
          designed an internal A/B testing API and rewrote its integration with
          a 3rd-party user assignment backend, using a modular design to allow
          for future upgrades. I helped launch a new product, writing code both
          for its typescript and react frontend and its REST backend, which was
          written in Scala.

        </Entry>
        <Entry title="Legal Information Institute, Cornell Law"
               titleLink="https://law.cornell.edu/rio"
               dates="Aug '16-Jun '17"
               skills={[
                 "ES2015",
                 "build scripts",
                 "browser caching",
               ]}>

          Cornell Law School picked up the Lawfetcher project, rebranding it as
          RIO (Read It Online) and hiring me to maintain and expand it. I
          refactored and completed test coverage of the domain logic; wrote code
          to parse a broader set of citation types and link to more sources;
          converted the build process to transpile modular ES2015 application
          code and tests; and implemented a <a
          href="http://guides.rubyonrails.org/asset_pipeline.html#what-is-fingerprinting-and-why-should-i-care-questionmark">
          filename fingerprinting</a> system to manage browser caching, enabling
          both frequent, iterative code deployment and efficient loading.

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

          I did freelance work for The Emoji Foundation's crowdsourced Emoji
          Dictionary. I created human-readable URLs, rewrote database queries
          for clarity and efficiency and created appropriate indexes, improved
          the site's SEO and performance, and refactored its PHP codebase,
          extracting shared code and refactoring to improve consistency and
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

          As software engineer for an early-stage HR and compliance startup, I
          worked with the entire stack from stylesheets to server ops. As part
          of a small team, I built out and maintained its Rails app as well as
          statically-generated marketing pages and blog. I reorganized initially
          haphazard CSS and javascript assets, spanning hundreds of files (some
          containing several thousand lines). I personally implemented secure
          integrations with digital payroll and hiring services, creating and
          documenting the necessary data mappings, implementing multiple layers
          of encryption, and working with, at times, out-of-date and
          contradictory documentation.

        </Entry>
        {/* lawfetcher */}
        <Entry title="Lawfetcher" titleLink="http://www.access-to-law.com/lawfetcher"
               dates="Aug '15-Dec '15"
               skills={[
                 "JavaScript",
                 "regular expressions",
                 "browserify",
               ]}>

          In collaboration with Emeritus Prof. Peter W. Martin of Cornell Law, I
          wrote a web application to semantically parse US legal citations and
          build direct links to their source texts in various online collections
          of legal documents. I created the data model for a citation and wrote
          code from scratch to parse a citation string so it could be
          programatically manipulated. More regular expressions than you can
          shake a stick at.

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

          <br/><br/>

          Though seemingly unrelated, my studies centered on an interest in how human expression exists within
          and is influenced by logically analyzable systems like syntax, music theory, or grammar. I have found
          this to be surprisingly good preparation for the work of programming.

        </Entry>

      </div>
  </>
)

export default Resume
