import { Box } from '@material-ui/core';
import clsx from 'clsx';
import CardItem from 'components/CardItem';
import { NextArrow, PrevArrow } from 'components/SlickArrowCustom';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import useStyles from './DesktopFeaturedList.style';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

const slickSettings = {
  infinite: false,
  swipe: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const DesktopFeaturedList = ({
  products = [...new Array(4)],
  loading = true,
}) => {
  const classes = useStyles();

  return (
    <Slider
      {...slickSettings}
      className={clsx({
        [classes.center]: !loading && products.length < 5,
      })}
    >
      {products.map((product, index) => (
        <Box key={loading ? index : product.id} className={classes.item}>
          <CardItem product={product} loading={loading} />
        </Box>
      ))}
    </Slider>
  );
};

DesktopFeaturedList.propTypes = propTypes;

export default DesktopFeaturedList;
