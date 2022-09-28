import { createStyles } from '../theme'

export default createStyles(theme => ({
  // Border Colors
  borderPrimary: { borderColor: theme.colors.primary },
  borderPrimaryLight: { borderColor: theme.colors.primaryLight },
  borderPrimaryDark: { borderColor: theme.colors.primaryDark },
  borderPrimaryContrast: { borderColor: theme.colors.primaryContrast },
  borderSecondary: { borderColor: theme.colors.secondary },
  borderSecondaryLight: { borderColor: theme.colors.secondaryLight },
  borderSecondaryDark: { borderColor: theme.colors.secondaryDark },
  borderSecondaryContrast: { borderColor: theme.colors.secondaryContrast },
  borderInfo: { borderColor: theme.colors.info },
  borderInfoLight: { borderColor: theme.colors.infoLight },
  borderInfoDark: { borderColor: theme.colors.infoDark },
  borderInfoContrast: { borderColor: theme.colors.infoContrast },
  borderSuccess: { borderColor: theme.colors.success },
  borderSuccessLight: { borderColor: theme.colors.successLight },
  borderSuccessDark: { borderColor: theme.colors.successDark },
  borderSuccessContrast: { borderColor: theme.colors.successContrast },
  borderError: { borderColor: theme.colors.error },
  borderErrorLight: { borderColor: theme.colors.errorLight },
  borderErrorDark: { borderColor: theme.colors.errorDark },
  borderErrorContrast: { borderColor: theme.colors.errorContrast },
  borderWarning: { borderColor: theme.colors.warning },
  borderWarningLight: { borderColor: theme.colors.warningLight },
  borderWarningDark: { borderColor: theme.colors.warningDark },
  borderWarningContrast: { borderColor: theme.colors.warningContrast },
  borderPaper: { borderColor: theme.colors.paper },
  borderSelected: { borderColor: theme.colors.selected },
  borderDisabled: { borderColor: theme.colors.disabled },
  borderFocused: { borderColor: theme.colors.focused },
  borderMuted: { borderColor: theme.colors.muted },
  borderWhite: { borderColor: theme.colors.white },
  borderGray100: { borderColor: theme.colors.gray100 },
  borderGray200: { borderColor: theme.colors.gray200 },
  borderGray300: { borderColor: theme.colors.gray300 },
  borderGray400: { borderColor: theme.colors.gray400 },
  borderGray500: { borderColor: theme.colors.gray500 },
  borderGray600: { borderColor: theme.colors.gray600 },
  borderGray700: { borderColor: theme.colors.gray700 },
  borderGray800: { borderColor: theme.colors.gray800 },
  borderGray900: { borderColor: theme.colors.gray900 },
  borderBlack: { borderColor: theme.colors.black },
  borderTransparent: { borderColor: theme.colors.transparent },
  // Border Style
  borderSolid: { borderStyle: 'solid' },
  borderDotted: { borderStyle: 'dotted' },
  borderDashed: { borderStyle: 'dashed' },
  // Border Width
  border: { borderWidth: theme.spacing.px },
  border0_5: { borderWidth: theme.spacing[0.5] },
  border0: { borderWidth: theme.spacing[0] },
  border1: { borderWidth: theme.spacing[1] },
  border2: { borderWidth: theme.spacing[2] },
  border3: { borderWidth: theme.spacing[3] },
  border4: { borderWidth: theme.spacing[4] },
  border5: { borderWidth: theme.spacing[5] },
  border6: { borderWidth: theme.spacing[6] },
  border7: { borderWidth: theme.spacing[7] },
  border8: { borderWidth: theme.spacing[8] },
  borderX: { borderRightWidth: theme.spacing.px, borderLeftWidth: theme.spacing.px },
  borderY: { borderTopWidth: theme.spacing.px, borderBottomWidth: theme.spacing.px },
  borderT: { borderTopWidth: theme.spacing.px },
  borderR: { borderRightWidth: theme.spacing.px },
  borderB: { borderBottomWidth: theme.spacing.px },
  borderL: { borderLeftWidth: theme.spacing.px },
  borderE: { borderEndWidth: theme.spacing.px },
  borderS: { borderStartWidth: theme.spacing.px },
  borderX0: { borderRightWidth: theme.spacing[0], borderLeftWidth: theme.spacing[0] },
  borderY0: { borderTopWidth: theme.spacing[0], borderBottomWidth: theme.spacing[0] },
  borderT0: { borderTopWidth: theme.spacing[0] },
  borderR0: { borderRightWidth: theme.spacing[0] },
  borderB0: { borderBottomWidth: theme.spacing[0] },
  borderL0: { borderLeftWidth: theme.spacing[0] },
  borderE0: { borderEndWidth: theme.spacing[0] },
  borderS0: { borderStartWidth: theme.spacing[0] },
  borderX0_5: { borderRightWidth: theme.spacing[0.5], borderLeftWidth: theme.spacing[0.5] },
  borderY0_5: { borderTopWidth: theme.spacing[0.5], borderBottomWidth: theme.spacing[0.5] },
  borderT0_5: { borderTopWidth: theme.spacing[0.5] },
  borderR0_5: { borderRightWidth: theme.spacing[0.5] },
  borderB0_5: { borderBottomWidth: theme.spacing[0.5] },
  borderL0_5: { borderLeftWidth: theme.spacing[0.5] },
  borderE0_5: { borderEndWidth: theme.spacing[0.5] },
  borderS0_5: { borderStartWidth: theme.spacing[0.5] },
  borderX1: { borderRightWidth: theme.spacing[1], borderLeftWidth: theme.spacing[1] },
  borderY1: { borderTopWidth: theme.spacing[1], borderBottomWidth: theme.spacing[1] },
  borderT1: { borderTopWidth: theme.spacing[1] },
  borderR1: { borderRightWidth: theme.spacing[1] },
  borderB1: { borderBottomWidth: theme.spacing[1] },
  borderL1: { borderLeftWidth: theme.spacing[1] },
  borderE1: { borderEndWidth: theme.spacing[1] },
  borderS1: { borderStartWidth: theme.spacing[1] },
  borderX2: { borderRightWidth: theme.spacing[2], borderLeftWidth: theme.spacing[2] },
  borderY2: { borderTopWidth: theme.spacing[2], borderBottomWidth: theme.spacing[2] },
  borderT2: { borderTopWidth: theme.spacing[2] },
  borderR2: { borderRightWidth: theme.spacing[2] },
  borderB2: { borderBottomWidth: theme.spacing[2] },
  borderL2: { borderLeftWidth: theme.spacing[2] },
  borderE2: { borderEndWidth: theme.spacing[2] },
  borderS2: { borderStartWidth: theme.spacing[2] },
  borderX3: { borderRightWidth: theme.spacing[3], borderLeftWidth: theme.spacing[3] },
  borderY3: { borderTopWidth: theme.spacing[3], borderBottomWidth: theme.spacing[3] },
  borderT3: { borderTopWidth: theme.spacing[3] },
  borderR3: { borderRightWidth: theme.spacing[3] },
  borderB3: { borderBottomWidth: theme.spacing[3] },
  borderL3: { borderLeftWidth: theme.spacing[3] },
  borderE3: { borderEndWidth: theme.spacing[3] },
  borderS3: { borderStartWidth: theme.spacing[3] },
  borderX4: { borderRightWidth: theme.spacing[4], borderLeftWidth: theme.spacing[4] },
  borderY4: { borderTopWidth: theme.spacing[4], borderBottomWidth: theme.spacing[4] },
  borderT4: { borderTopWidth: theme.spacing[4] },
  borderR4: { borderRightWidth: theme.spacing[4] },
  borderB4: { borderBottomWidth: theme.spacing[4] },
  borderL4: { borderLeftWidth: theme.spacing[4] },
  borderE4: { borderEndWidth: theme.spacing[4] },
  borderS4: { borderStartWidth: theme.spacing[4] },
  borderX5: { borderRightWidth: theme.spacing[5], borderLeftWidth: theme.spacing[5] },
  borderY5: { borderTopWidth: theme.spacing[5], borderBottomWidth: theme.spacing[5] },
  borderT5: { borderTopWidth: theme.spacing[5] },
  borderR5: { borderRightWidth: theme.spacing[5] },
  borderB5: { borderBottomWidth: theme.spacing[5] },
  borderL5: { borderLeftWidth: theme.spacing[5] },
  borderE5: { borderEndWidth: theme.spacing[5] },
  borderS5: { borderStartWidth: theme.spacing[5] },
  borderX6: { borderRightWidth: theme.spacing[6], borderLeftWidth: theme.spacing[6] },
  borderY6: { borderTopWidth: theme.spacing[6], borderBottomWidth: theme.spacing[6] },
  borderT6: { borderTopWidth: theme.spacing[6] },
  borderR6: { borderRightWidth: theme.spacing[6] },
  borderB6: { borderBottomWidth: theme.spacing[6] },
  borderL6: { borderLeftWidth: theme.spacing[6] },
  borderE6: { borderEndWidth: theme.spacing[6] },
  borderS6: { borderStartWidth: theme.spacing[6] },
  borderX7: { borderRightWidth: theme.spacing[7], borderLeftWidth: theme.spacing[7] },
  borderY7: { borderTopWidth: theme.spacing[7], borderBottomWidth: theme.spacing[7] },
  borderT7: { borderTopWidth: theme.spacing[7] },
  borderR7: { borderRightWidth: theme.spacing[7] },
  borderB7: { borderBottomWidth: theme.spacing[7] },
  borderL7: { borderLeftWidth: theme.spacing[7] },
  borderE7: { borderEndWidth: theme.spacing[7] },
  borderS7: { borderStartWidth: theme.spacing[7] },
  borderX8: { borderRightWidth: theme.spacing[8], borderLeftWidth: theme.spacing[8] },
  borderY8: { borderTopWidth: theme.spacing[8], borderBottomWidth: theme.spacing[8] },
  borderT8: { borderTopWidth: theme.spacing[8] },
  borderR8: { borderRightWidth: theme.spacing[8] },
  borderB8: { borderBottomWidth: theme.spacing[8] },
  borderL8: { borderLeftWidth: theme.spacing[8] },
  borderE8: { borderEndWidth: theme.spacing[8] },
  borderS8: { borderStartWidth: theme.spacing[8] },
  // Border Radius
  roundedNone: { borderRadius: 0 },
  roundedSm: { borderRadius: theme.spacing[2] },
  rounded: { borderRadius: theme.spacing[4] },
  roundedLg: { borderRadius: theme.spacing[8] },
  roundedFull: { borderRadius: 9999 },
  roundedTNone: { borderTopLeftRadius: 0, borderTopRightRadius: 0 },
  roundedRNone: { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
  roundedBNone: { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
  roundedLNone: { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
  roundedTlNone: { borderTopLeftRadius: 0 },
  roundedTrNone: { borderTopRightRadius: 0 },
  roundedBrNone: { borderBottomRightRadius: 0 },
  roundedBlNone: { borderBottomLeftRadius: 0 },
  roundedSNone: { borderTopStartRadius: 0, borderBottomStartRadius: 0 },
  roundedENone: { borderTopEndRadius: 0, borderBottomEndRadius: 0 },
  roundedTsNone: { borderTopStartRadius: 0 },
  roundedTeNone: { borderTopEndRadius: 0 },
  roundedBeNone: { borderBottomEndRadius: 0 },
  roundedBsNone: { borderBottomStartRadius: 0 },
  roundedTSm: { borderTopLeftRadius: theme.spacing[1], borderTopRightRadius: theme.spacing[1] },
  roundedRSm: { borderTopRightRadius: theme.spacing[1], borderBottomRightRadius: theme.spacing[1] },
  roundedBSm: { borderBottomLeftRadius: theme.spacing[1], borderBottomRightRadius: theme.spacing[1] },
  roundedLSm: { borderTopLeftRadius: theme.spacing[1], borderBottomLeftRadius: theme.spacing[1] },
  roundedTlSm: { borderTopLeftRadius: theme.spacing[1] },
  roundedTrSm: { borderTopRightRadius: theme.spacing[1] },
  roundedBrSm: { borderBottomRightRadius: theme.spacing[1] },
  roundedBlSm: { borderBottomLeftRadius: theme.spacing[1] },
  roundedSSm: { borderTopStartRadius: theme.spacing[1], borderBottomStartRadius: theme.spacing[1] },
  roundedESm: { borderTopEndRadius: theme.spacing[1], borderBottomEndRadius: theme.spacing[1] },
  roundedTsSm: { borderTopStartRadius: theme.spacing[1] },
  roundedTeSm: { borderTopEndRadius: theme.spacing[1] },
  roundedBeSm: { borderBottomEndRadius: theme.spacing[1] },
  roundedBsSm: { borderBottomStartRadius: theme.spacing[1] },
  roundedT: { borderTopLeftRadius: theme.spacing[2], borderTopRightRadius: theme.spacing[2] },
  roundedR: { borderTopRightRadius: theme.spacing[2], borderBottomRightRadius: theme.spacing[2] },
  roundedB: { borderBottomLeftRadius: theme.spacing[2], borderBottomRightRadius: theme.spacing[2] },
  roundedL: { borderTopLeftRadius: theme.spacing[2], borderBottomLeftRadius: theme.spacing[2] },
  roundedTl: { borderTopLeftRadius: theme.spacing[2] },
  roundedTr: { borderTopRightRadius: theme.spacing[2] },
  roundedBr: { borderBottomRightRadius: theme.spacing[2] },
  roundedBl: { borderBottomLeftRadius: theme.spacing[2] },
  roundedS: { borderTopStartRadius: theme.spacing[2], borderBottomStartRadius: theme.spacing[2] },
  roundedE: { borderTopEndRadius: theme.spacing[2], borderBottomEndRadius: theme.spacing[2] },
  roundedTs: { borderTopStartRadius: theme.spacing[2] },
  roundedTe: { borderTopEndRadius: theme.spacing[2] },
  roundedBe: { borderBottomEndRadius: theme.spacing[2] },
  roundedBs: { borderBottomStartRadius: theme.spacing[2] },
  roundedTLg: { borderTopLeftRadius: theme.spacing[4], borderTopRightRadius: theme.spacing[4] },
  roundedRLg: { borderTopRightRadius: theme.spacing[4], borderBottomRightRadius: theme.spacing[4] },
  roundedBLg: { borderBottomLeftRadius: theme.spacing[4], borderBottomRightRadius: theme.spacing[4] },
  roundedLLg: { borderTopLeftRadius: theme.spacing[4], borderBottomLeftRadius: theme.spacing[4] },
  roundedTlLg: { borderTopLeftRadius: theme.spacing[4] },
  roundedTrLg: { borderTopRightRadius: theme.spacing[4] },
  roundedBrLg: { borderBottomRightRadius: theme.spacing[4] },
  roundedBlLg: { borderBottomLeftRadius: theme.spacing[4] },
  roundedSLg: { borderTopStartRadius: theme.spacing[4], borderBottomStartRadius: theme.spacing[4] },
  roundedELg: { borderTopEndRadius: theme.spacing[4], borderBottomEndRadius: theme.spacing[4] },
  roundedTsLg: { borderTopStartRadius: theme.spacing[4] },
  roundedTeLg: { borderTopEndRadius: theme.spacing[4] },
  roundedBeLg: { borderBottomEndRadius: theme.spacing[4] },
  roundedBsLg: { borderBottomStartRadius: theme.spacing[4] },
  roundedTXl: { borderTopLeftRadius: theme.spacing[8], borderTopRightRadius: theme.spacing[8] },
  roundedRXl: { borderTopRightRadius: theme.spacing[8], borderBottomRightRadius: theme.spacing[8] },
  roundedBXl: { borderBottomLeftRadius: theme.spacing[8], borderBottomRightRadius: theme.spacing[8] },
  roundedLXl: { borderTopLeftRadius: theme.spacing[8], borderBottomLeftRadius: theme.spacing[8] },
  roundedTlXl: { borderTopLeftRadius: theme.spacing[8] },
  roundedTrXl: { borderTopRightRadius: theme.spacing[8] },
  roundedBrXl: { borderBottomRightRadius: theme.spacing[8] },
  roundedBlXl: { borderBottomLeftRadius: theme.spacing[8] },
  roundedSXl: { borderTopStartRadius: theme.spacing[8], borderBottomStartRadius: theme.spacing[8] },
  roundedEXl: { borderTopEndRadius: theme.spacing[8], borderBottomEndRadius: theme.spacing[8] },
  roundedTsXl: { borderTopStartRadius: theme.spacing[8] },
  roundedTeXl: { borderTopEndRadius: theme.spacing[8] },
  roundedBeXl: { borderBottomEndRadius: theme.spacing[8] },
  roundedBsXl: { borderBottomStartRadius: theme.spacing[8] },
  roundedTFull: { borderTopLeftRadius: 9999, borderTopRightRadius: 9999 },
  roundedRFull: { borderTopRightRadius: 9999, borderBottomRightRadius: 9999 },
  roundedBFull: { borderBottomLeftRadius: 9999, borderBottomRightRadius: 9999 },
  roundedLFull: { borderTopLeftRadius: 9999, borderBottomLeftRadius: 9999 },
  roundedTlFull: { borderTopLeftRadius: 9999 },
  roundedTrFull: { borderTopRightRadius: 9999 },
  roundedBrFull: { borderBottomRightRadius: 9999 },
  roundedBlFull: { borderBottomLeftRadius: 9999 },
  roundedSFull: { borderTopStartRadius: 9999, borderBottomStartRadius: 9999 },
  roundedEFull: { borderTopEndRadius: 9999, borderBottomEndRadius: 9999 },
  roundedTsFull: { borderTopStartRadius: 9999 },
  roundedTeFull: { borderTopEndRadius: 9999 },
  roundedBeFull: { borderBottomEndRadius: 9999 },
  roundedBsFull: { borderBottomStartRadius: 9999 }
}))