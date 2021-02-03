import { lazy } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const MainPage = lazy(() => import('./pages/Main'));
const ThanksPage = lazy(() => import('./pages/Thanks'));

function Cart() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url}>
        <MainPage />
      </Route>

      <Route path={`${match.url}/thanks`}>
        <ThanksPage />
      </Route>
    </Switch>
  );
}

export default Cart;
