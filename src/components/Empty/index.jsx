import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import useStyles from './Empty.style';

const propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

function Empty({ title, icon: Icon }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Icon color="primary" className={classes.icon} />
      <Typography component="h2" variant="h5" align="center">
        {title}
      </Typography>
    </Box>
  );
}

Empty.propTypes = propTypes;

export default Empty;
