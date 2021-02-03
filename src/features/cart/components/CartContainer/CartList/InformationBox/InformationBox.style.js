import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },

  name: {
    marginBottom: theme.spacing(0.5),

    fontFamily: 'Montserrat',
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
  },

  originalPrice: {
    textDecoration: 'line-through',
  },
}));

export default styles;
