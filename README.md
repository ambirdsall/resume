# My resume

Does what it says on the tin. Defined in jsx (cf. `src/pages/index.js`), rendered at build time to a static html file. No framework cleverness, poke around `scripts/` to see how things work.

To build locally:
- `npm install`
- `npm start`
- navigate to `localhost:8080` with a browser
- edit to your heart's content

File watching is quite bare-bones; changes to files within `src/` which already existed at
the time you ran `npm start` will trigger a rebuild, but adding or changing new files will
not.

To deploy changes, run
``` sh
npm run deploy
```
