import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import clsx from 'clsx';
import { decreaseQuantity, increaseQuantity } from 'features/cart/cartSlice';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import useStyles from './QuantityBox.style';

const propTypes = {
  product: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
};

function QuantityBox({ product, quantity, size }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Box className={classes.root}>
      <Button
        variant="outlined"
        color="info"
        disabled={quantity === 1}
        className={clsx(classes.quantityButton, classes.minusButton)}
        onClick={() => dispatch(decreaseQuantity({ product, size }))}
      >
        <RemoveIcon />
      </Button>
      <Typography
        variant="body2"
        color="textPrimary"
        className={classes.quantityText}
      >
        {quantity}
      </Typography>
      <Button
        variant="outlined"
        color="info"
        className={clsx(classes.quantityButton, classes.plusButton)}
        onClick={() => dispatch(increaseQuantity({ product, size }))}
      >
        <AddIcon />
      </Button>
    </Box>
  );
}

QuantityBox.propTypes = propTypes;

export default QuantityBox;
