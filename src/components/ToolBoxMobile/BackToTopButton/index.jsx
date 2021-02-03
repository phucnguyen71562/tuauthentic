import SpeedDialAction from '@material-ui/core/SpeedDialAction';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PropTypes from 'prop-types';

const propTypes = {
  handleClose: PropTypes.func.isRequired,
};

function BackToTopButton({ handleClose, ...props }) {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
    handleClose();
  };

  return (
    <SpeedDialAction
      icon={<KeyboardArrowUpIcon />}
      tooltipTitle="Về đầu trang"
      onClick={handleScrollToTop}
      {...props}
    />
  );
}

BackToTopButton.propTypes = propTypes;

export default BackToTopButton;
