import Typography from '@material-ui/core/Typography';
import Breadcrumbs from 'components/Breadcrumbs';
import MainContainer from 'components/MainContainer';
import useDocumentTitle from 'hooks/useDocumentTitle';
import { useSelector } from 'react-redux';
import List from './components/List';
import { selectFavorite } from './favoriteSlice';

function Favorite() {
  const favorites = useSelector(selectFavorite);

  useDocumentTitle('Sản phẩm yêu thích | tuauthentic.com');

  return (
    <MainContainer sx={{ px: { xs: 1, sm: 3 } }}>
      <Breadcrumbs>
        <Typography color="textPrimary">Sản phẩm yêu thích</Typography>
      </Breadcrumbs>

      <List products={favorites} />
    </MainContainer>
  );
}

export default Favorite;
