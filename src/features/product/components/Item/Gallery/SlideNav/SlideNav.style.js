import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  slideButton: {
    position: 'absolute',
    top: '50%',
    zIndex: 10,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    padding: theme.spacing(1),
    margin: theme.spacing(0.85),
    border: 0,
    outline: 'none',

    background: 'transparent',

    color: theme.palette.common.black,

    fontSize: 13,
    textTransform: 'lowercase',
    lineHeight: 1,

    cursor: 'pointer',

    '&::before, &::after': {
      content: '""',

      position: 'absolute',
      top: '50%',

      width: 70,
      height: 1,

      background: 'currentColor',

      transition: theme.transitions.create('width'),
    },

    '&::before': {
      right: '100%',
    },

    '&::after': {
      left: '100%',
    },

    '&:hover': {
      color: theme.palette.grey[800],

      '&::before, &::after': {
        width: 100,
      },
    },
  },

  slideButton_prev: {
    transform: 'rotate(-90deg) translateY(-50%)',
    left: 10,
    right: 'auto',
  },

  slideButton_next: {
    transform: 'rotate(90deg) translateY(-25%)',
    left: 'auto',
    right: 10,
  },

  slideButton_disabled: {
    opacity: 0.35,
    cursor: 'not-allowed',
  },
}));

export default styles;
