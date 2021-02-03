import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CheckIcon from '@material-ui/icons/Check';
import PropTypes from 'prop-types';
import useStyles from './SortType.style';

const propTypes = {
  anchorEl: PropTypes.any,
  handleCloseSortMenu: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  handleChooseSortType: PropTypes.func.isRequired,
};

const menuItem = {
  trending: 'Nổi bật nhất',
  'price-desc': 'Giá cao đến thấp',
  'price-asc': 'Giá thấp đến cao',
};

const SortType = ({
  anchorEl = null,
  handleCloseSortMenu,
  sortType,
  handleChooseSortType,
}) => {
  const classes = useStyles();

  return (
    <Menu
      id="sort-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleCloseSortMenu}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      {Object.entries(menuItem).map(([key, value]) => (
        <MenuItem key={key} onClick={() => handleChooseSortType(key)}>
          {sortType === key && (
            <CheckIcon color="primary" className={classes.icon} />
          )}
          {value}
        </MenuItem>
      ))}
    </Menu>
  );
};

SortType.propTypes = propTypes;

export default SortType;
