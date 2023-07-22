import {default as color} from './color'
import {coolor} from './color'

const d = '#433a64' // editor
const i = '#362d58' // sidebar
const p = '#30284d' // panel

const t1 = '#cac6be' // editor text font
const t2 = '#686c8d' // ui text font/ editor border font
const t3 = '#7a6e8c' // ui border color
const t4 = '#81718e' // ui active selection

const e = color(d)
const u = color(i)

const f = coolor(d)
const v = coolor(i)

const syntax = {
  func:     e`#75beef`, //
  entity:   e`#d271c3`, // types
  string:   e`#c43b6f`,
  keyword:  e`#3c21b7`,
  operator: e`#3c21b7`, // ++, |, &, =>, :, =, class?
  constant: e`#a736d4`, // numbers, parameters, true, false, 
  tag:      e`#2b5bca`, // html tags, this?
  markup:   e`#0caaaa`,
  special:  e`#0caaaa`,
  comment:  e`#787B80`.alpha(0.6),
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
  accent: u`#61a8fa`,
  error:  u`#d43a35`
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
