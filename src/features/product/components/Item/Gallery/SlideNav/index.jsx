import clsx from 'clsx';
import PropTypes from 'prop-types';
import useStyles from './SlideNav.style';

const propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeIndex: PropTypes.number.isRequired,
  handleSlideNext: PropTypes.func.isRequired,
  handleSlidePrev: PropTypes.func.isRequired,
};

const SlideNav = ({
  slides,
  activeIndex,
  handleSlideNext,
  handleSlidePrev,
}) => {
  const classes = useStyles();
  const disabledPrev = activeIndex === 0;
  const disabledNext = activeIndex === slides.length - 1;

  return (
    <>
      <div
        role="button"
        tabIndex="-1"
        aria-label="Previous slide"
        aria-disabled={disabledPrev}
        className={clsx(classes.slideButton, classes.slideButton_prev, {
          [classes.slideButton_disabled]: disabledPrev,
        })}
        onClick={handleSlidePrev}
      >
        previous
      </div>

      <div
        role="button"
        tabIndex="0"
        aria-label="Next slide"
        aria-disabled={disabledNext}
        className={clsx(classes.slideButton, classes.slideButton_next, {
          [classes.slideButton_disabled]: disabledNext,
        })}
        onClick={handleSlideNext}
      >
        next
      </div>
    </>
  );
};

SlideNav.propTypes = propTypes;

export default SlideNav;
