const puppeteer = require("puppeteer")

let browser
(async () => {
  browser = await puppeteer.launch({
    // Bizarrely, without this option `page.pdf(...)` works only when commands are typed
    // directly into a node repl, but not inside a script
    headless: false,
  })
  const page = await browser.newPage()

  console.log("going to page...")
  await page.goto("http://localhost:8080", {
    waitUntil: "networkidle2",
  })

  console.log("bringing page to front...")
  await page.bringToFront()

  console.log("printing to pdf...")
  await page.pdf({
    path: "dist/Alex-Birdsall.pdf",
    printBackground: true,
  })

  console.log("closing browser...")
  await browser.close()
  console.log("donezo")
})().finally(() => browser?.close())
