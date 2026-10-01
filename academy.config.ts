// Academy override layer. NEVER copy template code here — override only.
import { templateConfig } from '../nuxtui-lms-template/template.config'

export const academyConfig = {
  ...templateConfig,
  brand: {
    name: 'ChimeraNext Academy',
    logo: '/chimeranext.svg',
    primary: '#B78E3B',
    ink: '#142A46',
    fonts: {
      display: 'Alegreya, Georgia, serif',
      body: "'Alegreya Sans', system-ui, sans-serif",
      mono: "'Inconsolata', ui-monospace, monospace",
    },
  },
  video: { cdn: process.env.NUXT_PUBLIC_VIDEO_CDN ?? '', mock: false },
  demo: false,
  site: 'https://academy.chimeranext.dev',
  issuer: 'did:web:academy.chimeranext.dev',
}
