import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { addToFavorite, selectFavorite } from 'features/favorite/favoriteSlice';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { findIndexById } from 'utils/array';

const propTypes = {
  product: PropTypes.object.isRequired,
  iconColor: PropTypes.string,
};

function AddToFavoriteButton({ product, iconColor = 'inherit', ...props }) {
  const favorites = useSelector(selectFavorite);
  const dispatch = useDispatch();

  const isExists = findIndexById(favorites, product) >= 0;

  return (
    <Box {...props} onClick={() => dispatch(addToFavorite(product))}>
      {isExists ? (
        <FavoriteIcon color={iconColor} />
      ) : (
        <FavoriteBorderIcon color={iconColor} />
      )}
    </Box>
  );
}

AddToFavoriteButton.propTypes = propTypes;

export default AddToFavoriteButton;
