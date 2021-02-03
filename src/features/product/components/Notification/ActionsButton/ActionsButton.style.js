import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,

    fontSize: 16,
    letterSpacing: 1,
  },

  icon: {
    fontSize: 28,
  },
}));

export default styles;
