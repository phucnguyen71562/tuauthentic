import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import ActionsBox from './ActionsBox';
import useStyles from './CartList.style';
import InformationBox from './InformationBox';
import QuantityBox from './QuantityBox';

const propTypes = {
  item: PropTypes.shape({
    product: PropTypes.object,
    quantity: PropTypes.number,
    size: PropTypes.string,
  }).isRequired,
};

function CartList({ item: { product, quantity, size } }) {
  const classes = useStyles();

  return (
    <ListItem alignItems="flex-start" className={classes.root}>
      <Grid item xs={5} md={4}>
        <Link component={RouterLink} to={product.link} sx={{ display: 'flex' }}>
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            className={classes.img}
          />
        </Link>
      </Grid>

      <Grid item xs={7} md={8} className={classes.details}>
        <Box className={classes.detailsWrapper}>
          <InformationBox product={product} size={size} />

          <QuantityBox product={product} quantity={quantity} size={size} />
        </Box>

        <ActionsBox product={product} size={size} />
      </Grid>
    </ListItem>
  );
}

CartList.propTypes = propTypes;

export default CartList;
