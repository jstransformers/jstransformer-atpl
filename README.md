# jstransformer-atpl

[atpl](http://github.com/soywiz/atpl.js) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-atpl/master.svg)](https://travis-ci.org/jstransformers/jstransformer-atpl)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-atpl/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-atpl)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-atpl/master.svg)](http://david-dm.org/jstransformers/jstransformer-atpl)

[![NPM version](https://img.shields.io/npm/v/jstransformer-atpl.svg)](https://www.npmjs.org/package/jstransformer-atpl)

## Installation

    npm install jstransformer-atpl

## API

```js
var atpl = require('jstransformer')(require('jstransformer-atpl'))

atpl.render('Hello, {{ name }}!', { name: 'World' }).body
//=> 'Hello, World!'
```

## License

MIT
