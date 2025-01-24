import React from "react"

const formatDate = dateString => dateString.replaceAll("'", "’").replace("-", "–").replaceAll(" ", " ")

const Entry = ({
  title,
  titleLink,
  dates,
  skills,
  children,
}) => (
  <div className="entry">
    <h4 className="entry-title">
      <a href={titleLink}>
        {title}
      </a>
    </h4>
    <div className="entry-dates">{formatDate(dates)}</div>
    <div className="">
      {skills}
    </div>
    <p className="">
      {children}
    </p>
  </div>
)

export default Entry
