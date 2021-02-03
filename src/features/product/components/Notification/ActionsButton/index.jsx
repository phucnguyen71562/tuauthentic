import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './ActionsButton.style';

const propTypes = {
  handleCloseNotification: PropTypes.func.isRequired,
};

function ActionsButton({ handleCloseNotification }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Button
        component={RouterLink}
        to="/gio-hang"
        variant="contained"
        fullWidth
        className={classes.button}
      >
        Đi đến giỏ hàng
        <TrendingFlatIcon className={classes.icon} />
      </Button>

      <Button
        variant="outlined"
        fullWidth
        onClick={handleCloseNotification}
        sx={{ mt: 2 }}
        className={classes.button}
      >
        Tiếp tục mua sắm
        <TrendingFlatIcon className={classes.icon} />
      </Button>
    </Box>
  );
}

ActionsButton.propTypes = propTypes;

export default ActionsButton;
