import darkTheme from '../themes/dark.theme.css'
import graphiteTheme from '../themes/graphite.theme.css'
import materialDarkTheme from '../themes/material-dark.theme.css'
import oneDarkTheme from '../themes/one-dark.theme.css'
import ulyssesTheme from '../themes/ulysses.theme.css'

import darkPrismTheme from '../themes/prismjs/dark.theme.css'
import oneDarkPrismTheme from '../themes/prismjs/one-dark.theme.css'

export const dark = () => {
  return darkTheme + '\n' + darkPrismTheme
}

export const graphite = () => {
  return graphiteTheme
}

export const materialDark = () => {
  return materialDarkTheme + '\n' + darkPrismTheme
}

export const oneDark = () => {
  return oneDarkTheme + '\n' + oneDarkPrismTheme
}

export const ulysses = () => {
  return ulyssesTheme
}
