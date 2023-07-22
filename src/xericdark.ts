import {default as color} from './color'
import {coolor} from './color'

const d = '#342c28' // editor
const i = '#2f2a28' // sidebar
const p = '#372b25' // panel

const t1 = '#cac8be' // editor text font
const t2 = '#787268' // ui text font/ editor border font
const t3 = '#706b61' // ui border color
const t4 = '#80786b' // ui active selection

const e = color(d)
const u = color(i)

const f = coolor(d)
const v = coolor(i)

const syntax = {
  func:     e`#6bbef5`, //
  entity:   e`#7166d1`, // types
  string:   e`#a2ae6b`,
  keyword:  e`#c64d08`,
  operator: e`#c64d08`, // ++, |, &, =>, :, =, class?
  constant: e`#DDA420`, // numbers, parameters, true, false, 
  tag:      e`#e08883`, // html tags, this?
  markup:   e`#cea260`,
  special:  e`#cea260`,
  comment:  e`#787B80`.alpha(0.6),
  regexp:   e`#26b65d`.alpha(0.6),
}

const vcs = {
  added:    e`#7FD962`,
  modified: e`#73B8FF`,
  removed:  e`#F26D78`
}

const editor = {
  fg: f(`${t1}`),
  bg: f(`${d}`),
  line: f(`${t2}`).alpha(0.2),
  selection: {
    active:   e`#409FFF`.alpha(0.3),
    inactive: e`#409FFF`.alpha(0.13)
  },
  findMatch: {
    active:   e`#6C5980`,
    inactive: e`#6C5980`.alpha(0.4)
  },
  gutter: {
    active: f(`${t2}`).alpha(0.9),
    normal: f(`${t2}`).alpha(0.6)
  },
  indentGuide: {
    active: f(`${t2}`).alpha(0.5),
    normal: f(`${t2}`).alpha(0.2)
  }
}

const ui = {
  fg: v(`${t2}`),
  bg: v(`${i}`),
  line: v(`${t3}`),
  selection: {
    active: v(`${t4}`).alpha(0.25),
    normal: v(`${t3}`).alpha(0.2)
  },
  panel: {
    bg:     v(`${p}`),
    shadow: u`000000`.alpha(0.5)
  }
}

const common = {
  accent: u`#b67755`,
  error:  u`#D95757`
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
