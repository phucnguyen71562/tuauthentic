import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardItem from 'components/CardItem';
import PropTypes from 'prop-types';
import useStyles from './MightAlsoLike.style';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

function MightAlsoLike({ products = [...new Array(4)], loading = true }) {
  const classes = useStyles();
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <Container component="section" className={classes.root}>
      <Box className={classes.titleWrapper}>
        <Typography component="h3" variant="h6" className={classes.title}>
          Bạn có thể sẽ thích <FavoriteIcon className={classes.icon} />
        </Typography>
      </Box>

      <Grid
        container
        spacing={matches ? 4 : 1}
        className={classes.wrapperContainer}
      >
        {products.map((product, index) => (
          <Grid item xs={6} md={3} key={loading ? index : product.id}>
            <CardItem alsoLike product={product} loading={loading} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

MightAlsoLike.propTypes = propTypes;

export default MightAlsoLike;
