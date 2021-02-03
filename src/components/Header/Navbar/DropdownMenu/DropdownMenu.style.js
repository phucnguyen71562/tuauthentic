import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  dropdown: {
    position: 'relative',

    display: 'inline-flex',
    alignSelf: 'stretch',
    justifyContent: 'center',
    minWidth: 40,

    cursor: 'pointer',

    '&:hover $dropdownMenu': {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateY(0)',
    },
  },

  dropdownText: {
    margin: 'auto 0',

    fontWeight: theme.typography.fontWeightMedium,
    letterSpacing: 2,
    textTransform: 'capitalize',
  },

  dropdownMenu: {
    position: 'absolute',
    top: '95%',
    left: -15,
    zIndex: 1100,

    display: 'flex',
    flexDirection: 'column',

    width: 180,

    padding: theme.spacing(2, 3),

    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],

    backgroundColor: theme.palette.background.paper,

    opacity: 0,
    visibility: 'hidden',
    transform: 'translateY(40px)',

    transition: theme.transitions.create('all'),

    '&::before': {
      content: '""',

      position: 'absolute',
      top: -8,
      left: 25,
      zIndex: -1,

      width: 18,
      height: 18,

      borderRadius: theme.shape.borderRadius,

      transform: 'rotate(45deg)',

      backgroundColor: theme.palette.background.paper,
    },
  },

  dropdownMenuItem: {
    fontSize: 13,

    '&:not(:last-child)': {
      marginBottom: 12,
    },

    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

export default styles;
