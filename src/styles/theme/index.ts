import Theme from './ThemeProps'
import { StyleSheet } from 'react-native'

export { default as ThemeProps } from './ThemeProps'
export { default as defaultTheme } from './defaultTheme'

/**
 * Simple helper function that does nothing but retains the TypeScript signature of a style definition.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createStyles<T extends StyleSheet.NamedStyles<any>>(styles: (theme: Theme) => T): (theme: Theme) => T {
  return styles
}
