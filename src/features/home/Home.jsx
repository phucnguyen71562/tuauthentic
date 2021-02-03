import Container from '@material-ui/core/Container';
import { fetchHomeProducts } from 'api/productApi';
import useDocumentTitle from 'hooks/useDocumentTitle';
import useFetch from 'hooks/useFetch';
import Banner from './components/Banner';
import Featured from './components/Featured';
import Hero from './components/Hero';
import Order from './components/Order';
import Stock from './components/Stock';

function HomePage() {
  const { isLoading, data } = useFetch('home', fetchHomeProducts);

  useDocumentTitle('T&U Authentic - Shop fanwear chính hãng tại Buôn Ma Thuột');

  return (
    <>
      <Hero />
      <Banner />

      <Container component="section" sx={{ px: { xs: 1, sm: 3 } }}>
        <Featured products={data?.featureds} loading={isLoading} />
        <Order products={data?.orders} loading={isLoading} />
        <Stock products={data?.stocks} loading={isLoading} />
      </Container>
    </>
  );
}

export default HomePage;
