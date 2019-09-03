import React from "react"

// non-breaking space
const NBSP = "\u00a0"

const Nameplate = ({
  name,
  title,
  phone,
  email,
  children,
}) => (
  <header className="block intro">
    <div className="intro--nameplate">
      <h1 className="nameplate__name">{name}</h1>
      <h2 className="nameplate__title">{title.toUpperCase()}</h2>
    </div>
    <div className="intro--contact-info">
      <div className="block contact-info--item item__left">{phone.replace(" ", NBSP)}</div>
      <div className="block contact-info--item item__right">
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
    <div className="intro--description">
      <p> {children} </p>
    </div>
  </header>
)

export default Nameplate
