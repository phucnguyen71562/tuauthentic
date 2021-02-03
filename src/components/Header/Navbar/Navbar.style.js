import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2),

    '& > * + *': {
      marginLeft: theme.spacing(3),
    },
  },

  offset: theme.mixins.toolbar,
}));

export default styles;
