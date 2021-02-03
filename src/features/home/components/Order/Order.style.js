import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(7),
  },

  title: {
    fontSize: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',

    '&::before': {
      content: '""',

      display: 'block',
      width: 200,
      height: 5,
      marginLeft: 'auto',
      marginRight: 'auto',

      background: theme.palette.colors.gradient,

      transform: 'translateY(50px)',
    },

    '&::after': {
      content: '""',

      display: 'block',
      height: 10,
      width: 50,

      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 40,

      background: theme.palette.colors.gradient,

      transform: 'translateY(14px)',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: 32,

      '&::before': {
        transform: 'translateY(60px)',
      },
    },
  },
}));

export default styles;
