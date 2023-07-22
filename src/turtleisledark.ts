import {default as color} from './color'
import {coolor} from './color'

const d = '#343d33' // editor
const i = '#1d2a04' // sidebar
const p = '#192404' // panel

const t1 = '#cac8be' // editor text font
const t2 = '#688d7f' // ui text font/ editor border font
const t3 = '#6e8c85' // ui border color
const t4 = '#548778' // ui active selection

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

const common = {
  accent: u`#60d394`,
  error:  u`#D95757`
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
