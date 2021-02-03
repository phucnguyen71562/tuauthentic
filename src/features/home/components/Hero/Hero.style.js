import { makeStyles } from '@material-ui/core/styles';
import background from 'assets/images/background.webp';

const styles = makeStyles((theme) => ({
  root: {
    position: 'relative',

    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden',

    [theme.breakpoints.up('xl')]: {
      minHeight: '60vh',
    },
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,

    width: '100%',
    height: '100%',

    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
  },

  vr: {
    position: 'fixed',
    right: 15,
    zIndex: 1,

    height: '100%',

    fontSize: 16,
    fontWeight: theme.typography.fontWeightLight,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,

    writingMode: 'vertical-lr',
    textOrientation: 'sideways',

    transform: 'rotate(0)',
  },

  wrapper: {
    display: 'flex',
    flexGrow: 1,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(6),
  },

  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',

    fontWeight: theme.typography.fontWeightBold,
  },

  title: {
    fontFamily: "'Dancing Script', cursive",
    fontSize: 70,
    letterSpacing: 4,

    opacity: 0,

    [theme.breakpoints.up('sm')]: {
      fontSize: 80,
    },
  },

  bannerImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',

    padding: theme.spacing(0, 2),
    marginTop: -32,

    opacity: 0,
  },

  img: {
    maxWidth: '100%',
    height: 'auto',
  },
}));

export default styles;
