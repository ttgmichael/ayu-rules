import {default as color} from './color'
import {coolor} from './color'

const d = '#232b3e' // editor
const i = '#1f2b41' // sidebar
const p = '#283448' // panel

const t1 = '#cac8be' // editor text font
const t2 = '#68748d' // ui text font/ editor border font
const t3 = '#6e788c' // ui border color
const t4 = '#546687' // ui active selection

const e = color(d)
const u = color(i)

const f = coolor(d)
const v = coolor(i)

const syntax = {
  func:     e`#7fc8f8`, //
  entity:   e`#6770ca`, // types
  string:   e`#abb47e`,
  keyword:  e`#c64d08`,
  operator: e`#c64d08`, // ++, |, &, =>, :, =, class?
  constant: e`#b67755`, // numbers, parameters, true, false, 
  tag:      e`#e08883`, // html tags, this?
  markup:   e`#cea260`,
  special:  e`#cea260`,
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
  accent: u`#b67755`,
  error:  u`#D95757`
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
