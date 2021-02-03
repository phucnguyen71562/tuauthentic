import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  slide: {
    width: '100%',
    height: '100%',
  },

  slideItem: {
    overflow: 'hidden',
  },

  img: {
    paddingTop: 50,
    paddingBottom: 20,
  },

  number: {
    position: 'absolute',
    top: '1rem',

    color: theme.palette.common.black,

    fontSize: theme.spacing(3),
  },
}));

export default styles;
