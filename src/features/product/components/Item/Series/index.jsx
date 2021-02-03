import { Box, Link } from '@material-ui/core';
import Skeleton from '@material-ui/core/Skeleton';
import { Check } from '@material-ui/icons';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './Series.style';

const propTypes = {
  id: PropTypes.number.isRequired,
  series: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

const Series = ({ id, series, loading }) => {
  const classes = useStyles();

  if (loading) {
    return (
      <Box className={classes.root}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          width="100%"
          height={60}
        />
      </Box>
    );
  }

  return (
    <Box className={classes.root}>
      {series.map((item) => (
        <Link
          key={item.id}
          component={RouterLink}
          to={item.link}
          title={item.color}
          color="inherit"
          underline="none"
          className={clsx(classes.colorVariation, {
            [classes.selected]: id === item.id,
          })}
        >
          {id === item.id && (
            <Box className={classes.tickIconWrapper}>
              <Check />
            </Box>
          )}

          <img src={item.image} alt="" className={classes.image} />
        </Link>
      ))}
    </Box>
  );
};

Series.propTypes = propTypes;

export default Series;
