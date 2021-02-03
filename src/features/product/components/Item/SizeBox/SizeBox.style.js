import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },

  outOfStockText: {
    paddingLeft: theme.spacing(2),

    fontWeight: theme.typography.fontWeightBold,
  },

  title: {
    marginBottom: theme.spacing(3),

    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default styles;
