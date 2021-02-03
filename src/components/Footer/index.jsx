import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import waveDark from 'assets/images/wave-dark.png';
import waveLight from 'assets/images/wave-light.png';
import clsx from 'clsx';
import { useThemeModeValue } from 'contexts/ThemeModeContext';
import useStyles from './Footer.style';

const info = {
  email: 'laivantam97@gmail.com',
  emailLink: 'mailto:laivantam97@gmail.com',
  phone: '058 537 3545',
  phoneLink: 'tel:+840585373545',
  facebook: 'TU Authentic',
  facebookLink: 'https://www.facebook.com/TU.Authentic/',
  map: '222 Quang Trung, Buôn Ma Thuột, Đắc Lắk, Việt Nam',
  mapLink:
    'https://www.google.com/maps/place/222+Quang+Trung,+Th%E1%BB%91ng+Nh%E1%BA%A5t,+Th%C3%A0nh+ph%E1%BB%91+Bu%C3%B4n+Ma+Thu%E1%BB%99t,+%C4%90%E1%BA%AFk+L%E1%BA%AFk,+Vi%E1%BB%87t+Nam/@12.6817546,108.0354285,17z/data=!4m5!3m4!1s0x31721d778c4e16eb:0xf803803ca1702994!8m2!3d12.6817546!4d108.0354285',
};

function Footer() {
  const classes = useStyles();
  const imgSrc = useThemeModeValue(waveLight, waveDark);

  return (
    <Box component="footer" className={classes.footer}>
      <Box
        component="img"
        src={imgSrc}
        alt="wave"
        className={classes.waveImg}
      />

      <Box className={classes.root}>
        <Box className={classes.rotate}>
          <Box className={classes.group}>
            <Box
              component="a"
              href={info.facebookLink}
              title="facebook"
              target="_blank"
              rel="noreferrer noopener"
              className={classes.groupItem}
            >
              <FacebookIcon className={classes.icon} />
              <Box
                component="span"
                className={clsx(classes.text, classes.facebookText)}
              >
                {info.facebook}
              </Box>
            </Box>

            <Box
              component="a"
              href={info.emailLink}
              title="mail"
              className={classes.groupItem}
            >
              <EmailIcon className={classes.icon} />
              <Typography
                component="span"
                className={clsx(classes.textAnimate, classes.emailText)}
              >
                {info.email}
              </Typography>
            </Box>
          </Box>

          <Box className={classes.group}>
            <Box
              component="a"
              href={info.phoneLink}
              title="phone"
              className={classes.groupItem}
            >
              <PhoneIcon className={classes.icon} />
              <Typography
                component="span"
                className={clsx(classes.textAnimate, classes.phoneText)}
              >
                {info.phone}
              </Typography>
            </Box>

            <Box
              component="a"
              href={info.mapLink}
              title="map"
              target="_blank"
              rel="noreferrer noopener"
              className={classes.groupItem}
            >
              <RoomIcon className={classes.icon} />
              <Typography
                component="span"
                variant="subtitle1"
                className={clsx(classes.text, classes.roomText)}
              >
                {info.map}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.copyrightWrapper}>
        <Typography
          component="p"
          variant="subtitle2"
          className={classes.copyright}
        >
          &copy; {new Date().getFullYear()} bởi T&amp;U Authentic.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
