import React from "react"

const Header = () => (
  <header className="block intro">
    <div className="intro--nameplate">
      <h1 className="nameplate__name">Alex Birdsall</h1>
      <h2 className="nameplate__title">FULL STACK WEB DEVELOPER</h2>
    </div>
    <div className="intro--contact-info">
      <div className="block contact-info--item item__left">(802)&nbsp;989-5647</div>
      <div className="block contact-info--item item__right">
        <a href="mailto:ambirdsall@gmail.com">ambirdsall@gmail.com</a>
      </div>
    </div>
    <div className="intro--description">
      <p> I care about solving problems and I hope to build beautiful, logically interesting things, working in
      a team that cares about ethics, collaboration, and quality.
      </p>
    </div>
  </header>
)

export default Header
