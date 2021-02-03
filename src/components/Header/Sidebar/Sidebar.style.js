import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  list: {
    width: 280,

    backgroundColor: theme.palette.background.paper,
  },

  listSubheader: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(3, 2, 2),
  },
}));

export default styles;
