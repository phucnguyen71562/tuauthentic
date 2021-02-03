import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import AddToFavoriteButton from 'components/AddToFavoriteButton';
import { removeFromCart } from 'features/cart/cartSlice';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import useStyles from './ActionsBox.style';

const propTypes = {
  product: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
};

function ActionBox({ product, size }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Box className={classes.root}>
      <Box
        component="button"
        className={classes.actionButton}
        onClick={() => dispatch(removeFromCart({ product, size }))}
      >
        <CloseIcon />
      </Box>

      <AddToFavoriteButton
        component="button"
        iconColor="secondary"
        product={product}
        className={classes.actionButton}
      />
    </Box>
  );
}

ActionBox.propTypes = propTypes;

export default ActionBox;
