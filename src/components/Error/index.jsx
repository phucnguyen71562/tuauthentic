import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import useStyles from './Error.style';

function Error() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <ErrorOutlineIcon color="error" className={classes.icon} />

      <Typography component="h1" variant="h5" align="center" gutterBottom>
        Có lỗi xảy ra.
      </Typography>

      <Typography component="h3" variant="h6" align="center">
        Vui lòng thử tải lại trang hoặc truy cập lại sau.
      </Typography>
    </Container>
  );
}

export default Error;
