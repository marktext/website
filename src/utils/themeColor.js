import darkTheme from '../themes/dark.theme.js'
import graphiteTheme from '../themes/graphite.theme.js'
import materialDarkTheme from '../themes/material-dark.theme.js'
import oneDarkTheme from '../themes/one-dark.theme.js'
import ulyssesTheme from '../themes/ulysses.theme.js'

import darkPrismTheme from '../themes/prismjs/dark.theme.js'
import oneDarkPrismTheme from '../themes/prismjs/one-dark.theme.js'

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
