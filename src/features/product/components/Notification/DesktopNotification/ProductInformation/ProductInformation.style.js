import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  img: {
    maxWidth: '100%',
    height: 'auto',
  },

  information: {
    paddingLeft: theme.spacing(2),
  },

  informationName: {
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 3,
    overflow: 'hidden',

    fontFamily: 'Montserrat',
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: 1.2,
    textTransform: 'uppercase',
    textOverflow: 'ellipsis',
  },

  price: {
    color: theme.palette.colors.price,

    fontWeight: theme.typography.fontWeightBold,
  },

  originalPrice: {
    textDecoration: 'line-through',
  },
}));

export default styles;
