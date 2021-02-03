import Typography from '@material-ui/core/Typography';
import { fetchProductsFromCategory } from 'api/categoryApi';
import { fetchProducts } from 'api/productApi';
import Breadcrumbs from 'components/Breadcrumbs';
import MainContainer from 'components/MainContainer';
import List from 'features/category/components/List';
import Sort from 'features/category/components/Sort';
import useDocumentTitle from 'hooks/useDocumentTitle';
import useFetch from 'hooks/useFetch';
import useQueryParameters from 'hooks/useQueryParameters';
import { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { getCategoryName } from 'utils/category';

function MainPage() {
  const query = useQueryParameters();
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const [listType, setListType] = useState(query.get('list') ?? 'all');
  const [sortType, setSortType] = useState(query.get('sort') ?? 'trending');

  const isAllCategoryPage = url === '/tat-ca';

  const categorySlug = url.substr(1);
  const { data, isLoading } = useFetch(['category', categorySlug], () => {
    if (isAllCategoryPage) return fetchProducts();

    return fetchProductsFromCategory(categorySlug);
  });

  const categoryName = getCategoryName(url);

  useDocumentTitle(`${categoryName} chính hãng, giá tốt | tuauthentic.com`);

  useEffect(() => {
    history.replace(`${location.pathname}?list=${listType}&sort=${sortType}`);
  }, [history, location.pathname, listType, sortType]);

  return (
    <MainContainer sx={{ px: { xs: 1, sm: 3 } }}>
      <Breadcrumbs>
        <Typography color="textPrimary">{categoryName}</Typography>
      </Breadcrumbs>

      <Sort
        listType={listType}
        sortType={sortType}
        setListType={setListType}
        setSortType={setSortType}
        loading={isLoading}
      />

      <List
        categoryName={categoryName}
        listType={listType}
        sortType={sortType}
        products={data}
        loading={isLoading}
      />
    </MainContainer>
  );
}

export default MainPage;
