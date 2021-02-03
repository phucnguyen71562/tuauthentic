import { lazy } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const MainPage = lazy(() => import('./pages/Main'));
const ProductPage = lazy(() => import('features/product/Product'));

function CategoryPage() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url}>
        <MainPage />
      </Route>

      <Route path={`${match.url}/:productSlug`}>
        <ProductPage />
      </Route>
    </Switch>
  );
}

export default CategoryPage;
