import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import ActionsButton from '../ActionsButton';
import useStyles from './MobileNotification.style';

const propTypes = {
  openNotification: PropTypes.bool.isRequired,
  handleCloseNotification: PropTypes.func.isRequired,
};

function MobileNotification({ openNotification, handleCloseNotification }) {
  const classes = useStyles();

  return (
    <Drawer
      anchor="bottom"
      open={openNotification}
      onClose={handleCloseNotification}
    >
      <Box className={classes.root}>
        <Box className={classes.titleWrapper}>
          <Typography component="h2" variant="h6" className={classes.title}>
            Thêm vào giỏ hàng thành công
          </Typography>

          <IconButton
            aria-label="close"
            onClick={handleCloseNotification}
            className={classes.closeButton}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <ActionsButton handleCloseNotification={handleCloseNotification} />
      </Box>
    </Drawer>
  );
}

MobileNotification.propTypes = propTypes;

export default MobileNotification;
