import { alpha, makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  card: {
    position: 'relative',

    transition: theme.transitions.create(['box-shadow', 'transform']),
    willChange: 'box-shadow, transform',

    '&:hover': {
      boxShadow: theme.shadows[4],
      transform: 'translateY(-2px)',
    },
  },

  cardFeatured: {
    width: 200,
  },

  cardAlsoLike: {
    boxShadow: theme.shadows[3],

    '&:hover': {
      boxShadow: theme.shadows[6],
    },
  },

  cardTitle: {
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
    overflow: 'hidden',

    height: '3.5em',
    maxHeight: '3.5em',
    marginTop: theme.spacing(1),

    whiteSpace: 'normal',
    lineHeight: '1.75em',

    fontFamily: "'Segoe UI', 'sans-serif'",
    fontWeight: 600,
    textTransform: 'capitalize',
    textOverflow: 'ellipsis',
  },

  imgWrapper: {
    position: 'relative',

    height: 0,
    paddingTop: '100%',
  },

  cardImg: {
    position: 'absolute',
    top: 0,
    left: 0,

    width: '100%',
    height: '100%',
  },

  discount: {
    position: 'absolute',
    bottom: -35,
    left: '50%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: 35,
    height: 35,
    borderRadius: '50%',

    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,

    fontSize: 12,
    fontWeight: theme.typography.fontWeightMedium,

    transform: 'translate(-50%, -50%)',
  },

  favoriteButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: 30,
    height: 30,
    borderRadius: '50%',
    border: 0,
    outline: 'none',
    cursor: 'pointer',

    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.1),
    },

    [theme.breakpoints.up('sm')]: {
      width: 40,
      height: 40,
    },
  },

  priceArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },

  priceBox: {
    display: 'flex',
    height: 43,
  },

  priceBoxOrder: {
    flexFlow: 'column nowrap',
    justifyContent: 'center',
  },

  priceBoxStock: {
    flexFlow: 'row wrap',
    alignItems: 'center',
  },

  price: {
    marginRight: 10,

    color: theme.palette.colors.price,

    fontWeight: theme.typography.fontWeightMedium,
  },

  originalPrice: {
    textDecoration: 'line-through',
  },

  status: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: 50,
    minWidth: 20,
    height: 20,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,

    color: theme.palette.primary.main,

    fontSize: 13,

    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
    },
  },
}));

export default styles;
