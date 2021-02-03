import { useLocation } from 'react-router-dom';

const useQueryParameters = () => {
  const location = useLocation();
  return new URLSearchParams(location.search);
};

export default useQueryParameters;
