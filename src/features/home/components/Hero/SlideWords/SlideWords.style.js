import { keyframes } from '@emotion/react';
import fadeInUp from '../animation';

const slideWord = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 25%, 0);
    visibility: visible;
  }

  0.9% {
    opacity: 1;
    transform: translate3d(0, 75%, 0);
  }

  10% {
    opacity: 1;
    transform: translate3d(0, 75%, 0);
    visibility: visible;
  }

  11% {
    opacity: 0;
    transform: translate3d(0, 135%, 0);
    visibility: hidden;
  }

  100% {
    opacity: 0;
    visibility: visible;
  }
`;

const styles = {
  sliderContainer: {
    fontSize: 32,
    lineHeight: '1.2em',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',

    animation: (theme) =>
      `${fadeInUp} 375ms ${theme.transitions.easing.sharp} .7s forwards`,
    opacity: 0,
  },

  words: {
    display: 'block',
    width: '100%',
    height: '2.8em',
    marginTop: 1,

    '& span': {
      position: 'absolute',
      overflow: 'hidden',

      letterSpacing: -1,

      opacity: 0,
      animation: `${slideWord} 18s linear infinite`,
      animationTimingFunction: 'cubic-bezier(0.19, 0.82, 0.84, 1.06)',
    },
  },
};

export default styles;
