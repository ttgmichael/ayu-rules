import {default as color} from './color'
import {coolor} from './color'

const d = '#1e1c26' // editor
const i = '#1c1825' // sidebar
const p = '#1c1825' // panel

const t1 = '#c4c3ba' // editor text font
const t2 = '#786876' // ui text font/ editor border font
const t3 = '#70616d' // ui border color
const t4 = '#806b74' // ui active selection

const e = color(d)
const u = color(i)

const f = coolor(d)
const v = coolor(i)

const syntax = {
  func:     e`#59a94b`, //
  entity:   e`#735286`, // types
  string:   e`#9a6091`,
  keyword:  e`#a93256`,
  operator: e`#a93256`, // ++, |, &, =>, :, =, class?
  constant: e`#d57521`, // numbers, parameters, true, false, 
  tag:      e`#777da7`, // html tags, this?
  markup:   e`#a0b42f`,
  special:  e`#a0b42f`,
  comment:  e`#786876`.alpha(0.6),
  regexp:   e`#a0b42f`,
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
