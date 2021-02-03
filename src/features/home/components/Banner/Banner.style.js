import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 0),
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',

    backgroundColor:
      theme.palette.type === 'light'
        ? '#f8f9fa'
        : theme.palette.background.paper,

    cursor: 'default',

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(7, 0),
    },
  },

  container: {
    position: 'relative',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapperImg: {
    position: 'absolute',
    top: -350,

    pointerEvents: 'none',
  },

  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },

  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: 48,
    height: 48,
    borderRadius: '50%',
    boxShadow: `-4px -4px 8px ${theme.palette.common.white}, 4px 4px 8px rgba(0, 0, 0, 0.3)`,

    [theme.breakpoints.up('md')]: {
      width: 64,
      height: 64,
    },
  },

  icon: {
    fontSize: 32,

    transition: theme.transitions.create('transform'),
    willChange: 'transform',

    [theme.breakpoints.up('md')]: {
      fontSize: 40,
    },
  },

  loopIcon: {
    '&:hover': {
      transform: 'rotate(360deg) scale(0.8)',
    },
  },

  walletIcon: {
    '&:hover': {
      opacity: 0.8,
      transform: 'scale(0.8)',
    },
  },

  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    marginTop: theme.spacing(3),

    fontWeight: theme.typography.fontWeightBold,
  },

  content: {
    fontWeight: theme.typography.fontWeightLight,
    textAlign: 'center',
  },
}));

export default styles;
