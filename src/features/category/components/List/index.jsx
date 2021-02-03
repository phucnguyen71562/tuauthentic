import Box from '@material-ui/core/Box';
import TitleWrapper from 'components/TitleWrapper';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import useStyles from './List.style';
import ListContent from './ListContent';

const categoryType = (param) => {
  const categoryOption = ['', 'có sẵn', 'order'];
  return categoryOption[param];
};

const propTypes = {
  categoryName: PropTypes.string.isRequired,
  listType: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

function List({
  categoryName,
  listType,
  sortType,
  products = [...new Array(20)],
  loading = true,
}) {
  const classes = useStyles();

  const listProducts = useCallback(() => {
    switch (listType) {
      case 'all':
        return [...products];

      case 'order':
        return [...products].filter((product) => product.status === 2);

      case 'stock':
        return [...products].filter((product) => product.status === 1);

      default:
        return [...products];
    }
  }, [products, listType]);

  const sortedProducts = useCallback(() => {
    switch (sortType) {
      case 'trending':
        return listProducts();

      case 'price-desc':
        return listProducts().sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );

      case 'price-asc':
        return listProducts().sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );

      default:
        return listProducts();
    }
  }, [listProducts, sortType]);

  return (
    <Box className={classes.root}>
      <TitleWrapper>
        {categoryName} {categoryType(listType)}
      </TitleWrapper>

      <ListContent
        sortedProducts={loading ? products : sortedProducts()}
        loading={loading}
      />
    </Box>
  );
}

List.propTypes = propTypes;

export default List;
