import Helmet from "react-helmet"
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
  SiGooglecloud, SiAmazonwebservices, SiDigitalocean
} from "react-icons/si"

import Entry from "../components/entry"
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
      <div className="whoami">
        <h1>Alex Birdsall</h1>
        <h2>Full Stack Web Developer</h2>
      </div>
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
    <article className="resume">
      <div className="left">
        <h3>Experience</h3>
        <Entry
          title="Artisan AI"
          titleLink="https://artisan.co"
          dates="Jul '24-Dec '24"
          skills={<>
            <SiPython/>
            <SiFastapi/>
            <SiPostgresql/>
            <SiRedis/>
            <SiDocker/>
            <SiTypescript/>
            <SiReact/>
            <SiDigitalocean/>
          </>}
        >
          <ul>
            <li>Designed and implemented a full rewrite of the lead outreach sequence model, transitioning from a hardcoded system to customizable workflows with branching logic.</li>
            <li>Expanded outreach capabilities by integrating external services with custom authentication, scheduling, and error handling.</li>
            <li>Optimized database performance and resolved critical cloud infrastructure issues.</li>
            <li>Delivered complex features across the stack, including enhancements to a React-based UI.</li>
          </ul>
        </Entry>
        <Entry
          title="Airbyte"
          titleLink="https://airbyte.com"
          dates="Aug '22-Mar '24"
          skills={<>
            <SiTypescript/>
            <SiReact/>
            <SiCypress/>
            <SiPython/>
            <SiOpenjdk/>
            <SiGooglecloud/>
          </>}
        >
          <ul>
            <li>Shipped the UI for a DBT Cloud integration under a tight deadline, ensuring high-quality delivery.</li>
            <li>Restructured and modernized the Cypress end-to-end test suite for improved reliability and maintainability.</li>
            <li>Enhanced the Connector Builder tool, implementing dynamic UI updates and backend changes to support user-authored connector definitions.</li>
          </ul>
        </Entry>
        <Entry
          title="Indiegogo"
          titleLink="https://indiegogo.com"
          dates="Feb '20-May '22"
          skills={<>
            <SiTypescript/>
            <SiRuby/>
            <SiRubyonrails/>
            <SiElixir/>
            <SiVuedotjs/>
            <SiAngular/>
            <SiCypress/>
            <SiRedis/>
            <SiGooglecloud/>
            <SiAmazonwebservices/>
          </>}
        >
          <ul>
            <li>Led a complete rewrite of the advertising metrics system in response to external policy changes, enhancing campaign performance insights for users.</li>
            <li>Designed and built a new inventory management tool for campaigners, outperforming the main site in speed and usability.</li>
            <li>Migrated a legacy AngularJS checkout UI to Vue, improving performance and maintainability.</li>
            <li>Built and maintained a suite of Cypress tests, significantly improving integration test reliability.</li>
          </ul>
        </Entry>
        <Entry
          title="SigFig"
          jobTitle='Software Engineer, Frontend'
          titleLink="https://sigfig.com"
          dates="Jul '17-Oct '19"
          skills={<>
            <SiTypescript/>
            <SiScala/>
            <SiAngular/>
            <SiWebpack/>
            <SiReact/>
          </>}
        >
          <ul>
            <li>Redesigned a large TypeScript/angularJS application’s build system: simplifying different whitelabeled builds with more explicit, modular overrides; migrating to ES2015 modules; and simplifying multilayered gulp+webpack build tooling to just webpack.</li>
            <li>Designed an A/B testing API, decoupling internal logic from a third-party backend for improved flexibility and maintainability.</li>
            <li>Contributed to the launch of a React frontend and its Scala-based REST API.</li>
          </ul>
        </Entry>
      </div>
      <div className="right">
        <Entry
          title="Early Career & Freelance Projects"
          jobTitle="Various Roles"
          dates="2014-2017"
          skills={<>
                  </>}
        >
          <dl>
            <li>
              <dt><a href="law.cornell.edu/rio">Legal Information Institute, Cornell Law</a></dt>
              <dd>Created a tool for parsing U.S. legal citations, generating direct links to the corresponding source documents.</dd>
            </li>
            <li>
              <dt><a href="https://emojidictionary.emojifoundation.com/">The Emoji Dictionary</a></dt>
              <dd>Improved SEO and database performance, optimizing user navigation and search engine indexing.</dd>
            </li>
            <li>
              <dt><a href="www.helloflock.com">Flock</a></dt>
              <dd>Developed secure integrations with third-party services, managing encryption challenges.</dd>
            </li>
            <li>
              <dt><a href="www.magoosh.com">Magoosh</a></dt>
              <dd>Built new features in a Rails app, including auto-tagging and a custom A/B testing library.</dd>
            </li>
          </dl>
        </Entry>
        <h3>Education</h3>
        <Entry
          title="Dev Bootcamp"
          titleLink="https://en.wikipedia.org/wiki/Dev_Bootcamp"
          dates="Jul-Sept '14"
          skills={<>
            <SiRuby/>
            <SiRubyonrails/>
            <SiJavascript/>
            <SiHtml5/>
            <SiGnubash/>
            <SiCss3/>
          </>}
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
          B.A. in English, minor in Music. Received 2007 Winnifred Van Etten Award
          for Creative and Scholarly Excellence.
          <br />
          <br />
          Though seemingly unrelated, my studies centered on an interest in how
          human expression exists within and is influenced by logically analyzable
          systems like syntax, music theory, or grammar. I have found this to be
          surprisingly good preparation for the work of programming.
        </Entry>
      </div>
    </article>
  </>
)

export default IndexPage
