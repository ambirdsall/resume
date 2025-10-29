#import "@preview/fontawesome:0.5.0": *
#import "@preview/modernpro-coverletter:0.0.6": *

#show: coverletter.with(
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
  recipient: (
    start-title: [],
    cl-title: [],
    date: [],
    department: [],
    institution: [NAME_OF_COMPANY Engineering],
    address: [],
    postcode: [],
  ),
)

#set par(justify: true, first-line-indent: 2em)
#set text(weight: "regular", size: 12pt)

// Main body of the cover letter
