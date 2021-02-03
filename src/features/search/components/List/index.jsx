import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import CardItem from 'components/CardItem';
import Empty from 'components/Empty';
import GridCustom from 'components/GridCustom';
import PropTypes from 'prop-types';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

function List({ products = [...new Array(20)], loading = true }) {
  if (!loading && products.length === 0) {
    return (
      <Empty
        title="Không có kết quả nào khớp với từ khóa."
        icon={SentimentVeryDissatisfiedIcon}
      />
    );
  }

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
}

List.propTypes = propTypes;

export default List;
