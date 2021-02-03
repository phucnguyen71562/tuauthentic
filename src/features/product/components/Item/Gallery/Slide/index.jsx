import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import SwiperCore, { A11y, Parallax } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideNav from '../SlideNav';
import useStyles from './Slide.style';

SwiperCore.use([A11y, Parallax]);

const propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  setImagesSwiper: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
  handleSlideNext: PropTypes.func.isRequired,
  handleSlidePrev: PropTypes.func.isRequired,
};

const Slide = ({
  slides,
  setImagesSwiper,
  activeIndex,
  setActiveIndex,
  handleSlideNext,
  handleSlidePrev,
}) => {
  const classes = useStyles();
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <Swiper
      onSwiper={setImagesSwiper}
      speed={600}
      parallax
      noSwiping={matches}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      className={classes.slide}
    >
      <Hidden mdDown>
        <SlideNav
          slides={slides}
          activeIndex={activeIndex}
          handleSlideNext={handleSlideNext}
          handleSlidePrev={handleSlidePrev}
        />
      </Hidden>

      {slides.map((item, index) => (
        <SwiperSlide key={item} zoom className={classes.slideItem}>
          <img
            src={item}
            alt=""
            width={matches ? '440' : '350'}
            height={matches ? '440' : '350'}
            data-swiper-parallax="-800"
            data-swiper-parallax-opacity="0"
            data-swiper-parallax-duration="500"
            className={classes.img}
          />

          <span
            className={clsx('slide-number', classes.number)}
            data-swiper-parallax="-300"
          >
            #0{++index}
          </span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

Slide.propTypes = propTypes;

export default Slide;
