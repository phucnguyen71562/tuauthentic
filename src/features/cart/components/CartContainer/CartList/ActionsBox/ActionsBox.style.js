import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },

  actionButton: {
    width: 30,
    height: 30,
    padding: 0,

    border: 0,
    outline: 'none',

    cursor: 'pointer',

    background: 'transparent',

    color: theme.palette.text.primary,

    '&:hover': {
      opacity: 0.5,
    },

    [theme.breakpoints.up('md')]: {
      width: 50,
      height: 50,
    },
  },
}));

export default styles;
