import {default as color} from './color'
import {coolor} from './color'

const d = '#cfd0d3' // editor
const i = '#dbdbdc' // sidebar
const p = '#c5c6c9' // panel

const t1 = '#3f4446' // editor text font
const t2 = '#5b6062' // ui text font/ editor border font
const t3 = '#53595a' // ui border color
const t4 = '#474e52' // ui active selection

const e = color(d)
const u = color(i)

const f = coolor(d)
const v = coolor(i)

const syntax = {
  func:     e`#c2260a`, //
  entity:   e`#3fac1b`, // types
  string:   e`#7a9211`,
  keyword:  e`#765228`,
  operator: e`#765228`, // ++, |, &, =>, :, =, class?
  constant: e`#8366a9`, // numbers, parameters, true, false, 
  tag:      e`#8a0512`, // html tags, this?
  markup:   e`#a87048`,
  special:  e`#a87048`,
  comment:  e`#3f4446`.alpha(0.8),
  regexp:   e`#a87048`,
}

const vcs = { // e.g. git added/ modified/ removed highlights
  added:    e`#6CBF43`,
  modified: e`#478ACC`,
  removed:  e`#FF7383`
}

const editor = {
  fg: f(`${t1}`), // default text font color
  bg: f(`${d}`),
  line: f(`${t2}`).alpha(0.15),
  selection: {
    active:   e`#035BD6`.alpha(0.15),
    inactive: e`#035BD6`.alpha(0.07)
  },
  findMatch: {
    active:   e`#9F40FF`.alpha(0.17),
    inactive: e`#9F40FF`.alpha(0.8)
  },
  gutter: {
    active: f(`${t2}`),
    normal: f(`${t2}`).alpha(0.8)
  },
  indentGuide: {
    active: f(`${t2}`).alpha(0.35),
    normal: f(`${t2}`).alpha(0.18)
  }
}

const ui = {
  fg: v(`${t2}`), // default text font color
  bg: v(`${i}`),
  line: v(`${t3}`).alpha(0.25),
  selection: {
    active: v(`${t4}`).alpha(0.12),
    normal:  v(`${t3}`).alpha(0.12)
  },
  panel: { //bottom panel
    bg: v(`${p}`),
    shadow: u`#000000`.alpha(0.15)
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
