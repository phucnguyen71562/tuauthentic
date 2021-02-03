import Error from 'components/Error';
import nProgress from 'nprogress';
import { useQuery } from 'react-query';

const useFetch = (selectDataKey, selectData) => {
  const { isLoading, error, data } = useQuery(selectDataKey, selectData);

  if (isLoading) nProgress.configure({ showSpinner: false }).start();

  if (!isLoading) nProgress.done();

  if (error) return <Error />;

  return { isLoading, error, data };
};

export default useFetch;
