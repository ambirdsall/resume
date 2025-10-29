#import "@preview/fontawesome:0.5.0": *
#import "@preview/modernpro-coverletter:0.0.6": *

#show: statement.with(
  font-type: "PT Serif",
  name: [Alex Birdsall],
  address: [],
  contacts: (
    (text: [#fa-icon("location-dot") Portland, OR]),
    (text: [#fa-icon("mobile") 802-989-5647], link: "tel:802-989-5647"),
    (text: [#fa-icon("link") ambirdsall.com], link: "https://ambirdsall.com"),
    (text: [#fa-icon("github") github], link: "https://github.com/ambirdsall"),
    (text: [#fa-icon("envelope") ambirdsall\@gmail.com], link: "mailto:ambirdsall@gmail.com"),
  ),
)

#v(1em)
#align(center, text(13pt, weight: "semibold")[#underline([Title])])
#set par(first-line-indent: 2em, justify: true)
#set text(11pt, weight: "regular")

// Main body of the statement
