import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '70vh',
  },

  title: {
    position: 'relative',

    textShadow:
      '-3px -3px 6px rgba(255, 255, 255, 1), 3px 3px 6px rgba(0, 0, 0, 0.3)',

    fontSize: 120,
    fontWeight: theme.typography.fontWeightBold,

    color: theme.palette.background.default,
  },

  subtitle: {
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default styles;
