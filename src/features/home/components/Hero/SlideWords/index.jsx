import { Box } from '@material-ui/core';
import styles from './SlideWords.style.js';

function SlideWords() {
  return (
    <Box sx={styles.sliderContainer}>
      <Box sx={styles.words}>
        <span style={{ animationDelay: '1ms' }}>
          Say{' '}
          <Box
            component="strong"
            sx={{ color: (theme) => theme.palette.colors.price }}
          >
            NO
          </Box>{' '}
          to fake
        </span>
        <span style={{ animationDelay: '1.8s' }}>Uy tín</span>
        <span style={{ animationDelay: '3.6s' }}>Chất lượng</span>
        <span style={{ animationDelay: '5.4s' }}>Hàng thật</span>
        <span style={{ animationDelay: '7.2s' }}>Giá fake</span>
        <span style={{ animationDelay: '9s' }}>Chính hãng</span>
        <span style={{ animationDelay: '10.8s' }}>Giá tốt</span>
        <span style={{ animationDelay: '12.6s' }}>Adidas</span>
        <span style={{ animationDelay: '14.4s' }}>Puma</span>
        <span style={{ animationDelay: '16.2s' }}>BMW</span>
      </Box>
    </Box>
  );
}

export default SlideWords;
