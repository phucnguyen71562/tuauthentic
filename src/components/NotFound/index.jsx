import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './NotFound.style';

function NotFound() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography
        component="h2"
        variant="h2"
        align="center"
        className={classes.title}
      >
        404
      </Typography>

      <Typography
        component="h3"
        variant="h5"
        align="center"
        paragraph
        className={classes.subtitle}
      >
        Không tìm thấy trang bạn yêu cầu.
      </Typography>

      <Typography
        variant="subtitle2"
        align="center"
        color="textSecondary"
        className={classes.subtitle}
      >
        Nó có thể tạm thời không thể truy cập được, hoặc có thể đã bị xóa hoặc
        di chuyển.
      </Typography>

      <Button
        component={RouterLink}
        to="/"
        variant="outlined"
        startIcon={<KeyboardBackspaceIcon />}
        sx={{ mt: 4 }}
      >
        Quay lại trang chủ
      </Button>
    </Container>
  );
}

export default NotFound;
