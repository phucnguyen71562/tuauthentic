import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { selectFavorite } from 'features/favorite/favoriteSlice';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

function MoveToFavorite() {
  const favorites = useSelector(selectFavorite);
  const icon =
    favorites.length > 0 ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />;

  return (
    <IconButton
      component={RouterLink}
      to="/yeu-thich"
      aria-label="Move to favorite"
    >
      <Badge color="info" badgeContent={favorites.length}>
        {icon}
      </Badge>
    </IconButton>
  );
}

export default MoveToFavorite;
