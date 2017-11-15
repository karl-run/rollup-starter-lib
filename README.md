# rollup-starter-lib-react

This repo contains a bare-bones example of how to create a library using Rollup, including importing a module from `node_modules` and converting it from CommonJS.

Note: This is a fork of [rollup/rollup-starter-lib](https://github.com/rollup/rollup-starter-lib) that adds support for creating React-components using rollup. If you want to create normal pure JS components please use the original project.

We're creating a library called `how-long-till-lunch`, which usefully tells us how long we have to wait until lunch in a simple ugly React component. Enough to get you started!

## Getting started

Clone this repository and install its dependencies:

```bash
git clone https://github.com/rollup/rollup-starter-lib
cd rollup-starter-lib
npm install
```

`npm run build` builds the library to `dist`, generating three files:

* `dist/how-long-till-lunch.cjs.js`
    A CommonJS bundle, suitable for use in Node.js, that `require`s the external dependency. This corresponds to the `"main"` field in package.json
* `dist/how-long-till-lunch.esm.js`
    an ES module bundle, suitable for use in other people's libraries and applications, that `import`s the external dependency. This corresponds to the `"module"` field in package.json
* `dist/how-long-till-lunch.umd.js`
    a UMD build, suitable for use in any environment (including the browser, as a `<script>` tag), that includes the external dependency. This corresponds to the `"browser"` field in package.json

`npm run dev` builds the library, then keeps rebuilding it whenever the source files change using [rollup-watch](https://github.com/rollup/rollup-watch).

`npm test` builds the library, then tests it.

*Note that you would often include the `dist` folder in your [.gitignore](https://github.com/rollup/rollup-starter-lib/blob/master/.gitignore) file, but they are included here for ease of illustration.*

## Alternative

If you want eslint, jest, storybook, flow and all that good stuff, check out the alternative branch [extended-tooling](https://github.com/karl-run/rollup-starter-lib-react/tree/extended-tooling) which has all that configured.

## License

[MIT](LICENSE).
