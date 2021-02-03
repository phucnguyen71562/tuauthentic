import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },

  loading: {
    width: 150,

    animation: '$colorRotate 2s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
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
