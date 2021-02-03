import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import useStyles from './TitleWrapper.style';

const propTypes = {
  children: PropTypes.any.isRequired,
};

function TitleWrapper({ children }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography component="h2" variant="h5" className={classes.title}>
        {children}
      </Typography>
    </Box>
  );
}

TitleWrapper.propTypes = propTypes;

export default TitleWrapper;
