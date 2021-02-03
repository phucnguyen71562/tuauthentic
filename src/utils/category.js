import CATEGORIES from 'app/category';

export const categories = CATEGORIES.flatMap((category) => {
  if (category.children) return category.children;
  return category;
});

export const getCategoryName = (value) => {
  const category = categories.find((c) => c.path === value);
  return category ? category.name : 'Sản phẩm';
};
