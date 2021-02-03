import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(12),
  },

  root: {
    position: 'relative',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: -8,
    padding: theme.spacing(23, 13, 18),
    overflow: 'hidden',

    background: theme.palette.background.paper,

    '&::before, &::after': {
      position: 'absolute',
      top: 80,

      width: '22%',
      height: 1,

      background: theme.palette.text.primary,
    },

    '&::before': {
      left: 100,
    },

    '&::after': {
      right: 100,
    },

    [theme.breakpoints.up('sm')]: {
      '&::before, &::after': {
        content: '""',
      },
    },
  },

  waveImg: {
    width: '100%',
    height: 'auto',

    background: theme.palette.background.paper,
  },

  rotate: {
    position: 'relative',

    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',

    width: 200,
    height: 200,
    transform: 'rotate(45deg)',

    '&::before, &::after': {
      content: '""',

      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '135%',
      height: 1,

      background: theme.palette.text.primary,
    },

    '&::before': {
      transform: 'translate(-50%, -50%)',
    },

    '&::after': {
      transform: 'translate(-50%, -50%) rotate(90deg)',
    },
  },

  group: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 200,
  },

  groupItem: {
    position: 'relative',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    transform: 'rotate(-45deg)',

    color: 'inherit',
  },

  icon: {
    borderRadius: '50%',

    fontSize: 32,

    background: theme.palette.background.paper,

    cursor: 'pointer',
    transition: theme.transitions.create('all'),

    ':hover': {
      paddingBottom: theme.spacing(1),
      paddingTop: theme.spacing(1),

      fill: theme.palette.background.paper,
      background: theme.palette.text.primary,
    },

    '&:hover + span': {
      transform: 'translate(0, 0)',
      opacity: 1,
    },
  },

  text: {
    transition: theme.transitions.create('all'),

    '&:hover': {
      opacity: 0.7,
    },
  },

  textAnimate: {
    opacity: 0,
    transform: 'translate(-50%, 300%)',
    transition: theme.transitions.create('all'),
    pointerEvents: 'none',
  },

  emailText: {
    position: 'absolute',
    left: 50,

    display: 'none',

    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },

  facebookText: {
    position: 'absolute',
    top: -115,

    display: 'block',

    background: theme.palette.colors.gradient,
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',

    color: theme.palette.secondary.main,

    fontFamily: 'Gugi, cursive',
    fontSize: 32,

    textAlign: 'center',
    lineHeight: 1.4,
    letterSpacing: 2,
    textTransform: 'uppercase',

    [theme.breakpoints.up('md')]: {
      top: -145,

      fontSize: 48,
    },
  },

  phoneText: {
    position: 'absolute',
    right: 50,

    display: 'none',
    width: 100,

    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },

  roomText: {
    position: 'absolute',
    bottom: -75,

    display: 'block',
    width: 300,

    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',

    [theme.breakpoints.up('sm')]: {
      bottom: -50,
      width: 390,
    },
  },

  copyrightWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1),

    background: theme.palette.background.paper,
  },

  copyright: {
    color:
      theme.palette.mode === 'light'
        ? theme.palette.grey[700]
        : theme.palette.getContrastText(theme.palette.background.default),
  },
}));

export default styles;
