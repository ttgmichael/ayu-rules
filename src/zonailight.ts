import {default as color} from './color'
import {coolor} from './color'

const d = '#d8d9d2' // editor
const i = '#d4d5d0' // sidebar d1d4ce
const p = '#cfd3cd' // panel

const t1 = '#284333' // editor text font
const t2 = '#4d6f6a' // ui text font/ editor border font
const t3 = '#31c47a' // ui border color 31c48e
const t4 = '#5ea199' // ui active selection

const e = color(d)
const u = color(i)

const f = coolor(d)
const v = coolor(i)

const syntax = {
  func:     e`#954c32`, //
  entity:   e`#268ab5`, // types
  string:   e`#757524`,
  keyword:  e`#099a65`,
  operator: e`#099a65`, // ++, |, &, =>, :, =, class?
  constant: e`#e18105`, // numbers, parameters, true, false, 
  tag:      e`#13c3b7`, // html tags, this?
  markup:   e`#ba4f4f`,
  special:  e`#ba4f4f`,
  comment:  e`#6f8b82`.alpha(0.8),
  regexp:   e`#ba4f4f`,
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
  line: v(`${t3}`).alpha(0.9),
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
  accent: u`#209764`,
  error:  u`#E65050`
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
