import { createTheme } from '@mui/material/styles';
import { teal, deepOrange ,cyan,orange} from '@mui/material/colors';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = extendTheme({
    trello: {
       appBarHeight:'54px',
       boardBarHeight:'62px'
    },
    colorSchemes: {
      light: {
        palette: {
          primary: teal,
          secondary: deepOrange
        },
      },
      dark: {
        palette: {
          primary:cyan,
          secondary: orange
        },
      },
    },
  });

export default theme;