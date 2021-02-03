import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),

    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(8),
    },
  },

  title: {
    marginBottom: theme.spacing(3),

    textTransform: 'capitalize',
  },
}));

export default styles;
