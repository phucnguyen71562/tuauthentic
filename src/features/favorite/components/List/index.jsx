import Box from '@material-ui/core/Box';
import TitleWrapper from 'components/TitleWrapper';
import PropTypes from 'prop-types';
import useStyles from './List.style';
import ListContent from './ListContent';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function List({ products }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TitleWrapper>Sản phẩm yêu thích</TitleWrapper>

      <ListContent products={products} />
    </Box>
  );
}

List.propTypes = propTypes;

export default List;
