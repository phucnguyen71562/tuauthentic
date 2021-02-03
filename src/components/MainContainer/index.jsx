import Container from '@material-ui/core/Container';
import useStyles from './MainContainer.style';

const MainContainer = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.root} {...props}>
      {children}
    </Container>
  );
};

export default MainContainer;
