import { alpha, makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  search: {
    position: 'relative',

    width: '100%',
    marginLeft: 0,
    borderRadius: 40,

    backgroundColor:
      theme.palette.mode === 'light'
        ? alpha(theme.palette.common.white, 0.5)
        : alpha(theme.palette.common.black, 0.35),

    [theme.breakpoints.up('md')]: {
      width: 'auto',
      marginLeft: theme.spacing(3),

      backgroundColor:
        theme.palette.mode === 'light'
          ? alpha(theme.palette.common.black, 0.05)
          : alpha(theme.palette.common.white, 0.15),
    },
  },

  searchIcon: {
    position: 'absolute',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    height: '100%',

    pointerEvents: 'none',
  },

  inputInput: {
    width: '100%',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,

    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
}));

export default styles;
