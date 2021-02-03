import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import CardItem from 'components/CardItem';
import Empty from 'components/Empty';
import GridCustom from 'components/GridCustom';
import PropTypes from 'prop-types';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const ListContent = ({ products }) => {
  if (products.length === 0)
    return (
      <Empty
        title="Chưa có sản phẩm yêu thích."
        icon={SentimentDissatisfiedIcon}
      />
    );

  return (
    <GridCustom>
      {products.map((product) => (
        <CardItem key={product.id} product={product} loading={false} />
      ))}
    </GridCustom>
  );
};

ListContent.propTypes = propTypes;

export default ListContent;
