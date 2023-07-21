const fs = require('fs')
const isObject = require('is-object')
const fontColorContrast = require('font-color-contrast')
const chroma = require('chroma-js')
const colors = require('../dist/colors')
const { Color } = require('../dist/color')
const assert = require('assert')

const syntax = colors.petrified.syntax

for (let key in syntax) {
  if (syntax[key] instanceof Color) {
    console.log(
      key,
      syntax[key].hex(), syntax[key].bg.hex(), 
      chroma.contrast(syntax[key].color, syntax[key].bg))
  }
}