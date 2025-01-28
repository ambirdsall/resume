# My resume

Does what it says on the tin. Defined in jsx (cf. `src/pages/index.js`), rendered at build time to a static html file. No framework cleverness, poke around `scripts/` to see how things work.

To build locally:
- `npm install`
- `npm start`
- navigate to `localhost:8080` with a browser

This is a very bare-bones project, so there's no built-in file-watching; any time you
change the jsx source, you have to manually rebuild the static page. For development, try something like:
``` sh
find src | entr npm run render
```

(Installing `entr` is left as an exercise to the reader.)

To deploy changes, run
``` sh
npm run deploy
```
