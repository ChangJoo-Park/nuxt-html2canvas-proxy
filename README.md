# nuxt-html2canvas-proxy

[html2canvas](https://html2canvas.hertzen.com/) proxy using [html2canvas-proxy-nodejs](https://github.com/niklasvh/html2canvas-proxy-nodejs).

[![npm version][npm-version-src]][npm-version-href]
[![License][license-src]][license-href]

> Nuxt module for html2canvas proxy

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-html2canvas-proxy` dependency to your project

```bash
yarn add nuxt-html2canvas-proxy # or npm install nuxt-html2canvas-proxy
```

2. Add `nuxt-html2canvas-proxy` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-html2canvas-proxy', /* default path is /_proxy */

    // With options
    ['nuxt-html2canvas-proxy', { path: '/_proxy' /* change path for html2canvas proxy */ }]
  ],
}
```

3. Use with html2canvas

```js
html2canvas(document.querySelector('#image'), { useCORS: false, proxy: '/_proxy' })
  .then((canvas) => {
    document.body.appendChild(canvas)
  })
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) ChangJoo Park

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-html2canvas-proxy/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-html2canvas-proxy

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-html2canvas-proxy.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-html2canvas-proxy

[github-actions-ci-src]: https://github.com/changjoo-park/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/changjoo-park/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/changjoo-park.svg
[codecov-href]: https://codecov.io/gh/changjoo-park

[license-src]: https://img.shields.io/npm/l/nuxt-html2canvas-proxy.svg
[license-href]: https://npmjs.com/package/nuxt-html2canvas-proxy
