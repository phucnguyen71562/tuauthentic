import BreadcrumbsMui from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function Breadcrumbs({ children }) {
  return (
    <BreadcrumbsMui
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="Breadcrumb"
    >
      <Link component={RouterLink} to="/" color="inherit" underline="none">
        Trang chủ
      </Link>
      {children}
    </BreadcrumbsMui>
  );
}

Breadcrumbs.propTypes = propTypes;

export default Breadcrumbs;
