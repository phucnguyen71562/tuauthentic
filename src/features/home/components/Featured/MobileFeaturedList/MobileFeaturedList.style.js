import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  list: {
    display: 'flex',
    overflowX: 'auto',
    gap: '1rem',
    scrollSnapType: 'x mandatory',
    '-webkit-overflow-scrolling': 'touch',
  },

  listItem: {
    scrollSnapAlign: 'center',
  },
});

export default styles;
