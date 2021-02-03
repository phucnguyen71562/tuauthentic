import { Box, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/core/Skeleton';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import PropTypes from 'prop-types';
import useStyles from './ColorBox.style';

const propTypes = {
  color: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

const ColorBox = ({ color, loading }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography
        component="p"
        variant="body1"
        gutterBottom
        className={classes.title}
      >
        Chọn màu sắc
      </Typography>

      <Box className={classes.colorBox}>
        <ArrowRightAltIcon />

        {loading ? (
          <Skeleton animation="wave" width="40%" />
        ) : (
          <Typography
            component="p"
            variant="subtitle1"
            className={classes.colorName}
          >
            {color}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

ColorBox.propTypes = propTypes;

export default ColorBox;
