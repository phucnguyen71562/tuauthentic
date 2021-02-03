import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import heroImage from 'assets/images/adilette.webp';
import fadeInUp from './animation';
import useStyles from './Hero.style.js';
import ScrollIndicator from './ScrollIndicator';
import ShopNowButton from './ShopNowButton';
import SlideWords from './SlideWords';

function Hero() {
  const classes = useStyles();
  const matches = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <Box component="section" className={classes.root}>
      <Box className={classes.backgroundImage} />

      <Hidden lgDown>
        <Box component="span" className={classes.vr}>
          TU Authentic
        </Box>
      </Hidden>

      <Container disableGutters={!!matches} className={classes.wrapper}>
        <Grid container>
          <Grid item lg={5} className={classes.text}>
            <Typography
              variant="h1"
              className={classes.title}
              sx={{
                animation: (theme) =>
                  `${fadeInUp} 375ms ${theme.transitions.easing.sharp} forwards .5s`,
              }}
            >
              Sắm Fanwear Đến TU Authentic
            </Typography>

            <SlideWords />

            <ShopNowButton />
          </Grid>

          <Hidden lgDown>
            <Grid item lg={7}>
              <Box
                className={classes.bannerImage}
                sx={{
                  animation: (theme) =>
                    `${fadeInUp} 375ms ${theme.transitions.easing.sharp} forwards .5s`,
                }}
              >
                <Box
                  component="img"
                  src={heroImage}
                  alt="hero"
                  className={classes.img}
                />
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Container>

      <ScrollIndicator />
    </Box>
  );
}

export default Hero;
