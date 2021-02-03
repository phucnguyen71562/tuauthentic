import httpService from 'services/httpService';

export const fetchProductsFromCategory = (slug) => {
  const url = `/categories/${slug}/products`;
  return httpService.get(url);
};
