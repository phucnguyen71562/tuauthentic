import CssBaseline from '@material-ui/core/CssBaseline';
import { viVN } from '@material-ui/core/locale';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles';
import 'assets/css/nprogress.css';
import { useThemeMode } from 'contexts/ThemeModeContext';
import merge from 'lodash/merge';
import { useMemo } from 'react';
import Routes from 'Routes';
import 'slick-carousel/slick/slick.css';
import 'swiper/swiper-bundle.css';
import customTheme from './app/theme';

function App() {
  const { themeMode } = useThemeMode();

  const theme = useMemo(
    () =>
      responsiveFontSizes(
        createMuiTheme(
          merge(customTheme, {
            palette: {
              mode: themeMode,
            },
          }),
          viVN
        )
      ),
    [themeMode]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
