import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    alignItems: 'stretch',
    padding: 0,

    '&:not(:last-child)': {
      marginBottom: theme.spacing(5),
    },

    [theme.breakpoints.up('md')]: {
      borderRadius: 10,

      boxShadow: theme.shadows[3],

      overflow: 'hidden',

      background: theme.palette.background.paper,
    },
  },

  img: {
    maxWidth: '100%',
    height: 'auto',
  },

  details: {
    display: 'flex',
    marginLeft: theme.spacing(2),

    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(4),
    },
  },

  detailsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,

    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
}));

export default styles;
