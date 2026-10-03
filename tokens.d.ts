// Ambient typings for the untyped @chimeranext/tokens JS build
// (build/tokens.js — plain ESM export, no bundled declarations).
declare module '@chimeranext/tokens' {
  export interface ChimeraTokenGroup {
    [key: string]: string
  }
  export interface ChimeraTokens {
    brand: ChimeraTokenGroup
    gradient: ChimeraTokenGroup
    font: ChimeraTokenGroup
    radius: ChimeraTokenGroup
    semantic: { dark: ChimeraTokenGroup; light: ChimeraTokenGroup }
    bento: { dark: ChimeraTokenGroup; light: ChimeraTokenGroup }
  }
  export const tokens: ChimeraTokens
  const defaultExport: ChimeraTokens
  export default defaultExport
}
