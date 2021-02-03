import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Skeleton from '@material-ui/core/Skeleton';
import Typography from '@material-ui/core/Typography';
import ErrorImage from 'assets/images/notfound.webp';
import clsx from 'clsx';
import AddToFavoriteButton from 'components/AddToFavoriteButton';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { formatPrice, getPriceDiscount } from 'utils/price';
import useStyles from './CardItem.style';

const propTypes = {
  featured: PropTypes.bool,
  alsoLike: PropTypes.bool,
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    discount: PropTypes.number,
    status: PropTypes.number,
    link: PropTypes.string,
  }),
  loading: PropTypes.bool.isRequired,
};

function CardItem({
  featured = false,
  alsoLike = false,
  product = {},
  loading = true,
}) {
  const classes = useStyles();

  return (
    <Card
      variant="outlined"
      className={clsx(classes.card, {
        [classes.cardFeatured]: featured,
        [classes.cardAlsoLike]: alsoLike,
      })}
    >
      <AddToFavoriteButton
        product={product}
        iconColor="secondary"
        className={classes.favoriteButton}
      />

      <CardActionArea
        component={loading ? 'div' : RouterLink}
        to={product.link}
        title={product.name}
      >
        {loading ? (
          <Skeleton variant="rectangular" className={classes.imgWrapper} />
        ) : (
          <Box className={classes.imgWrapper}>
            <CardMedia
              component="img"
              image={product.image}
              title={product.name}
              alt={product.name}
              className={classes.cardImg}
              onError={(e) => (e.target.src = ErrorImage)}
              loading="lazy"
            />
            {product.discount > 0 && (
              <Box className={classes.discount}>-{product.discount}&#37;</Box>
            )}
          </Box>
        )}

        <CardContent>
          {loading ? (
            <>
              <Skeleton />
              <Skeleton />
            </>
          ) : (
            <Typography
              component="h1"
              variant="subtitle1"
              gutterBottom
              className={classes.cardTitle}
            >
              {product.name}
            </Typography>
          )}

          {loading ? (
            <Skeleton width="60%" />
          ) : (
            <Box className={classes.priceArea}>
              <Box
                className={clsx(classes.priceBox, {
                  [classes.priceBoxOrder]: product.status === 2,
                  [classes.priceBoxStock]: product.status === 1,
                })}
              >
                <Typography
                  variant="body1"
                  component="strong"
                  className={classes.price}
                >
                  {getPriceDiscount(product.price, product.discount)}
                </Typography>
                {product.discount > 0 && (
                  <Typography
                    component="span"
                    variant="caption"
                    color="textSecondary"
                    className={classes.originalPrice}
                  >
                    {formatPrice(product.price)}
                  </Typography>
                )}
              </Box>
              {product.status === 2 && (
                <Box title="Hàng order" className={classes.status}>
                  Order
                </Box>
              )}
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CardItem.propTypes = propTypes;

export default CardItem;
