import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import StoreIcon from '@material-ui/icons/Store';
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';
import PropTypes from 'prop-types';
import useStyles from './ListType.style';

const propTypes = {
  listType: PropTypes.string.isRequired,
  handleChooseListType: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

const ListType = ({ listType, handleChooseListType, loading = true }) => {
  const classes = useStyles();

  return (
    <RadioGroup
      row
      aria-label="List type"
      value={listType}
      onChange={handleChooseListType}
    >
      <FormControlLabel
        value="all"
        control={
          <Radio
            color="default"
            size="small"
            icon={<StoreOutlinedIcon />}
            checkedIcon={<StoreIcon />}
            disabled={loading}
          />
        }
        label="Tất cả"
        classes={{ label: classes.labelFont }}
        className={classes.labelBox}
      />
      <FormControlLabel
        value="order"
        control={
          <Radio
            color="default"
            size="small"
            icon={<LocalShippingOutlinedIcon />}
            checkedIcon={<LocalShippingIcon />}
            disabled={loading}
            className={classes.orderIcon}
          />
        }
        label="Hàng order"
        classes={{ label: classes.labelFont }}
        className={classes.labelBox}
      />
      <FormControlLabel
        value="stock"
        control={
          <Radio
            color="default"
            size="small"
            icon={<ShoppingCartOutlinedIcon />}
            checkedIcon={<ShoppingCartIcon />}
            disabled={loading}
            className={classes.stockIcon}
          />
        }
        label="Hàng có sẵn"
        classes={{ label: classes.labelFont }}
        className={classes.labelBox}
      />
    </RadioGroup>
  );
};

ListType.propTypes = propTypes;

export default ListType;
