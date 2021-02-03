import { Box, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/core/Skeleton';
import PropTypes from 'prop-types';
import useStyles from './DescriptionBox.style';

const propTypes = {
  description: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

const DescriptionBox = ({ description = '', loading }) => {
  const classes = useStyles();

  if (loading) {
    return (
      <Box className={classes.descriptionBox}>
        <Skeleton animation="wave" />
        <Skeleton animation="wave" width="80%" />
        <Skeleton animation="wave" width="60%" />
      </Box>
    );
  }

  return (
    <Box
      className={classes.descriptionBox}
      style={{ display: description ? 'block' : 'none' }}
    >
      <Typography variant="body1" className={classes.descriptionContent}>
        {description}
      </Typography>
    </Box>
  );
};

DescriptionBox.propTypes = propTypes;

export default DescriptionBox;
