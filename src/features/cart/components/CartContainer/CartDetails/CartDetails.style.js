import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 0),
  },

  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: theme.spacing(2),
  },
}));

export default styles;
