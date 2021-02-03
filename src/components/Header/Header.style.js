import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  logo: {
    width: 200,
    padding: theme.spacing(1, 2),

    '&:hover': {
      animation: '$colorRotate 1s',
      animationIterationCount: 'infinite',
      animationDirection: 'alternate',
    },
  },

  '@keyframes colorRotate': {
    from: {
      filter: 'hue-rotate(0deg)',
    },
    to: {
      filter: 'hue-rotate(360deg)',
    },
  },
}));

export default styles;
