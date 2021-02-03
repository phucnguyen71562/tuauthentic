import RadioMUI from '@material-ui/core/Radio';
import { forwardRef } from 'react';

const Radio = forwardRef((props, ref) => {
  return <RadioMUI inputRef={ref} color="primary" size="small" {...props} />;
});

export default Radio;
