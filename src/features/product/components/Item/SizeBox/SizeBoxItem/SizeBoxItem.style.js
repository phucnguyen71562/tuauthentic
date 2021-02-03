import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  sizeItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    minWidth: `${100 / 6}%`,
    padding: theme.spacing(2),

    cursor: 'pointer',

    '&:hover': {
      boxShadow: theme.shadows[4],
    },
  },

  sizeItem_active: {
    background: theme.palette.primary.main,

    color: theme.palette.common.white,
  },

  sizeText: {
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
  },
}));

export default styles;
