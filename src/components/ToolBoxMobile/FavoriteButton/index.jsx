import Badge from '@material-ui/core/Badge';
import SpeedDialAction from '@material-ui/core/SpeedDialAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { selectFavorite } from 'features/favorite/favoriteSlice';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

const propTypes = {
  handleClose: PropTypes.func.isRequired,
};

function FavoriteButton({ handleClose, ...props }) {
  const favorites = useSelector(selectFavorite);
  const icon =
    favorites.length > 0 ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />;

  return (
    <SpeedDialAction
      component={RouterLink}
      to="/yeu-thich"
      icon={
        <Badge color="info" badgeContent={favorites.length}>
          {icon}
        </Badge>
      }
      tooltipTitle="Danh sách yêu thích"
      onClick={handleClose}
      {...props}
    />
  );
}

FavoriteButton.propTypes = propTypes;

export default FavoriteButton;
