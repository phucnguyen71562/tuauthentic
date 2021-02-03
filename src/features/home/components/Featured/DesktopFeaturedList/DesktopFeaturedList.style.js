import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  item: {
    [theme.breakpoints.up('md')]: {
      padding: '0 10px',
    },
  },

  center: {
    '& > .slick-list': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
}));

export default styles;
