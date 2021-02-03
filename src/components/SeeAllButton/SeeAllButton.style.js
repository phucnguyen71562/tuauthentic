import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(5),
  },

  button: {
    boxShadow: '2px 2px 4px',

    textTransform: 'none',

    transition: theme.transitions.create('all'),

    '&:hover': {
      background: theme.palette.colors.gradient,

      color: theme.palette.common.white,
    },
  },
}));

export default styles;
