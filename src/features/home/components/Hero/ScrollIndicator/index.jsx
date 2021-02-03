import Box from '@material-ui/core/Box';
import styles from './ScrollIndicator.style.js';

function ScrollIndicator() {
  return (
    <Box sx={styles.arrow}>
      <span />
      <span />
    </Box>
  );
}

export default ScrollIndicator;
