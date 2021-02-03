import Fab from '@material-ui/core/Fab';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useCallback } from 'react';
import useStyles from './ScrollToTopButton.style';

function ScrollToTopButton() {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300,
  });

  const scrollTop = useCallback(() => window.scrollTo(0, 0), []);

  return (
    <Zoom
      role="presentation"
      in={trigger}
      onClick={scrollTop}
      className={classes.root}
    >
      <Fab size="small" color="primary" aria-label="Scroll to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

export default ScrollToTopButton;
