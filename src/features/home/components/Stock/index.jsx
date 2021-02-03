import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import SeeAllButton from 'components/SeeAllButton';
import PropTypes from 'prop-types';
import DesktopStockList from './DesktopStockList';
import MobileStockList from './MobileStockList';
import useStyles from './Stock.style';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

function Stock({ products = [...new Array(20)], loading = true }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography
        component="h2"
        variant="h5"
        color="secondary"
        className={classes.title}
      >
        Hàng Có Sẵn
      </Typography>

      <Hidden mdUp>
        <MobileStockList products={products} loading={loading} />
      </Hidden>

      <Hidden mdDown>
        <DesktopStockList products={products} loading={loading} />
      </Hidden>

      <SeeAllButton type="stock" />
    </Box>
  );
}

Stock.propTypes = propTypes;

export default Stock;
