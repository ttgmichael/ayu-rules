import {default as color} from './color'
import {coolor} from './color'

const d = '#0D1017' // editor
const i = '#0B0E14' // sidebar
const p = '#0F131A' // panel

const t1 = '#BFBDB6' // editor text font
const t2 = '#565B66' // ui text font/ editor border font
const t3 = '#6C7380' // ui border color
const t4 = '#475266' // ui active selection

const e = color(d)
const u = color(i)

const f = coolor(d)
const v = coolor(i)

const syntax = {
  func:     e`#3185fc`, //
  entity:   e`#cc4168`, // types
  string:   e`#26b65d`,
  keyword:  e`#8655be`,
  operator: e`#8655be`, // ++, |, &, =>, :, =, class?
  constant: e`#d96abe`, // numbers, parameters, true, false, 
  tag:      e`#33d1e0`, // html tags, this?
  markup:   e`#ea9494`,
  special:  e`#ea9494`,
  comment:  e`#787B80`.alpha(0.6),
  regexp:   e`#26b65d`.alpha(0.6),
}

const vcs = {
  added:    e`#7FD962`,
  modified: e`#73B8FF`,
  removed:  e`#F26D78`
}

const editor = {
  fg: e`#BFBDB6`,
  bg: e`#0D1017`,
  line: e`#131721`,
  selection: {
    active:   e`#409FFF`.alpha(0.3),
    inactive: e`#409FFF`.alpha(0.13)
  },
  findMatch: {
    active:   e`#6C5980`,
    inactive: e`#6C5980`.alpha(0.4)
  },
  gutter: {
    active: e`6C7380`.alpha(0.9),
    normal: e`6C7380`.alpha(0.6)
  },
  indentGuide: {
    active: e`6C7380`.alpha(0.5),
    normal: e`6C7380`.alpha(0.2)
  }
}

const ui = {
  fg: u`#565B66`,
  bg: u`#0B0E14`,
  line: u`11151C`,
  selection: {
    active: u`#475266`.alpha(0.25),
    normal: u`#475266`.alpha(0.2)
  },
  panel: {
    bg:     u`0F131A`,
    shadow: u`000000`.alpha(0.5)
  }
}

const common = {
  accent: u`#E6B450`,
  error:  u`#D95757`
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
