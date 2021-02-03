import Box from '@material-ui/core/Box';
import CATEGORIES from 'app/category';
import clsx from 'clsx';
import DropdownMenu from './DropdownMenu';
import useStyles from './Navbar.style';
import NavItem from './NavItem';

function Navbar() {
  const classes = useStyles();

  return (
    <Box component="nav" className={clsx(classes.root, classes.offset)}>
      {CATEGORIES.map((category) => {
        if (category.children)
          return <DropdownMenu key={category.name} category={category} />;

        return <NavItem key={category.name} category={category} />;
      })}
    </Box>
  );
}

export default Navbar;
