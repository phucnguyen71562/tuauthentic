const CATEGORIES = [
  {
    name: 'Áo',
    children: [
      {
        name: 'Áo khoác',
        path: '/ao-khoac',
      },
      {
        name: 'Áo thun',
        path: '/ao-thun',
      },
    ],
  },
  {
    name: 'Mũ',
    path: '/mu',
  },
  {
    name: 'Dép',
    path: '/dep',
  },
  {
    name: 'Giày',
    path: '/giay',
  },
  {
    name: 'Ba lô',
    path: '/ba-lo',
  },
  {
    name: 'Túi đeo',
    path: '/tui-deo',
  },
  {
    name: 'Phụ kiện',
    children: [
      {
        name: 'Bóp',
        path: '/bop',
      },
      {
        name: 'Nước hoa',
        path: '/nuoc-hoa',
      },
      {
        name: 'Đồng hồ',
        path: '/dong-ho',
      },
      {
        name: 'Kính',
        path: '/kinh',
      },
    ],
  },
];

export default CATEGORIES;
