import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: theme.spacing(4),
  },

  colorVariation: {
    position: 'relative',

    display: 'block',
    width: 60,
    height: 60,
    marginRight: 16,
    marginBottom: 16,

    backgroundColor: '#ebedee',

    cursor: 'pointer',
  },

  selected: {
    cursor: 'default',

    '&::after': {
      content: "''",

      position: 'absolute',
      left: 0,
      bottom: 0,

      width: '100%',
      height: 3,
      backgroundColor: theme.palette.common.black,
    },
  },

  tickIconWrapper: {
    position: 'absolute',
    top: -10,
    right: -10,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: 24,
    height: 24,
    borderRadius: '50%',

    backgroundColor:
      theme.palette.mode === 'light'
        ? theme.palette.common.black
        : theme.palette.common.white,

    color:
      theme.palette.mode === 'light'
        ? theme.palette.common.white
        : theme.palette.common.black,
  },

  image: {
    width: '100%',
    height: '100%',
  },
}));

export default styles;
