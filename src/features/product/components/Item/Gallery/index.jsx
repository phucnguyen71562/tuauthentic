import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/core/Skeleton';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import useStyles from './Gallery.style';
import Slide from './Slide';

const propTypes = {
  image: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
};

function Gallery({ image, images, loading }) {
  const classes = useStyles();
  const [imagesSwiper, setImagesSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = !loading && [image, ...images];

  const handleSlideNext = useCallback(() => {
    imagesSwiper.slideNext();
  }, [imagesSwiper]);

  const handleSlidePrev = useCallback(() => {
    imagesSwiper.slidePrev();
  }, [imagesSwiper]);

  const goToSlide = useCallback(
    (index) => {
      imagesSwiper.slideTo(index);
    },
    [imagesSwiper]
  );

  if (loading) {
    return (
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height="100%"
      />
    );
  }

  return (
    <>
      <Slide
        slides={slides}
        setImagesSwiper={setImagesSwiper}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        handleSlideNext={handleSlideNext}
        handleSlidePrev={handleSlidePrev}
      />

      <Box className={classes.thumbsContainer}>
        <Box className={classes.thumbsWrapper}>
          {slides.map((item, index) => (
            <Box
              key={item}
              className={clsx(classes.thumbsItem, {
                [classes.thumbsItem_active]: index === activeIndex,
              })}
              style={{ backgroundImage: `url(${item})` }}
              onClick={() => goToSlide(index)}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

Gallery.propTypes = propTypes;

export default Gallery;
