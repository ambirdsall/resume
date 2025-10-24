import React from "react"

const description =
  "Resume of Alex Birdsall, a Software Engineer based in Portland, Oregon"

export const Head = ({ sha }) => (
  <head>
    <title>Alex Birdsall :: Software Engineer</title>
    <meta name="description" content={description} />
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta
      property="og:title"
      content="Resumé | Alex Birdsall :: Software Engineer"
    />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <link rel="icon" href={`./favicon-32x32.png?v=${sha}`} type="image/png" />
    <link
      rel="apple-touch-icon"
      sizes="48x48"
      href={`./icons/icon-48x48.png?v=${sha}`}
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href={`./icons/icon-72x72.png?v=${sha}`}
    />
    <link
      rel="apple-touch-icon"
      sizes="96x96"
      href={`./icons/icon-96x96.png?v=${sha}`}
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href={`./icons/icon-144x144.png?v=${sha}`}
    />
    <link
      rel="apple-touch-icon"
      sizes="192x192"
      href={`./icons/icon-192x192.png?v=${sha}`}
    />
    <link
      rel="apple-touch-icon"
      sizes="256x256"
      href={`./icons/icon-256x256.png?v=${sha}`}
    />
    <link
      rel="apple-touch-icon"
      sizes="384x384"
      href={`./icons/icon-384x384.png?v=${sha}`}
    />
    <link
      rel="apple-touch-icon"
      sizes="512x512"
      href={`./icons/icon-512x512.png?v=${sha}`}
    />
    <link
      href="https://fonts.googleapis.com/css?family=Droid+Sans:300,400|Droid+Serif:400,700,400italic"
      rel="stylesheet"
      type="text/css"
    />
    <link href="./index.css" rel="stylesheet" type="text/css" />
  </head>
)
