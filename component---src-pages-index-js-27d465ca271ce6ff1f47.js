(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n("q1tI"),i=r(a),o=r(n("Gytx"));function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function d(){s=e(u.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var l=a.prototype;return l.shouldComponentUpdate=function(e){return!o(e,this.props)},l.componentWillMount=function(){u.push(this),d()},l.componentDidUpdate=function(){d()},l.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),d()},l.render=function(){return i.createElement(r,this.props)},a}(a.Component);return l(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(p,"canUseDOM",c),p}}},EDuE:function(e,t,n){},Gytx:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var s=i[c];if(!l(s))return!1;var u=e[s],d=t[s];if(!1===(a=n?n.call(r,u,d,s):void 0)||void 0===a&&u!==d)return!1}return!0}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("TJpk"),a=n.n(r),i=n("q1tI"),o=n.n(i),l=function(e){var t=e.name,n=e.title,r=e.phone,a=e.email,i=e.children;return o.a.createElement("header",{className:"block intro"},o.a.createElement("div",{className:"intro--nameplate"},o.a.createElement("h1",{className:"nameplate__name"},t),o.a.createElement("h2",{className:"nameplate__title"},n.toUpperCase())),o.a.createElement("div",{className:"intro--contact-info"},o.a.createElement("div",{className:"block contact-info--item item__left"},r.replace(" "," ")),o.a.createElement("div",{className:"block contact-info--item item__right"},o.a.createElement("a",{href:"mailto:"+a},a))),o.a.createElement("div",{className:"intro--description"},o.a.createElement("p",null," ",i," ")))},c=function(e){return o.a.createElement(o.a.Fragment,null,e,o.a.createElement("br",null))},s=function(e){var t=e.title,n=e.titleLink,r=e.dates,a=e.skills,i=e.children;return o.a.createElement("div",{className:"block entry"},o.a.createElement("div",{className:"block entry--context"},o.a.createElement("div",{className:"context__dates"},r.replace("'","’").replace("-","–")),o.a.createElement("div",{className:"context__skills"},a.map(c))),o.a.createElement("div",{className:"block entry--body"},o.a.createElement("h3",{className:"entry--title"},o.a.createElement("a",{href:n},t)),o.a.createElement("p",{className:"entry--description"},i)))},u=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"work-experience",className:"block-group"},o.a.createElement(s,{title:"Indiegogo",titleLink:"https://indiegogo.com",dates:"Feb '20-May '22",skills:["typescript","rails","elixir/phoenix","vue/nuxt","cypress","redis"]},'For two and a half years, I worked as a full-stack developer at Indiegogo. I helped rewrite the legacy payment processing and checkout experience from angularJS to vue; implementing a new suite of integration tests (including its CI and github integration) using Cypress, leading to faster, cheaper test runs, fewer test flakes, and improved developer experience. I personally designed and implemented a total rewrite of the advertising metric gathering campaigners rely on after a facebook policy change, which involved frontend changes, database updates, a new set of API interactions, and extremely high-volume async job processing. It also required close coordination with nontechnical stakeholders both internal and external and thorough documentation. I played a key role in the design and implementation of an upcoming product, a new web app to help campaigners manage inventory, shipping, and backer communication. I specifically was responsible for the new product\'s frontend architecture and testing strategy. With its Elixir backend and an aggressively prerendered vue frontend, the site performance dramatically outperformed the legacy Indiegogo website (particularly its time to first byte, largest contentful paint, and time to interactive measurements) while using similar technologies to minimize the learning curve for other devs and unblock future "upstreaming" of improvements to the indiegogo.com frontend.'),o.a.createElement(s,{title:"SigFig",titleLink:"https://sigfig.com",dates:"Jul '17-Oct '19",skills:["typescript","scala","angularJS","frontend builds","react","A/B testing"]},"Working primarily as a frontend engineer at a digital wealth management startup, I helped redesign the build system of a large whitelabeled typescript app to use ES2015 modules and manage dependencies with npm or yarn; I converted thousands of files to the new system during the migration. I personally refactored the build system to remove its gulp dependency, dramatically simplifying configuration work. I also designed the frontend A/B testing API and rewrote its integration with a 3rd-party assignment backend, using a more modular design to decouple internal code from the idiosyncracies of that vendor. I helped launch a new typescript/react frontend application, including work on its Scala REST API."),o.a.createElement(s,{title:"Legal Information Institute, Cornell Law",titleLink:"https://law.cornell.edu/rio",dates:"Aug '16-Jun '17",skills:["ES2015","build scripts","browser caching"]},"Cornell Law School picked up the Lawfetcher project, rebranding it as RIO (Read It Online) and hiring me to maintain and expand it. I refactored and completed test coverage of the domain logic; wrote code to parse a broader set of citation types and link to more sources; converted the build process to transpile modular ES2015 application code and tests; and implemented a ",o.a.createElement("a",{href:"http://guides.rubyonrails.org/asset_pipeline.html#what-is-fingerprinting-and-why-should-i-care-questionmark"},"filename fingerprinting")," system to manage browser caching, enabling both frequent, iterative code deployment and efficient loading."),o.a.createElement(s,{title:"The Emoji Dictionary",titleLink:"https://emojidictionary.emojifoundation.com/",dates:"Jan '17-Jun '17",skills:["php 7","Apache","build scripts","SEO"]},"As a consultant, I did freelance work for The Emoji Foundation's crowdsourced Emoji Dictionary. The work focused on human-readable URLs, rewriting database queries and building indexes for clarity and efficiency, and other SEO and performance fundamentals, as well as extracting shared templates and refactoring old code for better semantics and maintainability."),o.a.createElement(s,{title:"Flock",titleLink:"www.helloflock.com",dates:"Jan '16-July '16",skills:["Rails 4","Middleman","SCSS","encryption & authentication"]},"As software engineer for an HR and compliance startup, I worked with the entire stack from stylesheets to server ops. I maintained statically-built marketing sites as well as its Rails app. I personally implemented secure and user-friendly integrations with TraxPayroll and Greenhouse.io, which involved complicated data mapping, multiple forms of encryption, and, at times, working with out-of-date and contradictory documentation."),o.a.createElement(s,{title:"Lawfetcher",titleLink:"http://www.access-to-law.com/lawfetcher",dates:"Aug '15-Dec '15",skills:["JavaScript","regular expressions","browserify"]},"A freelance project in collaboration with Emeritus Prof. Peter W. Martin of Cornell Law. A free tool for legal writing, it semantically parses US legal citations and programmatically builds direct links to the full text in various free and subscription services."),o.a.createElement(s,{title:"Magoosh",titleLink:"www.magoosh.com",dates:"Jan '15-Mar '15",skills:["MySQL","Rails 3","CoffeeScript","HAML","Bootstrap"]},"I worked as a junior dev with Magoosh, a leader in online test prep based in Berkeley. I shipped many features, including auto-tagging for support tickets, an instructor dashboard, an in-house A/B testing library, and a photo upload system for static pages. I focused intensely on improving the design quality and professionalism of my code.")),o.a.createElement("div",{id:"education",className:"block-group"},o.a.createElement(s,{title:"Dev Bootcamp",titleLink:"https://en.wikipedia.org/wiki/Dev_Bootcamp",dates:"Jul-Sept '14",skills:["Programming & web fundamentals","git & *nix CLI","Ruby & Rails","JavaScript, HTML, & CSS"]},"An immersive 19-week web development program. Over the final 9 weeks alone, I worked over 1000 hours at the San Francisco campus in an intensely collaborative environment that emphasized hands-on learning, empathy, communication, and problem-solving."),o.a.createElement(s,{title:"Portland Community College",titleLink:"www.pcc.edu",dates:"Nov '12-Jun '14",skills:[]},"While working as an art teacher, independently pursued interests in Statistics and Computer Science. Where I discovered how much I enjoy programming."),o.a.createElement(s,{title:"Cornell College",titleLink:"https://cornellcollege.edu/",dates:"Class of '08",skills:[]},"B.A. in English, minor in Music. Received 2007 Winnifred Van Etten Award for Creative and Scholarly Excellence.",o.a.createElement("br",null),o.a.createElement("br",null),"Though seemingly unrelated, my studies centered on an interest in how human expression exists within and is influenced by logically analyzable systems like syntax, music theory, or grammar. I have found this to be surprisingly good preparation for the work of programming.")))},d=n("Wbzz");function p(e){var t=e.description,n=e.lang,r=e.meta,i=e.title,l=Object(d.useStaticQuery)("63159454").site,c=t||l.siteMetadata.description;return o.a.createElement(a.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(r)})}p.defaultProps={lang:"en",meta:[],description:""};var f=p;n("EDuE"),t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,null,o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Droid+Sans:300,400|Droid+Serif:400,700,400italic",rel:"stylesheet",type:"text/css"})),o.a.createElement(f,{title:"Alex Birdsall, Software Engineer"}),o.a.createElement("div",{className:"block-group container"},o.a.createElement(l,{name:"Alex Birdsall",title:"Full Stack Web Developer",phone:"(802) 989-5647",email:"ambirdsall@gmail.com"},"I care about solving problems and I hope to build beautiful, logically interesting things, working in a team that cares about ethics, collaboration, quality, and user experience."),o.a.createElement(u,null)))}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=d(n("q1tI")),o=d(n("17x9")),l=d(n("8+s/")),c=d(n("bmMU")),s=n("v1p5"),u=n("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var T,E,h,y=(0,l.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),g=(T=y,h=E=function(e){function t(){return f(this,t),m(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,i=e.newProps,o=e.newChildProps,l=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return r({},i,((t={})[a.type]=l,t.titleAttributes=r({},o),t));case u.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},o)});case u.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},o)})}return r({},i,((n={})[a.type]=r({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=p(a,["children"]),l=(0,s.convertReactPropstoHtmlAttributes)(o);switch(n.warnOnInvalidChildren(e,i),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(T,a)},a(t,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),t}(i.default.Component),E.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=T.peek,E.rewind=function(){var e=T.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},bmMU:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var l,c,s,u=r(t),d=r(n);if(u&&d){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(u!=d)return!1;var p=t instanceof Date,f=n instanceof Date;if(p!=f)return!1;if(p&&f)return t.getTime()==n.getTime();var m=t instanceof RegExp,T=n instanceof RegExp;if(m!=T)return!1;if(m&&T)return t.toString()==n.toString();var E=a(t);if((c=E.length)!==a(n).length)return!1;for(l=c;0!=l--;)if(!i.call(n,E[l]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(l=c;0!=l--;)if(!("_owner"===(s=E[l])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("E9XD"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,n){(function(e){n("E9XD"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n("q1tI")),o=c(n("YVoz")),l=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=E(e,l.TAG_NAMES.TITLE),n=E(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=E(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return E(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},f=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},m=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},T=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===t.indexOf(s)||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===l.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==l.TAG_PROPERTIES.INNER_HTML&&c!==l.TAG_PROPERTIES.CSS_TEXT&&c!==l.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),c=0;c<i.length;c++){var s=i[c],u=(0,o.default)({},a[s],r[s]);a[s]=u}return e}),[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){h(e)}),0)}),y=function(e){return clearTimeout(e)},g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,v=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,d=e.styleTags,p=e.title,f=e.titleAttributes;R(l.TAG_NAMES.BODY,r),R(l.TAG_NAMES.HTML,a),_(p,f);var m={baseTag:I(l.TAG_NAMES.BASE,n),linkTags:I(l.TAG_NAMES.LINK,i),metaTags:I(l.TAG_NAMES.META,o),noscriptTags:I(l.TAG_NAMES.NOSCRIPT,c),scriptTags:I(l.TAG_NAMES.SCRIPT,u),styleTags:I(l.TAG_NAMES.STYLE,d)},T={},E={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(E[e]=m[e].oldTags)})),t&&t(),s(e,T,E)},w=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=w(e)),R(l.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var d=i.indexOf(s);-1!==d&&i.splice(d,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);a.length===i.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,o.join(","))}},I=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},P=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t}),t)},O=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[l.HELMET_ATTRIBUTE]=!0,a=M(n,r),[i.default.createElement(l.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=P(n),i=w(t);return a?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+">"+u(i,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+u(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){S&&A(S),e.defer?S=g((function(){v(e,(function(){S=null}))})):(v(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,d=e.title,p=void 0===d?"":d,f=e.titleAttributes;return{base:O(l.TAG_NAMES.BASE,t,r),bodyAttributes:O(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:O(l.ATTRIBUTE_NAMES.HTML,a,r),link:O(l.TAG_NAMES.LINK,i,r),meta:O(l.TAG_NAMES.META,o,r),noscript:O(l.TAG_NAMES.NOSCRIPT,c,r),script:O(l.TAG_NAMES.SCRIPT,s,r),style:O(l.TAG_NAMES.STYLE,u,r),title:O(l.TAG_NAMES.TITLE,{title:p,titleAttributes:f},r)}},t.reducePropsToState=function(e){return{baseTag:m([l.TAG_PROPERTIES.HREF],e),bodyAttributes:f(l.ATTRIBUTE_NAMES.BODY,e),defer:E(e,l.HELMET_PROPS.DEFER),encode:E(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:f(l.ATTRIBUTE_NAMES.HTML,e),linkTags:T(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:T(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:T(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:f(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=g,t.warn=b}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-js-27d465ca271ce6ff1f47.js.map