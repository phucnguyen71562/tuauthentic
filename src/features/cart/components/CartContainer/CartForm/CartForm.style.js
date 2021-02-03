import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  information: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3),
    },
  },

  formLabel: {
    marginBottom: theme.spacing(2),

    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
  },

  wrapper: {
    display: 'flex',
    gap: 10,
    marginBottom: theme.spacing(4),
  },

  shippingType: {
    display: 'flex',
    flexDirection: 'column',
  },

  shippingAddress: {
    position: 'relative',

    marginTop: 10,
    padding: theme.spacing(3, 2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],

    backgroundColor: theme.palette.background.paper,

    '&::before': {
      content: '""',

      position: 'absolute',
      top: -20,
      left: 30,

      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderTop: '10px solid transparent',
      borderBottom: `10px solid ${theme.palette.background.paper}`,
    },
  },

  checkoutButton: {
    height: 50,
    marginTop: theme.spacing(4),
  },
}));

export default styles;
