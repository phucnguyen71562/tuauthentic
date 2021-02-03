import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },

  gallery: {
    position: 'relative',

    display: 'flex',
    flexDirection: 'column',
  },

  details: {
    marginTop: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),

    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      paddingLeft: theme.spacing(3),
    },
  },

  actionsButton: {
    display: 'flex',
    height: 50,
  },
}));

export default styles;
