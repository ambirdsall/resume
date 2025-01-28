import React from "react"
import ReactDOMServer from "react-dom/server"
import Page from "../src/pages/index.js"
import fs from "fs"

const html = ReactDOMServer.renderToStaticMarkup(<Page />)
const fullHtml = `<!DOCTYPE html>${html}`

console.log(fullHtml)
// fs.writeFileSync("dist/index.html", fullHtml)
