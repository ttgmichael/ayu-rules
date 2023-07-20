import color from './color'

const u = color('#F8F9FA') //ui bg
const e = color('#FEFEFE') //editor bg

const syntax = {
  func: e`#3185fc`, //
  entity: e`#cc4168`, // types
  string: e`#26b65d`,
  keyword: e`#8655be`,
  operator: e`#8655be`, // ++, |, &, =>, :, =, class?
  constant: e`#d96abe`, // numbers, parameters, true, false, 
  tag: e`#33d1e0`, // html tags, this?
  markup: e`#ea9494`,
  special: e`#ea9494`,
  comment: e`#787B80`.alpha(0.6),
  regexp: e`#26b65d`.alpha(0.6),
}

const vcs = { // e.g. git added/ modified/ removed highlights
  added: e`#6CBF43`,
  modified: e`#478ACC`,
  removed: e`#FF7383`
}

const editor = {
  fg: e`#5C6166`, // default text font color
  bg: e`#FCFCFC`,
  line: e`#8A9199`.alpha(0.1),
  selection: {
    active: e`#035BD6`.alpha(0.15),
    inactive: e`#035BD6`.alpha(0.07)
  },
  findMatch: {
    active: e`#9F40FF`.alpha(0.17),
    inactive: e`#9F40FF`.alpha(0.8)
  },
  gutter: {
    active: e`#8A9199`.alpha(0.8),
    normal: e`#8A9199`.alpha(0.4)
  },
  indentGuide: {
    active: e`#8A9199`.alpha(0.35),
    normal: e`#8A9199`.alpha(0.18)
  }
}

const ui = {
  fg: u`#8A9199`, // default text font color
  bg: u`#F8F9FA`,
  line: u`#6B7D8F`.alpha(0.12),
  selection: {
    active: u`#56728F`.alpha(0.12),
    normal: u`#6B7D8F`.alpha(0.12)
  },
  panel: {
    bg: u`#F3F4F5`,
    shadow: u`#000000`.alpha(0.15)
  }
}

const common = {
  accent: u`#FFAA33`,
  error: u`#E65050`
}

export default {
  syntax,
  vcs,
  editor,
  ui,
  common
}
