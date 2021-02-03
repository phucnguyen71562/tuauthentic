import { Box } from '@material-ui/core';
import CardItem from 'components/CardItem';
import { NextArrow, PrevArrow } from 'components/SlickArrowCustom';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import useStyles from './DesktopStockList.style';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

const slickSettings = {
  infinite: false,
  swipe: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const DesktopStockList = ({
  products = [...new Array(20)],
  loading = true,
}) => {
  const classes = useStyles();

  return (
    <Slider {...slickSettings}>
      {products.map((product, index) => (
        <Box key={loading ? index : product.id} className={classes.item}>
          <CardItem product={product} loading={loading} />
        </Box>
      ))}
    </Slider>
  );
};

DesktopStockList.propTypes = propTypes;

export default DesktopStockList;
