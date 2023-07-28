import {default as color} from './color'
import {coolor} from './color'

const d = '#173030' // editor
const i = '#1a2929' // sidebar
const p = '#1f2e2e' // panel

const t1 = '#cac8be' // editor text font
const t2 = '#688d7f' // ui text font/ editor border font
const t3 = '#6e8c85' // ui border color
const t4 = '#548778' // ui active selection

const e = color(d)
const u = color(i)

const f = coolor(d)
const v = coolor(i)

const syntax = {
  func:     e`#cf653f`, //
  entity:   e`#5ad1d5`, // types
  string:   e`#a3c36f`,
  keyword:  e`#60d394`,
  operator: e`#60d394`, // ++, |, &, =>, :, =, class?
  constant: e`#b88f65`, // numbers, parameters, true, false, 
  tag:      e`#1b9aaa`, // html tags, this?
  markup:   e`#e08883`,
  special:  e`#e08883`,
  comment:  e`#787B80`.alpha(0.6),
  regexp:   e`#e08883`,
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
