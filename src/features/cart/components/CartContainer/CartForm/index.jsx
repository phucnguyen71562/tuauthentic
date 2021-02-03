import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import StoreIcon from '@material-ui/icons/Store';
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import Input from 'components/CustomForm/Input';
import Radio from 'components/CustomForm/Radio';
import validationSchema from 'features/cart/Cart.validation';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useStyles from './CartForm.style';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  processing: PropTypes.bool.isRequired,
};

function CartForm({ onSubmit, processing }) {
  const classes = useStyles();
  const [receiveTypeValue, setReceiveTypeValue] = useState('ship');

  const { register, handleSubmit, watch, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });
  const watchReceiveType = watch('receive_type', 'ship');

  const handleChange = (event) => {
    setReceiveTypeValue(event.target.value);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Box className={classes.information}>
        <Typography component="p" className={classes.formLabel}>
          THÔNG TIN KHÁCH HÀNG
        </Typography>

        <Box className={classes.wrapper}>
          <Input
            ref={register}
            required
            id="name"
            name="name"
            label="Họ và tên"
            error={!!errors.name}
            helperText={errors.name?.message}
            disabled={processing}
          />

          <Input
            ref={register}
            required
            type="tel"
            id="phone"
            name="phone"
            label="Số điện thoại"
            error={!!errors.phone}
            helperText={errors.phone?.message}
            disabled={processing}
          />
        </Box>

        <Typography component="p" className={classes.formLabel}>
          CHỌN CÁCH THỨC NHẬN HÀNG
        </Typography>

        <Box className={classes.shippingType}>
          <RadioGroup
            row
            aria-label="receive_type"
            name="receive_type"
            value={receiveTypeValue}
            onChange={handleChange}
          >
            <FormControlLabel
              value="ship"
              control={
                <Radio
                  ref={register}
                  icon={<LocalShippingOutlinedIcon />}
                  checkedIcon={<LocalShippingIcon />}
                  disabled={processing}
                />
              }
              label="Giao tận nơi"
            />

            <FormControlLabel
              value="store"
              control={
                <Radio
                  ref={register}
                  icon={<StoreOutlinedIcon />}
                  checkedIcon={<StoreIcon />}
                  disabled={processing}
                />
              }
              label="Nhận tại cửa hàng"
            />
          </RadioGroup>

          {errors.receive_type && (
            <FormHelperText>{errors.receive_type.message}</FormHelperText>
          )}
        </Box>

        {watchReceiveType === 'ship' && (
          <Box className={classes.shippingAddress}>
            <Typography component="p" sx={{ mb: 2 }}>
              ĐỊA CHỈ GIAO HÀNG
            </Typography>

            <Input
              ref={register}
              id="address"
              name="address"
              label="Địa chỉ"
              error={!!errors.address}
              helperText={errors.address?.message}
              disabled={processing}
            />
          </Box>
        )}
      </Box>

      <Divider sx={{ my: 3 }} />

      <Input
        ref={register}
        id="other"
        name="other"
        label="Yêu cầu khác (không bắt buộc)"
        error={!!errors.other}
        helperText={errors.other?.message}
        disabled={processing}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        endIcon={
          processing ? (
            <CircularProgress color="inherit" size="20px" />
          ) : (
            <TrendingFlatIcon />
          )
        }
        disabled={processing}
        className={classes.checkoutButton}
      >
        THANH TOÁN
      </Button>
    </form>
  );
}

CartForm.propTypes = propTypes;

export default CartForm;
