import {default as color} from './color'
import {coolor} from './color'

const d = '#f0f0ef' // editor
const i = '#eaece9' // sidebar
const p = '#e0e3de' // panel

const t1 = '#454f30' // editor text font
const t2 = '#5db15f' // ui text font/ editor border font
const t3 = '#77ac6c' // ui border color
const t4 = '#77ac6c' // ui active selection

const e = color(d)
const u = color(i)

const f = coolor(d)
const v = coolor(i)

const syntax = {
  func:     e`#cf2a35`, //
  entity:   e`#e29f32`, // types
  string:   e`#e2732f`,
  keyword:  e`#5fbf60`,
  operator: e`#5fbf60`, // ++, |, &, =>, :, =, class?
  constant: e`#8e55bf`, // numbers, parameters, true, false, 
  tag:      e`#e28692`, // html tags, this?
  markup:   e`#8288bb`,
  special:  e`#8288bb`,
  comment:  e`#62a456`.alpha(0.6),
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
  line: v(`${t3}`).alpha(0.2),
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
  accent: u`#f1c646`,
  error:  u`#E65050`
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
