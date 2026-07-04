import { globalStyle, style } from '@vanilla-extract/css'
import { theme } from './styles/global.css'

export const shell = style({
  minHeight: '100vh',
  background: `
    radial-gradient(circle at top left, ${theme.color.primarySoft}, transparent 34%),
    radial-gradient(circle at top right, ${theme.color.accentSoft}, transparent 28%),
    linear-gradient(180deg, ${theme.color.backgroundTop} 0%, ${theme.color.background} 100%)
  `,
})

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '24px',
  padding: '0 24px',
  background: theme.color.surface,
  backdropFilter: 'blur(14px)',
  borderBottom: `1px solid ${theme.color.border}`,
})

export const brand = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  fontWeight: 700,
  letterSpacing: '0.02em',
})

export const menu = style({
  flex: 1,
  justifyContent: 'flex-end',
  minWidth: 0,
  background: 'transparent',
  borderBottom: 'none',
})

globalStyle(`${menu} .ant-menu-item`, {
  fontWeight: 600,
})

export const content = style({
  width: 'min(1120px, calc(100% - 32px))',
  margin: '0 auto',
  padding: '56px 0 72px',
})

export const pagePanel = style({
  marginBottom: '24px',
  padding: '32px',
  borderRadius: theme.radius.lg,
  background: theme.color.surface,
  border: `1px solid ${theme.color.borderSoft}`,
  boxShadow: theme.shadow.elevated,
})

export const eyebrow = style({
  display: 'inline-block',
  marginBottom: '12px',
  color: theme.color.primary,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.14em',
  fontSize: '12px',
})

export const pageCard = style({
  borderRadius: theme.radius.lg,
  background: `linear-gradient(180deg, ${theme.color.surfaceStrong}, rgba(245, 249, 255, 0.98))`,
  boxShadow: theme.shadow.elevated,
})

export const cardCopy = style({
  marginBottom: 0,
})

export const footer = style({
  textAlign: 'center',
  color: theme.color.mutedText,
})

export const sectionGap = style({
  marginBottom: '24px',
})

export const mobileHeader = style({
  '@media': {
    'screen and (max-width: 900px)': {
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
})

export const mobileBrand = style({
  '@media': {
    'screen and (max-width: 900px)': {
      width: '100%',
      justifyContent: 'center',
    },
  },
})

export const mobileContent = style({
  '@media': {
    'screen and (max-width: 900px)': {
      paddingTop: '32px',
    },
  },
})

export const mobileMenu = style({
  '@media': {
    'screen and (max-width: 900px)': {
      justifyContent: 'center',
    },
  },
})