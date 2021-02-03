import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    letterSpacing: 2,
    textTransform: 'capitalize',
  },

  normalLink: {
    position: 'relative',

    display: 'flex',
    justifyContent: 'center',
    minWidth: 40,

    textShadow:
      theme.palette.mode === 'dark'
        ? `0px 0px 2px ${theme.palette.common.black}`
        : 'none',

    '&::after': {
      content: '""',

      position: 'absolute',
      left: 0,
      bottom: -3,

      width: '100%',
      height: 2,

      backgroundColor: theme.palette.text.primary,

      transform: 'scaleX(0)',
      transformOrigin: 'right',
      transition: theme.transitions.create('transform'),
    },

    '&:hover': {
      '&::after': {
        transform: 'scaleX(1)',
        transformOrigin: 'left',
      },
    },
  },
}));

export default styles;
