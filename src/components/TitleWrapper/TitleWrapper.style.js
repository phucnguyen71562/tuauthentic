import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    position: 'relative',

    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',

    width: 'auto',
    height: 50,
    minHeight: 50,
    padding: theme.spacing(0, 3),
    borderColor: theme.palette.common.white,

    backgroundColor: theme.palette.common.black,

    color: theme.palette.common.white,

    lineHeight: 50,

    '&::after, &::before': {
      content: '""',

      position: 'absolute',

      display: 'block',
    },

    '&::before': {
      bottom: -3,
      left: 3,
      width: '100%',
      height: 3,

      borderBottom: `1px solid ${theme.palette.common.black}`,
      borderLeft: `1px solid ${theme.palette.common.black}`,
    },

    '&::after': {
      top: 3,
      right: -3,
      width: 3,
      height: '100%',

      borderRight: `1px solid ${theme.palette.common.black}`,
      borderTop: `1px solid ${theme.palette.common.black}`,
    },
  },

  title: {
    color: theme.palette.common.white,

    fontSize: '1rem',
    fontWeight: theme.typography.fontWeightMedium,
    textTransform: 'uppercase',
    letterSpacing: 2,

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.3rem',
    },
  },
}));

export default styles;
