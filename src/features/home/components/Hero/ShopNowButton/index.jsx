import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useCallback } from 'react';
import styles from './ShopNowButton.style';

function ShopNowButton() {
  const handleClick = useCallback(() => {
    const anchor = document.querySelector('#banner');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <Box
      component="button"
      type="button"
      aria-label="Shop now"
      sx={styles.root}
      onClick={handleClick}
    >
      <Box sx={styles.circle} className="shop-now__wrapper">
        <Box component="span" sx={styles.arrow} className="shop-now__icon" />
      </Box>
      <Typography align="center" sx={styles.text} className="shop-now__text">
        Mua sắm ngay
      </Typography>
    </Box>
  );
}

export default ShopNowButton;
