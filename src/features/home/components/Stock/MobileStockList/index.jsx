import CardItem from 'components/CardItem';
import GridCustom from 'components/GridCustom';
import PropTypes from 'prop-types';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

const MobileStockList = ({ products = [...new Array(20)], loading = true }) => {
  return (
    <GridCustom>
      {products.map((product, index) => (
        <CardItem
          key={loading ? index : product.id}
          product={product}
          loading={loading}
        />
      ))}
    </GridCustom>
  );
};

MobileStockList.propTypes = propTypes;

export default MobileStockList;
