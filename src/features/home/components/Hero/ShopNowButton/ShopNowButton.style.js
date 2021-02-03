import fadeInUp from '../animation';

const styles = {
  root: {
    position: 'relative',

    display: 'inline-block',
    verticalAlign: 'middle',
    width: '12rem',

    outline: 'none',
    border: 0,
    padding: 0,

    background: 'transparent',

    fontSize: 16,

    cursor: 'pointer',
    animation: (theme) =>
      `${fadeInUp} 375ms ${theme.transitions.easing.sharp} .8s forwards`,
    opacity: 0,

    ':hover': {
      '& .shop-now__wrapper': {
        width: '100%',

        '& .shop-now__icon': {
          bgcolor: 'common.white',
          transform: 'translate(1rem, 0)',
        },
      },
      '& .shop-now__text': {
        color: 'common.white',
      },
    },
  },

  circle: {
    position: 'relative',
    width: '3rem',
    height: '3rem',
    margin: 0,
    borderRadius: '1.625rem',

    background: (theme) => theme.palette.colors.gradient,

    transition: 'all 0.45s cubic-bezier(0.65, 0, .076, 1)',
  },

  arrow: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '0.625rem',

    width: '1.125rem',
    height: '0.125rem',
    margin: 'auto',

    background: 'none',

    transition: 'all 0.45s cubic-bezier(0.65, 0, .076, 1)',

    '::before': {
      content: '""',

      position: 'absolute',
      top: '-0.25rem',
      right: '0.0625rem',

      width: '0.625rem',
      height: '0.625rem',
      borderTop: (theme) => `0.125rem solid ${theme.palette.common.white}`,
      borderRight: (theme) => `0.125rem solid ${theme.palette.common.white}`,

      transform: 'rotate(45deg)',
    },
  },

  text: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    padding: '0.75rem 0',
    margin: '0 0 0 2.85rem',

    color: 'primary.main',

    fontWeight: 'bold',
    lineHeight: 1.6,
    textTransform: 'uppercase',

    transition: 'all 0.45s cubic-bezier(0.65, 0, .076, 1)',
  },
};

export default styles;
