import TextField from '@material-ui/core/TextField';
import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  return (
    <TextField
      inputRef={ref}
      variant="outlined"
      size="small"
      fullWidth
      {...props}
    />
  );
});

export default Input;
