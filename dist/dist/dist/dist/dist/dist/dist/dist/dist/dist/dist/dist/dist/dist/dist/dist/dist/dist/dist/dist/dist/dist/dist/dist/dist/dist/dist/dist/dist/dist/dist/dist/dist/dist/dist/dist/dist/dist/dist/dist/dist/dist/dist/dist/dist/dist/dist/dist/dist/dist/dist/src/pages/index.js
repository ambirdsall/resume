"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa");
var _si = require("react-icons/si");
var _entry = _interopRequireDefault(require("../components/entry"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
// "\u00a0" is unicode codepoint for non-breaking space
const unbroken = text => text.replace(" ", "\u00a0");
const description = 'Resume of Alex Birdsall, a Software Engineer based in Portland, Oregon';
const email = "ambirdsall@gmail.com";
const phone = new String("(802) 989-5647");
phone.plain = "802-989-5647";
const IndexPage = ({
  sha = 'e06ff3ac86a0c187840479eaa6cda49e' // the last gatsby-generated fingerprint, still valid for existing browser caches
}) => /*#__PURE__*/_react.default.createElement("html", {
  lang: "en"
}, /*#__PURE__*/_react.default.createElement("head", null, /*#__PURE__*/_react.default.createElement("title", null, "Alex Birdsall :: Software Engineer"), /*#__PURE__*/_react.default.createElement("meta", {
  name: "description",
  content: description
}), /*#__PURE__*/_react.default.createElement("meta", {
  charSet: "utf-8"
}), /*#__PURE__*/_react.default.createElement("meta", {
  httpEquiv: "x-ua-compatible",
  content: "ie=edge"
}), /*#__PURE__*/_react.default.createElement("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1, shrink-to-fit=no"
}), /*#__PURE__*/_react.default.createElement("meta", {
  property: "og:title",
  content: "Resum\xE9 | Alex Birdsall :: Software Engineer"
}), /*#__PURE__*/_react.default.createElement("meta", {
  property: "og:description",
  content: description
}), /*#__PURE__*/_react.default.createElement("meta", {
  property: "og:type",
  content: "website"
}), /*#__PURE__*/_react.default.createElement("link", {
  rel: "icon",
  href: `./favicon-32x32.png?v=${sha}`,
  type: "image/png"
}), /*#__PURE__*/_react.default.createElement("link", {
  rel: "apple-touch-icon",
  sizes: "48x48",
  href: `./icons/icon-48x48.png?v=${sha}`
}), /*#__PURE__*/_react.default.createElement("link", {
  rel: "apple-touch-icon",
  sizes: "72x72",
  href: `./icons/icon-72x72.png?v=${sha}`
}), /*#__PURE__*/_react.default.createElement("link", {
  rel: "apple-touch-icon",
  sizes: "96x96",
  href: `./icons/icon-96x96.png?v=${sha}`
}), /*#__PURE__*/_react.default.createElement("link", {
  rel: "apple-touch-icon",
  sizes: "144x144",
  href: `./icons/icon-144x144.png?v=${sha}`
}), /*#__PURE__*/_react.default.createElement("link", {
  rel: "apple-touch-icon",
  sizes: "192x192",
  href: `./icons/icon-192x192.png?v=${sha}`
}), /*#__PURE__*/_react.default.createElement("link", {
  rel: "apple-touch-icon",
  sizes: "256x256",
  href: `./icons/icon-256x256.png?v=${sha}`
}), /*#__PURE__*/_react.default.createElement("link", {
  rel: "apple-touch-icon",
  sizes: "384x384",
  href: `./icons/icon-384x384.png?v=${sha}`
}), /*#__PURE__*/_react.default.createElement("link", {
  rel: "apple-touch-icon",
  sizes: "512x512",
  href: `./icons/icon-512x512.png?v=${sha}`
}), /*#__PURE__*/_react.default.createElement("link", {
  href: "https://fonts.googleapis.com/css?family=Droid+Sans:300,400|Droid+Serif:400,700,400italic",
  rel: "stylesheet",
  type: "text/css"
}), /*#__PURE__*/_react.default.createElement("link", {
  href: "./index.css",
  rel: "stylesheet",
  type: "text/css"
})), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement("header", null, /*#__PURE__*/_react.default.createElement("div", {
  className: "whoami"
}, /*#__PURE__*/_react.default.createElement("h1", null, "Alex Birdsall"), /*#__PURE__*/_react.default.createElement("h2", null, "Full Stack Web Developer")), /*#__PURE__*/_react.default.createElement("div", {
  className: "contact-info"
}, /*#__PURE__*/_react.default.createElement("a", {
  className: "contact",
  href: "https://ambirdsall.com"
}, /*#__PURE__*/_react.default.createElement(_fa.FaGlobe, null), "ambirdsall.com"), /*#__PURE__*/_react.default.createElement("a", {
  className: "contact",
  href: `mailto:${email}`
}, /*#__PURE__*/_react.default.createElement(_fa.FaAt, null), email), /*#__PURE__*/_react.default.createElement("a", {
  className: "contact",
  href: `tel:${phone.plain}`
}, /*#__PURE__*/_react.default.createElement(_fa.FaPhone, null), unbroken(phone)), /*#__PURE__*/_react.default.createElement("a", {
  className: "contact",
  href: "https://en.wikipedia.org/wiki/Portland,_Oregon"
}, /*#__PURE__*/_react.default.createElement(_fa.FaMapMarkerAlt, null), "Portland, OR"), /*#__PURE__*/_react.default.createElement("a", {
  className: "contact",
  href: "https://github.com/ambirdsall"
}, /*#__PURE__*/_react.default.createElement(_fa.FaGithub, null), "ambirdsall"), /*#__PURE__*/_react.default.createElement("a", {
  className: "contact",
  href: "https://linkedin.com/in/ambirdsall"
}, /*#__PURE__*/_react.default.createElement(_fa.FaLinkedin, null), "ambirdsall")), /*#__PURE__*/_react.default.createElement("p", {
  className: "intro--description"
}, "Full-stack web developer with 9+ years of experience building scalable, user-friendly applications across diverse industries. Proficient in Python, TypeScript, React, and cloud technologies. Demonstrated success in designing and building complex features, optimizing systems, and collaborating with both nontechnical colleagues and other engineers to deliver high-impact solutions. Passionate about solving problems for users and developers through ethical and efficient development."), /*#__PURE__*/_react.default.createElement("section", {
  className: "key-skills"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "skillset"
}, /*#__PURE__*/_react.default.createElement("h4", null, "Languages"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_si.SiPython, null), "Python"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_si.SiTypescript, null), "TypeScript"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_si.SiRuby, null), "Ruby"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_si.SiGnubash, null), "Bash"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_si.SiScala, null), "Scala"))), /*#__PURE__*/_react.default.createElement("div", {
  className: "skillset"
}, /*#__PURE__*/_react.default.createElement("h4", null, "Frameworks"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_si.SiFastapi, null), "FastAPI"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_si.SiRubyonrails, null), "Rails"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_si.SiReact, null), "React"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_si.SiVuedotjs, null), "Vue"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_si.SiCypress, null), "Cypress"))), /*#__PURE__*/_react.default.createElement("div", {
  className: "skillset"
}, /*#__PURE__*/_react.default.createElement("h4", null, "Tools & Technologies"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_si.SiDocker, null), "Docker"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_si.SiPostgresql, null), "PostgreSQL"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_si.SiLinux, null), "Linux"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_si.SiRedis, null), "Redis"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_si.SiDigitalocean, null), "DigitalOcean"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_si.SiGooglecloud, null), "GCP"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_si.SiAmazonwebservices, null), "AWS"))), /*#__PURE__*/_react.default.createElement("div", {
  className: "skillset"
}, /*#__PURE__*/_react.default.createElement("h4", null, "Other"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "shell scripting"), /*#__PURE__*/_react.default.createElement("li", null, "REST API design"), /*#__PURE__*/_react.default.createElement("li", null, "database modeling"), /*#__PURE__*/_react.default.createElement("li", null, "CI/CD automation"), /*#__PURE__*/_react.default.createElement("li", null, "maintainable test code"))))), /*#__PURE__*/_react.default.createElement("article", {
  className: "resume"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "left"
}, /*#__PURE__*/_react.default.createElement("h3", null, "Experience"), /*#__PURE__*/_react.default.createElement(_entry.default, {
  title: "Artisan AI",
  titleLink: "https://artisan.co",
  dates: "Jul '24-Dec '24",
  skills: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_si.SiPython, null), /*#__PURE__*/_react.default.createElement(_si.SiFastapi, null), /*#__PURE__*/_react.default.createElement(_si.SiPostgresql, null), /*#__PURE__*/_react.default.createElement(_si.SiRedis, null), /*#__PURE__*/_react.default.createElement(_si.SiDocker, null), /*#__PURE__*/_react.default.createElement(_si.SiTypescript, null), /*#__PURE__*/_react.default.createElement(_si.SiReact, null), /*#__PURE__*/_react.default.createElement(_si.SiDigitalocean, null))
}, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Designed and implemented a full rewrite of the lead outreach sequence model, transitioning from a hardcoded system to customizable workflows with branching logic."), /*#__PURE__*/_react.default.createElement("li", null, "Expanded outreach capabilities by integrating external services with custom authentication, scheduling, and error handling."), /*#__PURE__*/_react.default.createElement("li", null, "Optimized database performance and resolved critical cloud infrastructure issues."), /*#__PURE__*/_react.default.createElement("li", null, "Delivered complex features across the stack, including enhancements to a React-based UI."))), /*#__PURE__*/_react.default.createElement(_entry.default, {
  title: "Airbyte",
  titleLink: "https://airbyte.com",
  dates: "Aug '22-Mar '24",
  skills: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_si.SiTypescript, null), /*#__PURE__*/_react.default.createElement(_si.SiReact, null), /*#__PURE__*/_react.default.createElement(_si.SiCypress, null), /*#__PURE__*/_react.default.createElement(_si.SiPython, null), /*#__PURE__*/_react.default.createElement(_si.SiOpenjdk, null), /*#__PURE__*/_react.default.createElement(_si.SiGooglecloud, null))
}, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Shipped the UI for a DBT Cloud integration under a tight deadline, ensuring high-quality delivery."), /*#__PURE__*/_react.default.createElement("li", null, "Restructured and modernized the Cypress end-to-end test suite for improved reliability and maintainability."), /*#__PURE__*/_react.default.createElement("li", null, "Enhanced the Connector Builder tool, implementing dynamic UI updates and backend changes to support user-authored connector definitions."))), /*#__PURE__*/_react.default.createElement(_entry.default, {
  title: "Indiegogo",
  titleLink: "https://indiegogo.com",
  dates: "Feb '20-May '22",
  skills: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_si.SiTypescript, null), /*#__PURE__*/_react.default.createElement(_si.SiRuby, null), /*#__PURE__*/_react.default.createElement(_si.SiRubyonrails, null), /*#__PURE__*/_react.default.createElement(_si.SiElixir, null), /*#__PURE__*/_react.default.createElement(_si.SiVuedotjs, null), /*#__PURE__*/_react.default.createElement(_si.SiAngular, null), /*#__PURE__*/_react.default.createElement(_si.SiCypress, null), /*#__PURE__*/_react.default.createElement(_si.SiRedis, null), /*#__PURE__*/_react.default.createElement(_si.SiGooglecloud, null), /*#__PURE__*/_react.default.createElement(_si.SiAmazonwebservices, null))
}, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Led a complete rewrite of the advertising metrics system in response to external policy changes, enhancing campaign performance insights for users."), /*#__PURE__*/_react.default.createElement("li", null, "Designed and built a new inventory management tool for campaigners, outperforming the main site in speed and usability."), /*#__PURE__*/_react.default.createElement("li", null, "Migrated a legacy AngularJS checkout UI to Vue, improving performance and maintainability."), /*#__PURE__*/_react.default.createElement("li", null, "Built and maintained a suite of Cypress tests, significantly improving integration test reliability."))), /*#__PURE__*/_react.default.createElement(_entry.default, {
  title: "SigFig",
  jobTitle: "Software Engineer, Frontend",
  titleLink: "https://sigfig.com",
  dates: "Jul '17-Oct '19",
  skills: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_si.SiTypescript, null), /*#__PURE__*/_react.default.createElement(_si.SiScala, null), /*#__PURE__*/_react.default.createElement(_si.SiAngular, null), /*#__PURE__*/_react.default.createElement(_si.SiWebpack, null), /*#__PURE__*/_react.default.createElement(_si.SiReact, null))
}, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Redesigned a large TypeScript/angularJS application\u2019s build system: simplifying different whitelabeled builds with more explicit, modular overrides; migrating to ES2015 modules; and simplifying multilayered gulp+webpack build tooling to just webpack."), /*#__PURE__*/_react.default.createElement("li", null, "Designed an A/B testing API, decoupling internal logic from a third-party backend for improved flexibility and maintainability."), /*#__PURE__*/_react.default.createElement("li", null, "Contributed to the launch of a React frontend and its Scala-based REST API.")))), /*#__PURE__*/_react.default.createElement("div", {
  className: "right"
}, /*#__PURE__*/_react.default.createElement(_entry.default, {
  title: "Early Career & Freelance Projects",
  jobTitle: "Various Roles",
  dates: "2014-2017",
  skills: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)
}, /*#__PURE__*/_react.default.createElement("dl", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("dt", null, /*#__PURE__*/_react.default.createElement("a", {
  href: "law.cornell.edu/rio"
}, "Legal Information Institute, Cornell Law")), /*#__PURE__*/_react.default.createElement("dd", null, "Created a tool for parsing U.S. legal citations, generating direct links to the corresponding source documents.")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("dt", null, /*#__PURE__*/_react.default.createElement("a", {
  href: "https://emojidictionary.emojifoundation.com/"
}, "The Emoji Dictionary")), /*#__PURE__*/_react.default.createElement("dd", null, "Improved SEO and database performance, optimizing user navigation and search engine indexing.")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("dt", null, /*#__PURE__*/_react.default.createElement("a", {
  href: "www.helloflock.com"
}, "Flock")), /*#__PURE__*/_react.default.createElement("dd", null, "Developed secure integrations with third-party services, managing encryption challenges.")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("dt", null, /*#__PURE__*/_react.default.createElement("a", {
  href: "www.magoosh.com"
}, "Magoosh")), /*#__PURE__*/_react.default.createElement("dd", null, "Built new features in a Rails app, including auto-tagging and a custom A/B testing library.")))), /*#__PURE__*/_react.default.createElement("h3", null, "Education"), /*#__PURE__*/_react.default.createElement(_entry.default, {
  title: "Dev Bootcamp",
  titleLink: "https://en.wikipedia.org/wiki/Dev_Bootcamp",
  dates: "Jul-Sept '14",
  skills: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_si.SiRuby, null), /*#__PURE__*/_react.default.createElement(_si.SiRubyonrails, null), /*#__PURE__*/_react.default.createElement(_si.SiJavascript, null), /*#__PURE__*/_react.default.createElement(_si.SiHtml5, null), /*#__PURE__*/_react.default.createElement(_si.SiGnubash, null), /*#__PURE__*/_react.default.createElement(_si.SiCss3, null))
}, "An immersive 19-week web development program. Over the final 9 weeks alone, I worked over 1000 hours at the San Francisco campus in an intensely collaborative environment that emphasized hands-on learning, empathy, communication, and problem-solving."), /*#__PURE__*/_react.default.createElement(_entry.default, {
  title: "Portland Community College",
  titleLink: "www.pcc.edu",
  dates: "Nov '12-Jun '14",
  skills: []
}, "While working as an art teacher, independently pursued interests in Statistics and Computer Science. Where I discovered how much I enjoy programming."), /*#__PURE__*/_react.default.createElement(_entry.default, {
  title: "Cornell College",
  titleLink: "https://cornellcollege.edu/",
  dates: "Class of '08",
  skills: []
}, "B.A. in English, minor in Music. Received 2007 Winnifred Van Etten Award for Creative and Scholarly Excellence.", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Though seemingly unrelated, my studies centered on an interest in how human expression exists within and is influenced by logically analyzable systems like syntax, music theory, or grammar. I have found this to be surprisingly good preparation for the work of programming.")))));
var _default = exports.default = IndexPage;