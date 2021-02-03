import { keyframes } from '@emotion/react';

const scroll = keyframes`
  from {
    top: -5;
    left: -5;
    opacity: 0;
  }

  25% {
    top: 0;
    left: 0;
    opacity: 1;
  }

  50%, 100% {
    top: 5;
    left: 5;
    opacity: 0;
  }
`;

const styles = {
  arrow: {
    position: 'absolute',
    bottom: 0,
    left: '50%',

    width: 15,
    height: 15,

    transform: 'translateY(-15px) translateX(-50%) rotate(45deg)',

    '& span': {
      position: 'absolute',
      top: 0,
      left: 0,

      display: 'block',
      width: '100%',
      height: '100%',

      borderBottom: (theme) => `2px solid ${theme.palette.text.primary}`,
      borderRight: (theme) => `2px solid ${theme.palette.text.primary}`,

      animation: `${scroll} 2s linear infinite`,
      opacity: 0,
    },

    '& span:nth-of-type(1)': {
      transform: 'translate(-15px, -15px)',
      animationDelay: '-0.2s',
    },

    '& span:nth-of-type(2)': {
      transform: 'translate(0, 0)',
    },
  },
};

export default styles;
