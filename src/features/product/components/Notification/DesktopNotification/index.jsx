import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import ActionsButton from '../ActionsButton';
import CartInformation from './CartInformation';
import useStyles from './DesktopNotification.style';
import ProductInformation from './ProductInformation';

const propTypes = {
  product: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
  openNotification: PropTypes.bool.isRequired,
  handleCloseNotification: PropTypes.func.isRequired,
};

function DesktopNotification({
  product,
  size,
  openNotification,
  handleCloseNotification,
}) {
  const classes = useStyles();

  return (
    <Dialog
      aria-labelledby="Add to cart success"
      open={openNotification}
      onClose={handleCloseNotification}
    >
      <DialogTitle
        disableTypography
        onClose={handleCloseNotification}
        className={classes.titleWrapper}
      >
        <Typography component="h2" variant="h5" className={classes.title}>
          Thêm vào giỏ hàng thành công
        </Typography>

        <IconButton aria-label="close" className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent className={classes.content}>
        <Grid container>
          <Grid item container xs>
            <ProductInformation product={product} size={size} />
          </Grid>

          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

          <Grid item xs={5}>
            <CartInformation />

            <ActionsButton handleCloseNotification={handleCloseNotification} />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

DesktopNotification.propTypes = propTypes;

export default DesktopNotification;
