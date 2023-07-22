import {default as color} from './color'
import {coolor} from './color'

const d = '#FBF8F6' // editor
const i = '#f1f5ef' // sidebar
const p = '#eff1ee' // panel

const t1 = '#3c5850' // editor text font
const t2 = '#6f8b82' // ui text font/ editor border font
const t3 = '#689284' // ui border color
const t4 = '#47856e' // ui active selection

const e = color(d)
const u = color(i)

const f = coolor(d)
const v = coolor(i)

const syntax = {
  func:     e`#b87f4a`, //
  entity:   e`#40ceb1`, // types
  string:   e`#5F8A3A`,
  keyword:  e`#094e9d`,
  operator: e`#094e9d`, // ++, |, &, =>, :, =, class?
  constant: e`#eab26e`, // numbers, parameters, true, false, 
  tag:      e`#00b2ca`, // html tags, this?
  markup:   e`#268f63`,
  special:  e`#268f63`,
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
  line: f(`${t2}`).alpha(0.12),
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
  line: v(`${t3}`).alpha(0.4),
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
  accent: u`#30c573`,
  error:  u`#E65050`
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
