import Hidden from '@material-ui/core/Hidden';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Loading from './components/Loading';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTopOnNavigation from './components/ScrollToTopOnNavigation';
import ToolBoxMobile from './components/ToolBoxMobile';
import { categories } from './utils/category';

const Home = lazy(() => import('./features/home/Home'));
const Category = lazy(() => import('./features/category/Category'));
const Cart = lazy(() => import('./features/cart/Cart'));
const Favorite = lazy(() => import('./features/favorite/Favorite'));
const Search = lazy(() => import('./features/search/Search'));
const NotFound = lazy(() => import('./components/NotFound'));
const Footer = lazy(() => import('./components/Footer'));

const Routes = () => {
  return (
    <Router>
      <ScrollToTopOnNavigation />

      <Hidden mdDown>
        <ScrollToTopButton />
      </Hidden>

      <Hidden mdUp>
        <ToolBoxMobile />
      </Hidden>

      <Header />

      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/tim-kiem">
              <Search />
            </Route>

            <Route path="/yeu-thich">
              <Favorite />
            </Route>

            <Route path="/gio-hang">
              <Cart />
            </Route>

            <Route path="/tat-ca">
              <Category />
            </Route>

            {categories.map(({ path }) => (
              <Route key={path} path={path}>
                <Category />
              </Route>
            ))}

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </ErrorBoundary>

        <Footer />
      </Suspense>
    </Router>
  );
};

export default Routes;
