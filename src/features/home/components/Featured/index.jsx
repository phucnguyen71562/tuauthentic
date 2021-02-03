import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import DesktopFeaturedList from './DesktopFeaturedList';
import useStyles from './Featured.style';
import MobileFeaturedList from './MobileFeaturedList';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

function Featured({ products = [...new Array(4)], loading = true }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.titleWrapper}>
        <Typography variant="h2" className={classes.titleShadow}>
          Trending
          <Typography component="span" color="error" className={classes.title}>
            Trending
          </Typography>
        </Typography>
      </Box>

      <Hidden mdUp>
        <MobileFeaturedList products={products} loading={loading} />
      </Hidden>

      <Hidden mdDown>
        <DesktopFeaturedList products={products} loading={loading} />
      </Hidden>
    </Box>
  );
}

Featured.propTypes = propTypes;

export default Featured;
