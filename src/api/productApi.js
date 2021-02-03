import httpService from 'services/httpService';

export const fetchProducts = (params) => {
  const url = '/products';
  return httpService.get(url, { params });
};

export const fetchHomeProducts = () => {
  const url = '/products/home';
  return httpService.get(url);
};

export const fetchProduct = (slug) => {
  const url = `products/${slug}`;
  return httpService.get(url);
};

export const searchProduct = (params) => {
  const url = `products/search?q=${params}`;
  return httpService.get(url);
};
