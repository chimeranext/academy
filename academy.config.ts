// Academy override layer. NEVER copy template code here — override only.
import { templateConfig } from '../nuxtui-lms-template/template.config'

export const academyConfig = {
  ...templateConfig,
  brand: {
    name: 'ChimeraNext Academy',
    logo: '/chimera-logo.svg',
    primary: '#C9A227',
    ink: '#16233F',
    fonts: { display: 'Alegreya, Georgia, serif', body: "'Alegreya Sans', system-ui, sans-serif" },
  },
  video: { cdn: process.env.NUXT_PUBLIC_VIDEO_CDN ?? '', mock: false },
  demo: false,
  site: 'https://academy.chimeranext.dev',
  issuer: 'did:web:academy.chimeranext.dev',
}
