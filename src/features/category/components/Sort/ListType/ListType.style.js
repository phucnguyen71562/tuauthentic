import { makeStyles } from '@material-ui/core/styles';
import { green, deepOrange } from '@material-ui/core/colors';

const styles = makeStyles((theme) => ({
  labelBox: {
    '@media screen and (max-width: 374px)': {
      marginRight: theme.spacing(1),
    },
  },

  labelFont: {
    fontSize: '0.9rem',

    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
  },

  orderIcon: {
    color: deepOrange[400],

    '&$checked': {
      color: deepOrange[600],
    },
  },

  stockIcon: {
    color: green[400],

    '&$checked': {
      color: green[600],
    },
  },

  checked: {},
}));

export default styles;
