import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
  },

  cartBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  price: {
    color: theme.palette.colors.price,
    fontWeight: theme.typography.fontWeightBold,
  },

  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default styles;
