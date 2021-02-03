import SpeedDial from '@material-ui/core/SpeedDial';
import SpeedDialIcon from '@material-ui/core/SpeedDialIcon';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import BackToTopButton from './BackToTopButton';
import CartButton from './CartButton';
import FavoriteButton from './FavoriteButton';
import useStyles from './ToolBoxMobile.style';

function ToolBoxMobile() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SpeedDial
      ariaLabel="Toolbox"
      icon={<SpeedDialIcon icon={<MenuIcon />} openIcon={<CloseIcon />} />}
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      className={classes.root}
    >
      <BackToTopButton handleClose={handleClose} />

      <FavoriteButton handleClose={handleClose} />

      <CartButton handleClose={handleClose} />
    </SpeedDial>
  );
}

export default ToolBoxMobile;
