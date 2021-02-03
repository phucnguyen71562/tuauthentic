import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '70vh',
  },

  icon: {
    marginBottom: theme.spacing(3),
    fontSize: 100,
  },
}));
