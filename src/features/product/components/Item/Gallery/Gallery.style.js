import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  thumbsContainer: {
    position: 'relative',
    zIndex: 10,

    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },

  thumbsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  thumbsItem: {
    cursor: 'pointer',

    '&:not(:last-child)': {
      marginRight: 10,
    },

    [theme.breakpoints.down('md')]: {
      width: 15,
      height: 1,

      background: `${theme.palette.common.black} !important`,
    },

    [theme.breakpoints.up('md')]: {
      width: 50,
      height: 50,
      border: '0.5px solid #666',
      borderRadius: theme.shape.borderRadius,

      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
  },

  thumbsItem_active: {
    borderBottom: `3px solid ${theme.palette.primary.main}`,
  },
}));

export default styles;
