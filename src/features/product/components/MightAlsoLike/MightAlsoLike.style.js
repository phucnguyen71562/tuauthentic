import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(5),
  },

  titleWrapper: {
    borderBottom: `3px solid ${theme.palette.text.primary}`,
  },

  title: {
    display: 'inline-block',
    padding: theme.spacing(1, 2),
    border: `1px solid ${theme.palette.text.primary}`,
    borderBottom: 0,

    fontWeight: theme.typography.fontWeightBold,
  },

  icon: {
    verticalAlign: 'middle',
  },

  wrapperContainer: {
    marginTop: theme.spacing(3),

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 4),
    },
  },
}));

export default styles;
