import {default as color} from './color'
import {coolor} from './color'

const d = '#1e223E' // editor
const i = '#1a1d38' // sidebar
const p = '#24294c' // panel

const t1 = '#c4c3ba' // editor text font
const t2 = '#8e9395' // ui text font/ editor border font
const t3 = '#909798' // ui border color
const t4 = '#8f9799' // ui active selection

const e = color(d)
const u = color(i)

const f = coolor(d)
const v = coolor(i)

const syntax = {
  func:     e`#d73c47`, //
  entity:   e`#e29f32`, // types
  string:   e`#e2732f`,
  keyword:  e`#5fbf60`,
  operator: e`#5fbf60`, // ++, |, &, =>, :, =, class?
  constant: e`#8e55bf`, // numbers, parameters, true, false, 
  tag:      e`#e28692`, // html tags, this?
  markup:   e`#8288bb`,
  special:  e`#8288bb`,
  comment:  e`#8e9395`.alpha(0.7),
  regexp:   e`#8288bb`,
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
  line: v(`${t3}`).alpha(0.5),
  selection: {
    active: v(`${t4}`).alpha(0.25),
    normal: v(`${t3}`).alpha(0.2)
  },
  panel: {
    bg:     v(`${p}`),
    shadow: u`000000`.alpha(0.5)
  }
}

const common = {
  accent: u`#9a6091`,
  error:  u`#D95757`
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
