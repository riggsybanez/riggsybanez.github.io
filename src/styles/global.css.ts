import { createGlobalTheme, globalStyle } from '@vanilla-extract/css'

export const theme = createGlobalTheme(':root', {
  color: {
    primary: '#1677ff',
    primarySoft: 'rgba(22, 119, 255, 0.18)',
    accentSoft: 'rgba(0, 180, 216, 0.16)',
    text: 'rgba(15, 23, 42, 0.92)',
    mutedText: 'rgba(15, 23, 42, 0.62)',
    surface: 'rgba(255, 255, 255, 0.82)',
    surfaceStrong: 'rgba(255, 255, 255, 0.94)',
    border: 'rgba(15, 23, 42, 0.08)',
    borderSoft: 'rgba(15, 23, 42, 0.06)',
    background: '#eef4ff',
    backgroundTop: '#f7fbff',
  },
  radius: {
    lg: '24px',
    md: '20px',
    sm: '14px',
  },
  shadow: {
    elevated: '0 24px 60px rgba(15, 23, 42, 0.08)',
  },
  font: {
    body: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
})

globalStyle('*', {
  boxSizing: 'border-box',
})

globalStyle('html, body, #root', {
  margin: 0,
  minWidth: '320px',
  minHeight: '100%',
})

globalStyle('body', {
  minHeight: '100vh',
  fontFamily: theme.font.body,
  lineHeight: 1.5,
  fontWeight: 400,
  color: theme.color.text,
  background: theme.color.background,
  fontSynthesis: 'none',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('button, input, textarea, select', {
  font: 'inherit',
})