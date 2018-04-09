'use strict'

const atpl = require('atpl')

exports.name = 'atpl'
exports.outputFormat = 'html'
exports.compile = atpl.internalCompileString
