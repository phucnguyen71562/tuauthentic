import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),

    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(4),
    },
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    height: 40,
    paddingLeft: theme.spacing(1),

    borderLeft: `4px solid ${theme.palette.text.primary}`,

    fontWeight: theme.typography.fontWeightMedium,
    textTransform: 'uppercase',

    [theme.breakpoints.up('md')]: {
      height: 50,

      fontSize: '1.25rem',
      fontWeight: theme.typography.fontWeightBold,
    },
  },

  colorBox: {
    display: 'flex',
    alignItems: 'center',
  },

  colorName: {
    marginLeft: theme.spacing(1),

    fontWeight: theme.typography.fontWeightMedium,
  },
}));

export default styles;
