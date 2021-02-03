import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AddToFavoriteButton from 'components/AddToFavoriteButton';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart';
import ColorBox from './ColorBox';
import DescriptionBox from './DescriptionBox';
import Gallery from './Gallery';
import useStyles from './Item.style';
import Series from './Series';
import SizeBox from './SizeBox';
import TitleAndPrice from './TitleAndPrice';

const propTypes = {
  product: PropTypes.shape({
    background: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    status: PropTypes.number,
    price: PropTypes.number,
    discount: PropTypes.number,
    sizes: PropTypes.array,
    quantity: PropTypes.number,
    description: PropTypes.string,
    color: PropTypes.string,
    images: PropTypes.array,
    series: PropTypes.array,
  }),
  loading: PropTypes.bool,
  selectedSize: PropTypes.string.isRequired,
  sizeError: PropTypes.bool.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleChooseSize: PropTypes.func.isRequired,
};

function Item({
  product = {
    background: '',
    id: 0,
    name: '',
    image: '',
    status: 0,
    price: 0,
    discount: 0,
    sizes: [],
    quantity: 0,
    description: '',
    color: '',
    images: [],
    series: [],
  },
  loading = true,
  selectedSize,
  sizeError,
  handleAddToCart,
  handleChooseSize,
}) {
  const classes = useStyles();

  return (
    <Container
      component="section"
      maxWidth="xl"
      disableGutters
      className={classes.root}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={7}
          className={classes.gallery}
          style={{
            backgroundColor: product.background,
            minHeight: loading && '70vh',
          }}
        >
          <Gallery
            image={product.image}
            images={product.images}
            loading={loading}
          />
        </Grid>

        <Grid item xs={12} md={5} className={classes.details}>
          <TitleAndPrice
            name={product.name}
            status={product.status}
            price={product.price}
            discount={product.discount}
            loading={loading}
          />

          <SizeBox
            quantity={product.quantity}
            sizes={product.sizes}
            loading={loading}
            selectedSize={selectedSize}
            sizeError={sizeError}
            handleChooseSize={handleChooseSize}
          />

          <Box className={classes.actionsButton}>
            <AddToCart
              handleAddToCart={handleAddToCart}
              product={product}
              loading={loading}
            />

            <AddToFavoriteButton
              component={Button}
              product={product}
              variant="outlined"
              disabled={loading}
              sx={{ ml: '10px', minWidth: 50 }}
            />
          </Box>

          <DescriptionBox description={product.description} loading={loading} />

          <ColorBox color={product.color} loading={loading} />

          <Series id={product.id} series={product.series} loading={loading} />
        </Grid>
      </Grid>
    </Container>
  );
}

Item.propTypes = propTypes;

export default Item;
