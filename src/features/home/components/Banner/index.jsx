import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LoopIcon from '@material-ui/icons/Loop';
import CurvyLines from 'assets/images/curvyLines.png';
import clsx from 'clsx';
import useStyles from './Banner.style';

function Banner() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const classes = useStyles();

  return (
    <Box component="section" id="banner" className={classes.root}>
      <Container className={classes.container}>
        <Box
          component="img"
          src={CurvyLines}
          alt="curvy-lines"
          className={classes.wrapperImg}
        />
        <Grid
          container
          alignItems={matches ? 'center' : 'flex-start'}
          justify="center"
          spacing={2}
        >
          <Grid item xs={6} className={classes.wrapper}>
            <Box className={classes.iconWrapper}>
              <LoopIcon
                color="primary"
                className={clsx(classes.icon, classes.loopIcon)}
              />
            </Box>
            <Box className={classes.contentWrapper}>
              <Typography
                component="h2"
                variant="h5"
                color="primary"
                gutterBottom
                className={classes.title}
              >
                Đổi cũ lấy mới
              </Typography>
              <Typography
                component="h3"
                variant={matches ? 'subtitle1' : 'subtitle2'}
                className={classes.content}
              >
                Nhận đổi sản phẩm cũ lấy mới. Bù trừ hợp lý.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6} className={classes.wrapper}>
            <Box className={classes.iconWrapper}>
              <AccountBalanceWalletIcon
                color="primary"
                className={clsx(classes.icon, classes.walletIcon)}
              />
            </Box>
            <Box className={classes.contentWrapper}>
              <Typography
                component="h2"
                variant="h5"
                color="primary"
                gutterBottom
                className={classes.title}
              >
                Thu mua đồ cũ
              </Typography>
              <Typography
                component="h3"
                variant={matches ? 'subtitle1' : 'subtitle2'}
                className={classes.content}
              >
                Nhận thu mua đồ hiệu cũ.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Banner;
