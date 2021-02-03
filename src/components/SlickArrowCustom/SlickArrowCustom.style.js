import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  arrow: {
    position: 'absolute',
    top: '50%',

    width: 40,
    height: 40,
    marginTop: -30,
    transform: 'translateY(-50%)',

    borderRadius: '50%',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
    outline: 0,

    background: theme.palette.mode === 'light' ? '#fafafa' : '#232323',
    color: theme.palette.mode === 'light' ? '#000' : 'fff',

    lineHeight: '40px',
    textAlign: 'center',

    cursor: 'pointer',

    '&.slick-disabled': {
      opacity: 0,
    },
  },

  arrowNext: {
    right: -10,
  },

  arrowPrev: {
    left: -10,
    zIndex: 1,
  },

  icon: {
    verticalAlign: 'middle',
    fontSize: 27,
  },
}));

export default styles;
