import { Box, Button, Typography } from '@material-ui/core';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import MainContainer from 'components/MainContainer';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { Link as RouterLink, Redirect, useLocation } from 'react-router-dom';
import useStyles from './Thanks.style';

function Thanks() {
  const classes = useStyles();
  const [showConfetti, setShowConfetti] = useState(true);
  const [width, setWidth] = useState(document.body.clientWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const { state } = useLocation();

  useEffect(() => {
    const handler = () => {
      setWidth(document.body.clientWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, []);

  if (!state?.success) return <Redirect to="/" />;

  return (
    <MainContainer maxWidth="md" className={classes.root}>
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={700}
          recycle={false}
          onConfettiComplete={(confetti) => setShowConfetti(false)}
        />
      )}

      <Box className={classes.wrapper}>
        <CheckCircleOutlineOutlinedIcon className={classes.icon} />

        <Typography
          component="h2"
          variant="h5"
          align="center"
          paragraph
          sx={{ maxWidth: 800, fontWeight: 500 }}
        >
          Đơn hàng của bạn đã được tiếp nhận và đang được xử lý
        </Typography>

        <Typography
          component="h3"
          variant="h6"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'regular' }}
        >
          Cảm ơn bạn đã mua sắm tại cửa hàng
        </Typography>

        <Typography component="p" variant="subtitle1" align="center">
          Hẹn gặp lại 👋
        </Typography>

        <Button
          component={RouterLink}
          to="/"
          variant="outlined"
          color="info"
          startIcon={<KeyboardBackspaceIcon />}
          className={classes.button}
        >
          Quay lại trang chủ
        </Button>
      </Box>
    </MainContainer>
  );
}

export default Thanks;
