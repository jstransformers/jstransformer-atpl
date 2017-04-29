# jstransformer-atpl

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-atpl.svg)](https://greenkeeper.io/)

[atpl](http://github.com/soywiz/atpl.js) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-atpl/master.svg)](https://travis-ci.org/jstransformers/jstransformer-atpl)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-atpl/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-atpl?branch=master)
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
