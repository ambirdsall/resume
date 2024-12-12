import React from "react"

const toSkill = s => <>{s}<br/></>
const formatDate = dateString => dateString.replaceAll("'", "’").replace("-", "–").replaceAll(" ", " ")

const Entry = ({
  title,
  titleLink,
  dates,
  skills,
  children,
}) => (
  <div className="block entry">
    <div className="block entry--context">
      <div className="context__dates">{formatDate(dates)}</div>
      <div className="context__skills">
        {skills.map(toSkill)}
      </div>
    </div>
    <div className="block entry--body">
      <h3 className="entry--title">
        <a href={titleLink}>
          {title}
        </a>
      </h3>
      <p className="entry--description">
        {children}
      </p>
    </div>
  </div>
)

export default Entry
