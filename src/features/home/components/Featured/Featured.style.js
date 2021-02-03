import { alpha, makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),

    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(12),
    },
  },

  titleWrapper: {
    marginBottom: theme.spacing(6),
  },

  titleShadow: {
    position: 'relative',
    overflow: 'hidden',

    color: alpha(theme.palette.error.main, 0.1),

    fontSize: 60,
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,

    userSelect: 'none',

    [theme.breakpoints.up('md')]: {
      fontSize: 80,
    },
  },

  title: {
    position: 'absolute',
    bottom: -15,
    left: '50%',
    transform: 'translate(-50%, -50%)',

    fontSize: 30,
    textTransform: 'uppercase',
    letterSpacing: 6,

    [theme.breakpoints.up('md')]: {
      fontSize: 36,
    },
  },
}));

export default styles;
