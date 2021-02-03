import { Box } from '@material-ui/core';
import CardItem from 'components/CardItem';
import PropTypes from 'prop-types';
import useStyles from './MobileFeaturedList.style';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

const MobileFeaturedList = ({
  products = [...new Array(4)],
  loading = true,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.list}>
      {products.map((product, index) => (
        <Box key={loading ? index : product.id} className={classes.listItem}>
          <CardItem featured product={product} loading={loading} />
        </Box>
      ))}
    </Box>
  );
};

MobileFeaturedList.propTypes = propTypes;

export default MobileFeaturedList;
