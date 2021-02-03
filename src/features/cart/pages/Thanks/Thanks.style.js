import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),

    overflow: 'hidden',
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    padding: theme.spacing(8, 1, 10),

    borderRadius: 10,
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',

    background: theme.palette.background.paper,

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(13, 3, 13),
    },
  },

  icon: {
    marginBottom: theme.spacing(4),

    color: theme.palette.success.main,

    fontSize: 100,
  },

  button: {
    marginTop: theme.spacing(4),
  },
}));

export default styles;
