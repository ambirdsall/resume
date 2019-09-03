(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{188:function(e,t,a){"use strict";a.r(t);var n=a(189),i=a.n(n),r=a(0),l=a.n(r),o=(a(14),a(50),function(e){var t=e.name,a=e.title,n=e.phone,i=e.email,r=e.children;return l.a.createElement("header",{className:"block intro"},l.a.createElement("div",{className:"intro--nameplate"},l.a.createElement("h1",{className:"nameplate__name"},t),l.a.createElement("h2",{className:"nameplate__title"},a.toUpperCase())),l.a.createElement("div",{className:"intro--contact-info"},l.a.createElement("div",{className:"block contact-info--item item__left"},n.replace(" "," ")),l.a.createElement("div",{className:"block contact-info--item item__right"},l.a.createElement("a",{href:"mailto:"+i},i))),l.a.createElement("div",{className:"intro--description"},l.a.createElement("p",null," ",r," ")))}),s=function(e){return l.a.createElement(l.a.Fragment,null,e,l.a.createElement("br",null))},c=function(e){var t=e.title,a=e.titleLink,n=e.dates,i=e.skills,r=e.children;return l.a.createElement("div",{className:"block entry"},l.a.createElement("div",{className:"block entry--context"},l.a.createElement("div",{className:"context__dates"},n.replace("'","’").replace("-","–")),l.a.createElement("div",{className:"context__skills"},i.map(s))),l.a.createElement("div",{className:"block entry--body"},l.a.createElement("h3",{className:"entry--title"},l.a.createElement("a",{href:a},t)),l.a.createElement("p",{className:"entry--description"},r)))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"work-experience",className:"block-group"},l.a.createElement(c,{title:"SigFig",titleLink:"https://sigfig.com",dates:"Jul '17-Present",skills:["typescript","scala","angularJS","frontend builds","react","A/B testing"]},"My first role at SigFig was as an angularJS dev. Along with developing unit-tested features and fixing bugs, I helped redesign the build system of a large whitelabeled typescript app to use ES2015 modules and manage dependencies with npm or yarn; I converted hundreds of files to the new system during the migration. I personally refactored the build system to decouple its new build tool from its old one, significantly simplifying its configuration. I also designed the component A/B testing API and rewrote its integration with a 3rd-party user assignment backend, using a modular design so that the testing backend could easily be replaced by a better alternative down the line. I was also involved in the early stages of work with a new frontend application using typescript and react.",l.a.createElement("br",null),l.a.createElement("br",null),"Soon after, I transfered over to work on building the Scala backend service which supports that product. I helped spec out the REST API, and I wrote code which aggregated and composed data from various microservices to simplify complex, paperwork-heavy workflows."),l.a.createElement(c,{title:"Legal Information Institute, Cornell Law",titleLink:"https://law.cornell.edu/rio",dates:"Aug '16-Jun '17",skills:["ES2015","build scripts","browser caching"]},"Cornell Law School picked up the Lawfetcher project, rebranding it as RIO (Read It Online) and hiring me to maintain and expand it. I refactored and completed test coverage of the domain logic; wrote code to parse a broader set of citation types and link to more sources; converted the build process to transpile modular ES2015 application code and tests; and implemented a ",l.a.createElement("a",{href:"http://guides.rubyonrails.org/asset_pipeline.html#what-is-fingerprinting-and-why-should-i-care-questionmark"},"filename fingerprinting")," system to manage browser caching, enabling both frequent, iterative code deployment and efficient loading."),l.a.createElement(c,{title:"The Emoji Dictionary",titleLink:"https://emojidictionary.emojifoundation.com/",dates:"Jan '17-Jun '17",skills:["php 7","Apache","build scripts","SEO"]},"As a consultant, I did freelance work for The Emoji Foundation's crowdsourced Emoji Dictionary. The work focused on human-readable URLs, rewriting database queries and building indexes for clarity and efficiency, and other SEO and performance fundamentals, as well as extracting shared templates and refactoring old code for better semantics and maintainability."),l.a.createElement(c,{title:"Flock",titleLink:"www.helloflock.com",dates:"Jan '16-July '16",skills:["Rails 4","Middleman","SCSS","encryption & authentication"]},"As software engineer for an HR and compliance startup, I worked with the entire stack from stylesheets to server ops. I maintained Middleman static sites for the company's landing page and blog as well as its Rails app. I personally implemented secure and user-friendly integrations with TraxPayroll and Greenhouse.io, which involved complicated data mapping, multiple forms of encryption, and, at times, working with out-of-date and contradictory documentation. I organized both the stylesheets and javascript assets, spanning hundreds of files (some containing several thousands of lines); and in general, worked hard to model and advocate for consistency of data modeling, clear and explicit API boundaries, and well-designed abstraction on a codebase, initially built by foreign contractors, that left much to be desired in those regards."),l.a.createElement(c,{title:"Lawfetcher",titleLink:"http://www.access-to-law.com/lawfetcher",dates:"Aug '15-Dec '15",skills:["JavaScript","regular expressions","browserify"]},"A freelance project in collaboration with Emeritus Prof. Peter W. Martin of Cornell Law. A free tool for legal writing, it semantically parses US legal citations and programmatically builds direct links to the full text in various free and subscription services. More regular expressions than you can shake a stick at."),l.a.createElement(c,{title:"Magoosh",titleLink:"www.magoosh.com",dates:"Jan '15-Mar '15",skills:["MySQL","Rails 3","CoffeeScript","HAML","Bootstrap"]},"I worked as a junior dev with Magoosh, a leader in online test prep based in Berkeley. I shipped many features, including auto-tagging for support tickets, an instructor dashboard, an in-house A/B testing library, and a photo upload system for static pages. I focused intensely on improving the design quality and professionalism of my code.")),l.a.createElement("div",{id:"education",className:"block-group"},l.a.createElement(c,{title:"Dev Bootcamp",titleLink:"https://en.wikipedia.org/wiki/Dev_Bootcamp",dates:"Jul-Sept '14",skills:["Programming & web fundamentals","git & *nix CLI","Ruby & Rails","JavaScript, HTML, & CSS"]},"An immersive 19-week web development program. Over the final 9 weeks alone, I worked over 1000 hours at the San Francisco campus in an intensely collaborative environment that emphasized hands-on learning, empathy, communication, and problem-solving."),l.a.createElement(c,{title:"Portland Community College",titleLink:"www.pcc.edu",dates:"Nov '12-Jun '14",skills:[]},"While working as an art teacher, independently pursued interests in Statistics and Computer Science. Where I discovered how much I enjoy programming."),l.a.createElement(c,{title:"Cornell College",titleLink:"https://cornellcollege.edu/",dates:"Class of '08",skills:[]},"B.A. in English, minor in Music. Received 2007 Winnifred Van Etten Award for Creative and Scholarly Excellence.",l.a.createElement("br",null),l.a.createElement("br",null),"Though seemingly unrelated, my studies centered on an interest in how human expression exists within and is influenced by logically analyzable systems like syntax, music theory, or grammar. I have found this to be surprisingly good preparation for the work of programming.")))},m=a(198);function p(e){var t=e.description,a=e.lang,n=e.meta,r=e.title,o=m.data.site,s=t||o.siteMetadata.description;return l.a.createElement(i.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:r},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:s}].concat(n)})}p.defaultProps={lang:"en",meta:[],description:""};var u=p;a(199),t.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Droid+Sans:300,400|Droid+Serif:400,700,400italic",rel:"stylesheet",type:"text/css"})),l.a.createElement(u,{title:"Alex Birdsall, Software Engineer"}),l.a.createElement("div",{className:"block-group container"},l.a.createElement(o,{name:"Alex Birdsall",title:"Full Stack Web Developer",phone:"(802) 989-5647",email:"ambirdsall@gmail.com"},"I care about solving problems and I hope to build beautiful, logically interesting things, working in a team that cares about ethics, collaboration, and quality."),l.a.createElement(d,null)))}},198:function(e){e.exports={data:{site:{siteMetadata:{title:"Alex Birdsall :: Software Engineer",description:"Resume of Alex Birdsall, San Francisco-based Software Engineer",author:"@ambirdsall"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-346f7a0b55a6a2ffd791.js.map