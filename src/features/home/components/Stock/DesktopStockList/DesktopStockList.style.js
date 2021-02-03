import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  item: {
    padding: '4px',

    [theme.breakpoints.up('sm')]: {
      padding: '0 8px',
    },
  },
}));

export default styles;
