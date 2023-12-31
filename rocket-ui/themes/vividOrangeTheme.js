import { createTheme } from '@mui/material/styles'
import componentsOverride from './common/overrides'
import { generateCustomShadows, generateShadows } from './common/shadows'
import { palette } from './orangeTheme'
import { generateTypography } from './common/typography'
import table from './common/table'

export const vividOrangeTheme = createTheme({
  palette: {
    ...palette,
    BACKGROUND: {
      main: '#eee'
    }
  },
  shape: { borderRadius: 8 },
  typography: generateTypography(palette),
  table,
  shadows: generateShadows(palette),
  customShadows: generateCustomShadows(palette)
})

vividOrangeTheme.components = componentsOverride(vividOrangeTheme)

export default vividOrangeTheme
