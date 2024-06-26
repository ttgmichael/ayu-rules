import {default as color} from './color'
import {coolor} from './color'

const d = '#eff0f0' // editor
const i = '#ecedee' // sidebar
const p = '#eceeee' // panel

const t1 = '#565c61' // editor text font
const t2 = '#7f8790' // ui text font/ editor border font
const t3 = '#687d92' // ui border color
const t4 = '#476585' // ui active selection

const e = color(d)
const u = color(i)

const f = coolor(d)
const v = coolor(i)

const syntax = {
  func:     e`#356CD2`, //
  entity:   e`#EB5910`, // types
  string:   e`#86CB0E`,
  keyword:  e`#CD19B2`,
  operator: e`#CD19B2`, // ++, |, &, =>, :, =, class?
  constant: e`#1BD3E8`, // numbers, parameters, true, false, 
  tag:      e`#D61583`, // html tags, this?
  markup:   e`#2FBC9B`,
  special:  e`#2FBC9B`,
  comment:  e`#4d586f`.alpha(0.6),
  regexp:   e`#2FBC9B`,
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
  accent: u`#CD19B2`,
  error:  u`#d43a35`
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
