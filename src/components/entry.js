import React from "react"
import { FaCalendarAlt } from "react-icons/fa"

const formatDate = dateString =>
  dateString
    .replaceAll("'", "’")
    .replace("-", "–")
    .replaceAll(" ", " ")

const Title = ({ title, titleLink, jobTitle }) => {
  let titleElement
  if (titleLink) {
    titleElement = (
      <a href={titleLink} className="entry-title-per-se">
        {title}
      </a>
    )
  } else {
    titleElement = <span className="entry-title-per-se">{title}</span>
  }

  if (jobTitle) {
    titleElement = (
      <>
        {titleElement}, {jobTitle}
      </>
    )
  }
  return <h4 className="entry-title">{titleElement}</h4>
}

export const Entry = ({
  title,
  titleLink,
  jobTitle,
  dates,
  skills,
  children,
}) => (
  <div className="entry">
    <Title title={title} titleLink={titleLink} jobTitle={jobTitle} />
    <div className="entry-dates">
      <FaCalendarAlt />
      {formatDate(dates)}
    </div>
    <div className="">{skills}</div>
    <p className="">{children}</p>
  </div>
)

export default Entry
