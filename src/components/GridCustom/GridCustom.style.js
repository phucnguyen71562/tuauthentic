import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: theme.spacing(1),
    marginTop: theme.spacing(4),

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    },

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
      gap: theme.spacing(2),
    },

    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
    },
  },
}));

export default styles;
