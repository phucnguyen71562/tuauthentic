import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ListType from './ListType';
import SortType from './SortType';
import useStyles from './Sort.style';

const propTypes = {
  listType: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  setListType: PropTypes.func.isRequired,
  setSortType: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

function Sort({
  listType,
  sortType,
  setListType,
  setSortType,
  loading = true,
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenSortMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseSortMenu = () => {
    setAnchorEl(null);
  };

  const handleChooseSortType = (value) => {
    setSortType(value);
    handleCloseSortMenu();
  };

  const handleChooseListType = (e) => {
    setListType(e.target.value);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <Box className={classes.typeWrapper}>
          <Typography className={classes.title}>Chọn loại hàng:</Typography>

          <ListType
            listType={listType}
            handleChooseListType={handleChooseListType}
            loading={loading}
          />
        </Box>
      </Grid>

      <Grid item>
        <Button
          aria-controls="sort-menu"
          aria-haspopup="true"
          onClick={handleOpenSortMenu}
          disabled={loading}
          className={classes.sortMenuButton}
        >
          Sắp xếp theo <ExpandMoreIcon />
        </Button>

        <SortType
          anchorEl={anchorEl}
          handleCloseSortMenu={handleCloseSortMenu}
          sortType={sortType}
          handleChooseSortType={handleChooseSortType}
        />
      </Grid>
    </Grid>
  );
}

Sort.propTypes = propTypes;

export default Sort;
