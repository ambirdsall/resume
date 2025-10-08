import React from "react"
import {
  FaAt,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa"
import {
  SiAngular,
  SiCss3,
  SiCypress,
  SiDocker,
  SiElixir,
  SiFastapi,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiLinux,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRuby,
  SiRubyonrails,
  SiScala,
  SiTypescript,
  SiVuedotjs,
  SiWebpack,
  SiGooglecloud,
  SiAmazonwebservices,
  SiDigitalocean,
} from "react-icons/si"

import Entry from "../components/entry"

// "\u00a0" is unicode codepoint for non-breaking space
const unbroken = text => text.replace(" ", "\u00a0")

const description =
  "Resume of Alex Birdsall, a Software Engineer based in Portland, Oregon"
const email = "ambirdsall@gmail.com"
const phone = new String("(802) 989-5647")
phone.plain = "802-989-5647"

const IndexPage = ({
  sha = "e06ff3ac86a0c187840479eaa6cda49e", // the last gatsby-generated fingerprint, still valid for existing browser caches
}) => (
  <html lang="en">
    <head>
      <title>Alex Birdsall :: Software Engineer</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        property="og:title"
        content="Resumé | Alex Birdsall :: Software Engineer"
      />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <link rel="icon" href={`./favicon-32x32.png?v=${sha}`} type="image/png" />
      <link
        rel="apple-touch-icon"
        sizes="48x48"
        href={`./icons/icon-48x48.png?v=${sha}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={`./icons/icon-72x72.png?v=${sha}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="96x96"
        href={`./icons/icon-96x96.png?v=${sha}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={`./icons/icon-144x144.png?v=${sha}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href={`./icons/icon-192x192.png?v=${sha}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="256x256"
        href={`./icons/icon-256x256.png?v=${sha}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="384x384"
        href={`./icons/icon-384x384.png?v=${sha}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href={`./icons/icon-512x512.png?v=${sha}`}
      />
      <link
        href="https://fonts.googleapis.com/css?family=Droid+Sans:300,400|Droid+Serif:400,700,400italic"
        rel="stylesheet"
        type="text/css"
      />
      <link href="./index.css" rel="stylesheet" type="text/css" />
    </head>
    <body>
      <a className="corner-ribbon" href="./Alex-Birdsall.pdf">
        view as PDF
      </a>
      <header>
        <div className="whoami">
          <h1>Alex Birdsall</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className="contact-info">
          <a className="contact" href="https://ambirdsall.com">
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
          <a
            className="contact"
            href="https://en.wikipedia.org/wiki/Portland,_Oregon"
          >
            <FaMapMarkerAlt />
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
          Generalist software engineer and full-stack web developer with 9+
          years of experience building scalable, user-friendly applications
          across diverse industries. Proficient in Postgres/SQL,
          JavaScript/TypeScript, React, Ruby, and Python, with a solid
          understanding of system architecture and design principles and a track
          record of effective cross-functional collaboration. A fast and curious
          learner who is passionate about solving problems for real people.
        </p>
        <section className="key-skills">
          <div className="skillset">
            <h4>Languages</h4>
            <ul>
              <li><SiTypescript />TypeScript</li>
              <li><SiRuby />Ruby</li>
              <li><SiGnubash />Bash</li>
              <li><SiPython />Python</li>
              <li><SiElixir />Elixir</li>
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
              <li><SiPostgresql />PostgreSQL</li>
              <li><SiLinux />Linux</li>
              <li><SiRedis />Redis</li>
              <li><SiDigitalocean />DigitalOcean</li>
              <li><SiGooglecloud />GCP</li>
              <li><SiAmazonwebservices />AWS</li>
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
                <SiPython />
                <SiFastapi />
                <SiPostgresql />
                <SiRedis />
                <SiDocker />
                <SiTypescript />
                <SiReact />
                <SiDigitalocean />
              </>
            }
          >
            <ul>
              <li>
                Designed and implemented a full rewrite of the lead outreach
                data model in the database and python backend, replacing a
                static hardcoded sequence with customizable workflows that
                support branching logic.
              </li>
              <li>
                Expanded outreach capabilities by integrating external services,
                requiring new systems for custom authentication, scheduling, and
                error handling.
              </li>
              <li>
                Optimized database performance and resolved critical cloud
                infrastructure issues.
              </li>
              <li>
                Delivered complex features across the stack, including
                enhancements to a React-based UI.
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
                <SiTypescript />
                <SiReact />
                <SiCypress />
                <SiPython />
                <SiKotlin />
                <SiOpenjdk />
                <SiGooglecloud />
              </>
            }
          >
            <ul>
              <li>
                Wrote full-stack enhancements for the Connector Builder tool, a
                WYSIWYG editor for user-authored definitions of data source
                connectors, involving updates to the react UI, the underlying
                python SDK which consumes the connector definitions, and HTTP
                endpoints across multiple java backend services.
              </li>
              <li>
                Shipped the UI for a DBT Cloud integration under a tight
                deadline, ensuring high-quality delivery.
              </li>
              <li>
                Restructured and modernized the Cypress end-to-end test suite
                for improved reliability and maintainability.
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
                <SiTypescript />
                <SiRuby />
                <SiRubyonrails />
                <SiElixir />
                <SiVuedotjs />
                <SiAngular />
                <SiCypress />
                <SiRedis />
                <SiGooglecloud />
                <SiAmazonwebservices />
              </>
            }
          >
            <ul>
              <li>
                Designed, implemented, and coordinated the cross-functional
                rollout of a complete rewrite of the main Rails app's
                advertising metrics system in the wake of disruptive external
                changes, preserving users' ability to capture campaign-specific
                metrics on the platform.
              </li>
              <li>
                Part of a small team who designed and built a new inventory
                management tool for campaigners. Personally designed an
                easily-deployed, high-performance frontend tech stack, relying
                on pre-generated static files, and helped write the
                Elixir/Phoenix backend.
              </li>
              <li>
                Migrated a legacy AngularJS checkout UI to Vue, improving
                performance and maintainability.
              </li>
              <li>
                Built and maintained a suite of Cypress tests, significantly
                improving integration test reliability.
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
                <SiTypescript />
                <SiScala />
                <SiAngular />
                <SiWebpack />
                <SiReact />
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
                file override system powering different whitelabeled builds of
                the frontend app, significantly improving DX by replacing
                implicit overrides from distant subdirectories with
                explicitly-named overrides from files colocated with their
                corresponding base implementation.
              </li>
              <li>
                Designed an A/B testing API, decoupling internal logic from a
                third-party backend for improved flexibility and
                maintainability.
              </li>
              <li>
                Contributed to the launch of a React frontend and its
                Scala-based REST API.
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
                  Built new features in a Rails app, including auto-tagging and
                  a custom A/B testing library.
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
                <SiRuby />
                <SiRubyonrails />
                <SiJavascript />
                <SiHtml5 />
                <SiGnubash />
                <SiCss3 />
              </>
            }
          >
            An immersive 19-week web development program. Over the final 9 weeks
            alone, I worked over 1000 hours at the San Francisco campus in an
            intensely collaborative environment that emphasized hands-on
            learning, empathy, communication, and problem-solving.
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
            Though seemingly unrelated, my studies centered on an interest in
            how human expression exists within and is influenced by logically
            analyzable systems like syntax, music theory, or grammar. I have
            found this to be surprisingly good preparation for the work of
            programming.
          </Entry>
        </div>
      </article>
    </body>
  </html>
)

export default IndexPage
