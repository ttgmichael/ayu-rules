import {default as color} from './color'
import {coolor} from './color'

const d = '#e6e2e0' // editor
const i = '#e3e0de' // sidebar
const p = '#e6e2e0' // panel

const t1 = '#504a49' // editor text font
const t2 = '#856c60' // ui text font/ editor border font
const t3 = '#927568' // ui border color
const t4 = '#955f56' // ui active selection

const e = color(d)
const u = color(i)

const f = coolor(d)
const v = coolor(i)

const syntax = {
  func:     e`#629528`, //
  entity:   e`#744b8b`, // types
  string:   e`#b168b1`,
  keyword:  e`#a84d4d`,
  operator: e`#a84d4d`, // ++, |, &, =>, :, =, class?
  constant: e`#cd7d4b`, // numbers, parameters, true, false, 
  tag:      e`#777da7`, // html tags, this?
  markup:   e`#8fa12b`,
  special:  e`#8fa12b`,
  comment:  e`#8b776f`.alpha(0.8),
  regexp:   e`#8fa12b`,
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
    normal:  v(`${t3}`).alpha(0.2)
  },
  panel: { //bottom panel
    bg: v(`${p}`),
    shadow: u`#000000`.alpha(0.15)
  }
}

const common = { // accent is used almost everywhere...
  accent: u`#735286`,
  error:  u`#E65050`
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
