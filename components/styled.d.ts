import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    navbarHeight: string
    navbarHeightNb: number
    mobielNavbarHeight: string
    mobielNavbarHeightNb: number
    sectionHeight: string
    contentMaxWidth: string
    colors: {
      brandPrimary: string
      brandSecondary: string
      brandTertiary: string
      defaultColor: string
      darkGrey: string
      grey: string
      lightGrey: string
      white: string
      offWhite: string
      darkerOffWhite: string
    }
    fonts: {
      xxlarge: string
      xlarge: string
      large: string
      medium: string
      small: string
      tiny: string
    }
    spacing: {
      xs: string
      s: string
      m: string
      l: string
      xl: string
    }
  }
}
