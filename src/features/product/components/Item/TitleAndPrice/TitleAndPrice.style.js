import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    fontFamily: 'Montserrat, sans-serif',
    textTransform: 'capitalize',
    letterSpacing: 2,
  },

  price: {
    color: theme.palette.colors.price,

    fontWeight: theme.typography.fontWeightMedium,
  },

  status: {
    right: -55,
    top: 15,
    padding: '4px 8px',

    [theme.breakpoints.up('md')]: {
      top: 17,
    },
  },

  originalPrice: {
    marginLeft: 10,

    textDecoration: 'line-through',
  },
}));

export default styles;
