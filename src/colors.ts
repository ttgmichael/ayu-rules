import rawDark from './ayu/dark'
import rawLight from './ayu/light'
import rawMirage from './ayu/mirage'
import rawGelpen from './gelpenlight'
import rawGelpenDark from './gelpendark'
import rawPetrified from './petrifiedlight'
import rawPetrifiedDark from './petrifieddark'

export type Scheme = typeof rawDark

export const dark: Scheme = rawDark
export const light: Scheme = rawLight
export const mirage: Scheme = rawMirage

// new themes

export const gelpen: Scheme = rawGelpen
export const gelpenDark: Scheme = rawGelpenDark

export const petrified: Scheme = rawPetrified
export const petrifiedDark: Scheme = rawPetrifiedDark

export { alphaBlend } from './color'
