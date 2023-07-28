import {default as color} from './color'
import {coolor} from './color'

const d = '#232b3e' // editor
const i = '#1f2b41' // sidebar
const p = '#283448' // panel

const t1 = '#cac8be' // editor text font
const t2 = '#788297' // ui text font/ editor border font
const t3 = '#6e788c' // ui border color
const t4 = '#546687' // ui active selection

const e = color(d)
const u = color(i)

const f = coolor(d)
const v = coolor(i)

const syntax = {
  func:     e`#3185fc`, //
  entity:   e`#33d1e0`, // types
  string:   e`#26b65d`,
  keyword:  e`#cc4168`,
  operator: e`#cc4168`, // ++, |, &, =>, :, =, class?
  constant: e`#e25ac0`, // numbers, parameters, true, false, 
  tag:      e`#9148e5`, // html tags, this?
  markup:   e`#8681ef`,
  special:  e`#8681ef`,
  comment:  e`#788297`.alpha(0.6),
  regexp:   e`#8681ef`,
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
