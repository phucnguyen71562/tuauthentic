import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';
import DesktopNotification from './DesktopNotification';
import MobileNotification from './MobileNotification';

const propTypes = {
  product: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
  openNotification: PropTypes.bool.isRequired,
  handleCloseNotification: PropTypes.func.isRequired,
};

function Notification({
  product,
  size,
  openNotification,
  handleCloseNotification,
}) {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));

  if (!matches) {
    return (
      <MobileNotification
        openNotification={openNotification}
        handleCloseNotification={handleCloseNotification}
      />
    );
  }

  return (
    <DesktopNotification
      product={product}
      size={size}
      openNotification={openNotification}
      handleCloseNotification={handleCloseNotification}
    />
  );
}

Notification.propTypes = propTypes;

export default Notification;
