import rawDark from './ayu/dark'
import rawLight from './ayu/light'
import rawMirage from './ayu/mirage'
import rawGelpen from './gelpenlight'
import rawGelpenDark from './gelpendark'
import rawXeric from './xericlight'
import rawXericDark from './xericdark'
import rawUltrahand from './ultrahandlight'
import rawUltrahandDark from './ultrahanddark'

export type Scheme = typeof rawDark

export const dark: Scheme = rawDark
export const light: Scheme = rawLight
export const mirage: Scheme = rawMirage

// new themes

export const gelpen: Scheme = rawGelpen
export const gelpenDark: Scheme = rawGelpenDark

export const xeric: Scheme = rawXeric
export const xericDark: Scheme = rawXericDark

export const ultrahand: Scheme = rawUltrahand
export const ultrahandDark: Scheme = rawUltrahandDark

export { alphaBlend } from './color'
