import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh',
  },

  icon: {
    marginBottom: theme.spacing(3),
    fontSize: 100,
  },
}));

export default styles;
