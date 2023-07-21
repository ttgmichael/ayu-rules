import {default as color} from './color'
import {coolor} from './color'

const d = '#FCFCFC' // editor
const i = '#F8F9FA' // sidebar
const p = '#F3F4F5' // panel

const t1 = '#5C6166' // editor text font
const t2 = '#8A9199' // ui text font/ editor border font
const t3 = '#6B7D8F' // ui border color
const t4 = '#56728F' // ui active selection

const e = color(d)
const u = color(i)

const f = coolor(d)
const v = coolor(i)

const syntax = {
  func:     e`#3185fc`, //
  entity:   e`#cc4168`, // types
  string:   e`#26b65d`,
  keyword:  e`#8655be`,
  operator: e`#8655be`, // ++, |, &, =>, :, =, class?
  constant: e`#d96abe`, // numbers, parameters, true, false, 
  tag:      e`#33d1e0`, // html tags, this?
  markup:   e`#ea9494`,
  special:  e`#ea9494`,
  comment:  e`#787B80`.alpha(0.6),
  regexp:   e`#26b65d`.alpha(0.6),
}

const vcs = { // e.g. git added/ modified/ removed highlights
  added:    e`#6CBF43`,
  modified: e`#478ACC`,
  removed:  e`#FF7383`
}

const editor = {
  fg: f(`${t1}`), // default text font color
  bg: f(`${d}`),
  line: f(`${t2}`).alpha(0.1),
  selection: {
    active:   e`#035BD6`.alpha(0.15),
    inactive: e`#035BD6`.alpha(0.07)
  },
  findMatch: {
    active:   e`#9F40FF`.alpha(0.17),
    inactive: e`#9F40FF`.alpha(0.8)
  },
  gutter: {
    active: f(`${t2}`).alpha(0.8),
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
  line: v(`${t3}`).alpha(0.12),
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
  accent: u`#FFAA33`,
  error:  u`#E65050`
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
