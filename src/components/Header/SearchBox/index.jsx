import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './SearchBox.style';

function SearchBox() {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const history = useHistory();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && value.length > 0) {
      history.push(`/tim-kiem?key=${value}`);
    }
  };

  return (
    <Box className={classes.search}>
      <Box className={classes.searchIcon}>
        <SearchIcon />
      </Box>

      <InputBase
        type="search"
        placeholder="Bạn muốn tìm gì…"
        classes={{
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleSearch}
      />
    </Box>
  );
}

export default SearchBox;
