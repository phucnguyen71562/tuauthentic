import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    marginTop: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
  },

  quantityButton: {
    minWidth: 30,
    maxWidth: 40,
    borderColor: theme.palette.grey[300],

    [theme.breakpoints.up('md')]: {
      minWidth: 40,
      maxWidth: 50,
    },
  },

  minusButton: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  plusButton: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },

  quantityText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 30,

    borderTop: `1px solid ${theme.palette.grey[300]}`,
    borderBottom: `1px solid ${theme.palette.grey[300]}`,

    [theme.breakpoints.up('md')]: {
      minWidth: 40,
    },
  },
}));

export default styles;
