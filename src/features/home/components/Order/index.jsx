import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CardItem from 'components/CardItem';
import GridCustom from 'components/GridCustom';
import SeeAllButton from 'components/SeeAllButton';
import PropTypes from 'prop-types';
import useStyles from './Order.style';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

function Order({ products = [...new Array(20)], loading = true }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography
        component="h2"
        variant="h4"
        align="center"
        gutterBottom
        className={classes.title}
      >
        Hàng Order
      </Typography>

      <GridCustom>
        {products.map((product, index) => (
          <CardItem
            key={loading ? index : product.id}
            product={product}
            loading={loading}
          />
        ))}
      </GridCustom>

      <SeeAllButton type="order" />
    </Box>
  );
}

Order.propTypes = propTypes;

export default Order;
