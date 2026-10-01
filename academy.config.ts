// Academy override layer. NEVER copy template code here — override only.
// Brand color values are SSOT from @chimeranext/tokens (design-system tokens.json).
import tokens from '@chimeranext/tokens'
import { templateConfig } from '../nuxtui-lms-template/template.config'

export const academyConfig = {
  ...templateConfig,
  brand: {
    name: 'ChimeraNext Academy',
    logo: '/chimeranext.svg',
    primary: tokens.brand.primary,
    ink: tokens.brand.secondary,
    fonts: {
      display: 'Alegreya, Georgia, serif',
      epic: "'Piazzolla', Georgia, serif",
      body: "'Alegreya Sans', system-ui, sans-serif",
      mono: "'Inconsolata', ui-monospace, monospace",
    },
  },
  video: { cdn: process.env.NUXT_PUBLIC_VIDEO_CDN ?? '', mock: false },
  demo: false,
  darkDefault: true,
  site: 'https://academy.chimeranext.dev',
  issuer: 'did:web:academy.chimeranext.dev',
}
