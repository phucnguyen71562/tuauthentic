import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { fetchProduct } from 'api/productApi';
import Breadcrumbs from 'components/Breadcrumbs';
import { addToCart } from 'features/cart/cartSlice';
import useDocumentTitle from 'hooks/useDocumentTitle';
import useFetch from 'hooks/useFetch';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Item from './components/Item';
import MightAlsoLike from './components/MightAlsoLike';
import Notification from './components/Notification';
import useStyles from './Product.style';

function ProductPage() {
  const classes = useStyles();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState('');
  const [sizeError, setSizeError] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const dispatch = useDispatch();

  const { productSlug } = useParams();
  const { data: product, isLoading } = useFetch(['product', productSlug], () =>
    fetchProduct(productSlug)
  );

  useDocumentTitle(
    product?.item?.name
      ? `${product.item.name} | Chính hãng, giá tốt | tuauthentic.com`
      : 'T&U Authentic - Shop fanwear chính hãng tại Buôn Ma Thuột'
  );

  const handleChooseSize = useCallback((value) => setSelectedSize(value), []);

  const handleAddToCart = useCallback(
    (product) => {
      if (selectedSize) {
        setSelectedProduct(product);
        dispatch(addToCart({ product, size: selectedSize }));
        setSizeError(false);
        setOpenNotification(true);
      } else {
        setSizeError(true);
      }
    },
    [dispatch, selectedSize]
  );

  const handleCloseNotification = () => {
    setOpenNotification(false);
  };

  return (
    <Box component="main" className={classes.root}>
      <Container>
        <Breadcrumbs>
          {product?.item?.category ? (
            <Link
              component={RouterLink}
              to={`/${product.item.category.slug}`}
              aria-current="page"
              color="textPrimary"
              underline="none"
            >
              {product.item.category.name}
            </Link>
          ) : (
            <Typography color="inherit">...</Typography>
          )}
        </Breadcrumbs>
      </Container>

      <Item
        product={product?.item}
        loading={isLoading}
        selectedSize={selectedSize}
        sizeError={sizeError}
        handleAddToCart={handleAddToCart}
        handleChooseSize={handleChooseSize}
      />

      <MightAlsoLike products={product?.alsoLikeList} loading={isLoading} />

      <Notification
        product={selectedProduct}
        size={selectedSize}
        openNotification={openNotification}
        handleCloseNotification={handleCloseNotification}
      />
    </Box>
  );
}

export default ProductPage;
