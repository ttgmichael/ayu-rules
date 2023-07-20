import rawDark from './dark'
import rawLight from './light'
import rawMirage from './mirage'
import rawGelpen from './gelpenlight'

export type Scheme = typeof rawDark

export const dark: Scheme = rawDark
export const light: Scheme = rawLight
export const mirage: Scheme = rawMirage

// new themes

export const gelpen: Scheme = rawGelpen

export { alphaBlend } from './color'
