import {default as color} from './color'
import {coolor} from './color'

const d = '#180d10' // editor
const i = '#200110' // sidebar
const p = '#150f11' // panel

const t1 = '#c9c2c0' // editor text font
const t2 = '#684b4c' // ui text font/ editor border font
const t3 = '#523d3e' // ui border color
const t4 = '#3e2323' // ui active selection

const e = color(d)
const u = color(i)

const f = coolor(d)
const v = coolor(i)

const syntax = {
  func:     e`#b32309`, //
  entity:   e`#53b234`, // types
  string:   e`#d8b431`,
  keyword:  e`#8a5f2e`,
  operator: e`#8a5f2e`, // ++, |, &, =>, :, =, class?
  constant: e`#d6770a`, // numbers, parameters, true, false, 
  tag:      e`#7ea41e`, // html tags, this?
  markup:   e`#727c83`,
  special:  e`#727c83`,
  comment:  e`#684b4c`.alpha(0.6),
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
  line: f(`${t2}`),
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
