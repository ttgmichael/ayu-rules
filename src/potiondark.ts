import {default as color} from './color'
import {coolor} from './color'

const d = '#2b2839' // editor
const i = '#2a263b' // sidebar
const p = '#2b2839' // panel

const t1 = '#cac6be' // editor text font
const t2 = '#837887' // ui text font/ editor border font
const t3 = '#85738c' // ui border color
const t4 = '#81718e' // ui active selection

const e = color(d)
const u = color(i)

const f = coolor(d)
const v = coolor(i)

const syntax = {
  func:     e`#75beef`, //
  entity:   e`#da8bce`, // types
  string:   e`#dfae9a`,
  keyword:  e`#bcaef9`,
  operator: e`#bcaef9`, // ++, |, &, =>, :, =, class?
  constant: e`#c43b6f`, // numbers, parameters, true, false, 
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
  line: f(`${t2}`).alpha(0.2),
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
  accent: u`#b35dd5`,
  error:  u`#d43a35`
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
