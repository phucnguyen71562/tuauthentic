import { alpha, makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
  },

  typeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },

  title: {
    marginRight: theme.spacing(3),
    fontWeight: theme.typography.fontWeightMedium,
  },

  sortMenuButton: {
    padding: theme.spacing(1, 2),
    borderRadius: 999,

    background: theme.palette.common.black,

    color: theme.palette.common.white,

    fontSize: 13,

    '&:hover': {
      background: alpha(theme.palette.common.black, 0.8),
    },

    '&:disabled': {
      background: alpha(theme.palette.common.black, 0.04),
    },
  },
}));

export default styles;
