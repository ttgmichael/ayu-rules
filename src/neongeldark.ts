import {default as color} from './color'
import {coolor} from './color'

const d = '#211f38' // editor
const i = '#201e34' // sidebar
const p = '#282848' // panel

const t1 = '#cac8be' // editor text font
const t2 = '#5f5487' // ui text font/ editor border font
const t3 = '#7e4e7d' // ui border color
const t4 = '#524b6c' // ui active selection

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
