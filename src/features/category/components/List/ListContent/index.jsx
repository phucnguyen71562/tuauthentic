import SpeakerNotesOffOutlinedIcon from '@material-ui/icons/SpeakerNotesOffOutlined';
import CardItem from 'components/CardItem';
import Empty from 'components/Empty';
import GridCustom from 'components/GridCustom';
import PropTypes from 'prop-types';

const propTypes = {
  sortedProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
};

const ListContent = ({ sortedProducts, loading = true }) => {
  if (!loading && sortedProducts.length === 0) {
    return (
      <Empty
        title="Chưa có sản phẩm trong danh sách."
        icon={SpeakerNotesOffOutlinedIcon}
      />
    );
  }

  return (
    <GridCustom>
      {sortedProducts.map((product, index) => (
        <CardItem
          key={loading ? index : product.id}
          product={product}
          loading={loading}
        />
      ))}
    </GridCustom>
  );
};

ListContent.propTypes = propTypes;

export default ListContent;
