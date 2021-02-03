import { Box, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './SeeAllButton.style';

const propTypes = {
  type: PropTypes.string.isRequired,
};

const SeeAllButton = ({ type, ...props }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Button
        component={RouterLink}
        to={`/tat-ca?list=${type}`}
        variant="outlined"
        color="primary"
        className={classes.button}
        {...props}
      >
        Xem tất cả
      </Button>
    </Box>
  );
};

SeeAllButton.propTypes = propTypes;

export default SeeAllButton;
