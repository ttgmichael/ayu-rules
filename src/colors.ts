import rawDark from './ayu/dark'
import rawLight from './ayu/light'
import rawMirage from './ayu/mirage'
import rawGelpen from './gelpenlight'
import rawGelpenDark from './gelpendark'
import rawXeric from './xericlight'
import rawXericDark from './xericdark'
import rawZonai from './zonailight'
import rawZonaiDark from './zonaidark'
import rawPotion from './potionlight'
import rawPotionDark from './potiondark'
import rawTurtleIsle from './turtleislelight'
import rawTurtleIsleDark from './turtleisledark'
import rawRedstone from './redstone'
import rawRedstoneDark from './redstonedark'

export type Scheme = typeof rawDark

export const dark: Scheme = rawDark
export const light: Scheme = rawLight
export const mirage: Scheme = rawMirage

// new themes

export const gelpen: Scheme = rawGelpen
export const gelpenDark: Scheme = rawGelpenDark

export const xeric: Scheme = rawXeric
export const xericDark: Scheme = rawXericDark

export const zonai: Scheme = rawZonai
export const zonaiDark: Scheme = rawZonaiDark

export const potion: Scheme = rawPotion
export const potionDark: Scheme = rawPotionDark

export const turtleIsle: Scheme = rawTurtleIsle
export const turtleIsleDark: Scheme = rawTurtleIsleDark

export const redstone: Scheme = rawRedstone
export const redstoneDark : Scheme = rawRedstoneDark

export { alphaBlend } from './color'
