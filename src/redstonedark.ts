import {default as color} from './color'
import {coolor} from './color'

const d = '#180d10' // editor
const i = '#200110' // sidebar
const p = '#150f11' // panel

const t1 = '#c5bcba' // editor text font
const t2 = '#765152' // ui text font/ editor border font
const t3 = '#523d3e' // ui border color
const t4 = '#3e2323' // ui active selection

const e = color(d)
const u = color(i)

const f = coolor(d)
const v = coolor(i)

const syntax = {
  func:     e`#b32309`, //
  entity:   e`#53b234`, // types
  string:   e`#7ea41e`,
  keyword:  e`#a06a2c`,
  operator: e`#a06a2c`, // ++, |, &, =>, :, =, class?
  constant: e`#8366a9`, // numbers, parameters, true, false, 
  tag:      e`#d8b431`, // html tags, this?
  markup:   e`#d3a17e`,
  special:  e`#d3a17e`,
  comment:  e`#765152`.alpha(0.7),
  regexp:   e`#d3a17e`,
}

const vcs = {
  added:    e`#7FD962`,
  modified: e`#73B8FF`,
  removed:  e`#F26D78`
}

const editor = {
  fg: f(`${t1}`),
  bg: f(`${d}`),
  line: f(`${t2}`).alpha(0.3),
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

const common = { // accent is used almost everywhere...
  accent: u`#b40a0a`,
  error:  u`#6f025e`
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
