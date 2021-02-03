import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from 'assets/images/logo.png';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import SearchBox from './SearchBox';
import Sidebar from './Sidebar';
import useStyles from './Header.style';
import MoveToFavorite from './MoveToFavorite';
import MoveToCart from './MoveToCart';
import ThemeModeSwitcher from './ThemeModeSwitcher';

function Header() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <AppBar
      position={location.pathname === '/' ? 'absolute' : 'relative'}
      color="transparent"
      elevation={0}
    >
      <Toolbar>
        <Hidden mdUp>
          <Sidebar />
        </Hidden>

        <Hidden mdDown>
          <Box component={RouterLink} to="/">
            <Box
              component="img"
              src={Logo}
              alt="logo"
              className={classes.logo}
            />
          </Box>
        </Hidden>

        <SearchBox />

        <Hidden mdDown>
          <Box sx={{ flexGrow: 1 }} />

          <Navbar />

          <MoveToFavorite />

          <MoveToCart />
        </Hidden>

        <ThemeModeSwitcher />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
