import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  titleWrapper: {
    padding: theme.spacing(2),
  },

  title: {
    fontSize: 30,
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
  },

  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

  content: {
    padding: theme.spacing(2),
  },
}));

export default styles;
