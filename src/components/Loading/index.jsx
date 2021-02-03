import logoText from '../../assets/images/logo-text.webp';
import useStyles from './Loading.style';

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={logoText} alt="loading" className={classes.loading} />
    </div>
  );
};

export default Loading;
