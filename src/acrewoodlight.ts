import {default as color} from './color'
import {coolor} from './color'

const d = '#e2e3e9' // editor
const i = '#e0e1eb' // sidebar
const p = '#e2eeee' // panel

const t1 = '#20233c' // editor text font
const t2 = '#6f7480' // ui text font/ editor border font
const t3 = '#6f7880' // ui border color
const t4 = '#6cac9d' // ui active selection

const e = color(d)
const u = color(i)

const f = coolor(d)
const v = coolor(i)

const syntax = {
  func:     e`#cf2a35`, //
  entity:   e`#ea9a1a`, // types
  string:   e`#d7651d`,
  keyword:  e`#2f8930`,
  operator: e`#2f8930`, // ++, |, &, =>, :, =, class?
  constant: e`#884fba`, // numbers, parameters, true, false, 
  tag:      e`#e76a8b`, // html tags, this?
  markup:   e`#8288bb`,
  special:  e`#8288bb`,
  comment:  e`#20233c`.alpha(0.6),
  regexp:   e`#8288bb`,
}

const vcs = { // e.g. git added/ modified/ removed highlights
  added:    e`#6CBF43`,
  modified: e`#478ACC`,
  removed:  e`#FF7383`
}

const editor = {
  fg: f(`${t1}`), // default text font color
  bg: f(`${d}`),
  line: f(`${t2}`).alpha(0.2),
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
    normal: f(`${t2}`).alpha(0.4)
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
    normal:  v(`${t3}`).alpha(0.2)
  },
  panel: { //bottom panel
    bg: v(`${p}`),
    shadow: u`#000000`.alpha(0.15)
  }
}

const common = { // accent is used almost everywhere...
  accent: u`#efa32a`,
  error:  u`#E65050`
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
