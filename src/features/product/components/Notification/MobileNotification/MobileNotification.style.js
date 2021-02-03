import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },

  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
  },

  closeButton: {
    color: theme.palette.grey[500],
  },
}));

export default styles;
