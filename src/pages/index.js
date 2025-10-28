import React from "react"

import { Entry } from "../components/entry"
import { Head } from "../components/head"
import { ContactInfo } from "../components/contact-info"
import {
  angular,
  aws,
  bash,
  css,
  cypress,
  digitalocean,
  docker,
  elixir,
  fastapi,
  gcp,
  html,
  java,
  js,
  linux,
  nodejs,
  postgres,
  python,
  rails,
  react,
  redis,
  ruby,
  scala,
  typescript,
  vue,
  webpack,
} from "../components/skills"

const ResumePageWrapper = ({
  sha = "e06ff3ac86a0c187840479eaa6cda49e", // the last gatsby-generated fingerprint, still valid for existing browser caches
  children,
}) => (
  <html lang="en">
    <Head sha={sha} />
    <body>
      <a className="corner-ribbon" href="./Alex-Birdsall.pdf">
        view as PDF
      </a>
      {children}
    </body>
  </html>
)

const ResumePage = () => (
  <ResumePageWrapper>
    <header>
      <div className="whoami">
        <h1>Alex Birdsall</h1>
        <h2>Software Engineer</h2>
      </div>
      <ContactInfo />
      <p className="intro--description">
        Generalist full-stack software engineer with 9+ years of experience
        focused on building measurable impact through pragmatic, iterative
        product development. Proficient with SQL databases, TypeScript (both
        in-browser and Node.js), React, Ruby, and Python, with a solid
        understanding of system architecture and design principles and a track
        record of effective cross-functional collaboration. A fast and curious
        learner who is passionate about solving problems for real people.
      </p>
      <section className="key-skills">
        <div className="skillset">
          <h4>Languages</h4>
          <ul>
            {typescript.li}
            {ruby.li}
            {nodejs.li}
            {bash.li}
            {python.li}
            {elixir.li}
          </ul>
        </div>

        <div className="skillset">
          <h4>Frameworks</h4>
          <ul>
            {rails.li}
            {fastapi.li}
            {react.li}
            {vue.li}
            {cypress.li}
          </ul>
        </div>

        <div className="skillset">
          <h4>Tools & Technologies</h4>
          <ul>
            {docker.li}
            {postgres.li}
            {linux.li}
            {redis.li}
            {digitalocean.li}
            {gcp.li}
            {aws.li}
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
    <article className="resume">
      <div className="left">
        <h3>Experience</h3>
        <Entry
          title="Artisan AI"
          titleLink="https://artisan.co"
          jobTitle="Software Engineer"
          dates="Jul '24-Dec '24"
          skills={
            <>
              {python.icon}
              {fastapi.icon}
              {postgres.icon}
              {redis.icon}
              {docker.icon}
              {typescript.icon}
              {react.icon}
              {digitalocean.icon}
            </>
          }
        >
          <ul>
            <li>
              Designed and implemented a full rewrite of the lead outreach data
              model, replacing a static hardcoded sequence with customizable
              workflows that support branching logic.
            </li>
            <li>
              Expanded platform capabilities by integrating external services,
              requiring new systems for custom authentication, scheduling, and
              error handling.
            </li>
            <li>
              Resolved critical database and cloud infrastructure issues, and
              built distributed observability fundamentals like request and
              worker process correlation ids.
            </li>
            <li>
              End-to-end ownership of complex features across the full stack,
              from prototypes to post-release monitoring.
            </li>
          </ul>
        </Entry>
        <Entry
          title="Airbyte"
          titleLink="https://airbyte.com"
          jobTitle="Software Engineer"
          dates="Aug '22-Mar '24"
          skills={
            <>
              {typescript.icon}
              {react.icon}
              {cypress.icon}
              {python.icon}
              {java.icon}
              {gcp.icon}
            </>
          }
        >
          <ul>
            <li>
              Wrote full-stack enhancements for the Connector Builder tool, a
              WYSIWYG editor for user-authored definitions of data source
              connectors, involving updates to the react UI, the underlying
              python SDK which consumes the connector definitions, and HTTP
              endpoints across multiple backend service boundaries.
            </li>
            <li>
              Shipped the UI for a DBT Cloud integration under a tight deadline,
              ensuring high-quality delivery.
            </li>
            <li>
              Restructured and modernized the Cypress end-to-end test suite for
              improved reliability and maintainability.
            </li>
          </ul>
        </Entry>
        <Entry
          title="Indiegogo"
          titleLink="https://indiegogo.com"
          jobTitle="Software Engineer"
          dates="Feb '20-May '22"
          skills={
            <>
              {typescript.icon}
              {ruby.icon}
              {rails.icon}
              {elixir.icon}
              {vue.icon}
              {angular.icon}
              {cypress.icon}
              {redis.icon}
              {gcp.icon}
              {aws.icon}
            </>
          }
        >
          <ul>
            <li>
              Designed, implemented, and coordinated the cross-functional
              rollout of a complete rewrite of the main Rails app's advertising
              metrics system in the wake of disruptive external changes,
              preserving users' ability to capture campaign-specific metrics on
              the platform.
            </li>
            <li>
              Part of a small team who designed and built a new inventory
              management tool for campaigners. Personally designed an
              easily-deployed, high-performance frontend tech stack and helped
              write the Elixir/Phoenix backend.
            </li>
            <li>
              Rebuilt the legacy checkout UI, halving the load time and
              significantly improving maintainability of a payment processing
              system handling millions of dollars in transactions.
            </li>
            <li>
              Responsible for diagnosing and resolving production issues as part
              of a regular on-call rotation.
            </li>
          </ul>
        </Entry>
        <Entry
          title="SigFig"
          jobTitle="Software Engineer, Frontend"
          titleLink="https://sigfig.com"
          dates="Jul '17-Oct '19"
          skills={
            <>
              {typescript.icon}
              {scala.icon}
              {angular.icon}
              {webpack.icon}
              {react.icon}
            </>
          }
        >
          <ul>
            <li>
              A key contributor to the rewrite of a large TypeScript/angularJS
              application’s build system, including a migration from TS
              namespaces to ES2015 modules.
            </li>
            <li>
              Personally responsible for rewriting a multilayered gulp+webpack
              build to a much simpler webpack build; and for redesigning the
              file override system powering different whitelabeled builds of the
              frontend app, significantly improving DX by replacing implicit
              overrides from distant subdirectories with explicitly-named
              overrides from files colocated with their corresponding base
              implementation.
            </li>
            <li>
              Designed an A/B testing API, decoupling internal logic from a
              third-party backend for improved flexibility and maintainability.
            </li>
            <li>
              Contributed to the launch of a React frontend and its Scala-based
              REST API.
            </li>
          </ul>
        </Entry>
      </div>
      <div className="right">
        <Entry
          title="Early Career & Freelance Projects"
          jobTitle="Various Roles"
          dates="2014-2017"
          skills={<></>}
        >
          <dl>
            <li>
              <dt>
                <a href="law.cornell.edu/rio">
                  Legal Information Institute, Cornell Law
                </a>
              </dt>
              <dd>
                Created a tool for parsing U.S. legal citations, generating
                direct links to the corresponding source documents.
              </dd>
            </li>
            <li>
              <dt>
                <a href="https://emojidictionary.emojifoundation.com/">
                  The Emoji Dictionary
                </a>
              </dt>
              <dd>
                Improved SEO and database performance, optimizing user
                navigation and search engine indexing.
              </dd>
            </li>
            <li>
              <dt>
                <a href="www.helloflock.com">Flock</a>
              </dt>
              <dd>
                Developed secure integrations with third-party services,
                managing encryption challenges.
              </dd>
            </li>
            <li>
              <dt>
                <a href="www.magoosh.com">Magoosh</a>
              </dt>
              <dd>
                Built new features in a Rails app, including auto-tagging and a
                custom A/B testing library.
              </dd>
            </li>
          </dl>
        </Entry>
        <h3>Education</h3>
        <Entry
          title="Dev Bootcamp"
          titleLink="https://en.wikipedia.org/wiki/Dev_Bootcamp"
          dates="Jul-Sept '14"
          skills={
            <>
              {ruby.icon}
              {rails.icon}
              {js.icon}
              {html.icon}
              {bash.icon}
              {css.icon}
            </>
          }
        >
          An immersive 19-week web development program. Over the final 9 weeks
          alone, I worked over 1000 hours at the San Francisco campus in an
          intensely collaborative environment that emphasized hands-on learning,
          empathy, communication, and problem-solving.
        </Entry>
        <Entry
          title="Portland Community College"
          titleLink="www.pcc.edu"
          dates="Nov '12-Jun '14"
          skills={[]}
        >
          While working as an art teacher, independently pursued interests in
          Statistics and Computer Science. Where I discovered how much I enjoy
          programming.
        </Entry>

        <Entry
          title="Cornell College"
          titleLink="https://cornellcollege.edu/"
          dates="Class of '08"
          skills={[]}
        >
          B.A. in English, minor in Music. Received 2007 Winnifred Van Etten
          Award for Creative and Scholarly Excellence.
          <br />
          <br />
          Though seemingly unrelated, my studies centered on an interest in how
          human expression exists within and is influenced by logically
          analyzable systems like syntax, music theory, or grammar. I have found
          this to be surprisingly good preparation for the work of programming.
        </Entry>
      </div>
    </article>
  </ResumePageWrapper>
)

export default ResumePage
