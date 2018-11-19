import { withStyles } from '@material-ui/core';


const styles = theme => ({
  root: {
    width: '100%',
  },
  controls: {
    margin: theme.spacing.unit * 3,
  },
  exampleWrapper: {
    position: 'absolute',
    height: 'auto',
    width: '100%',
    maxWidth: 960,
    left: 0,
    right: 0,
    margin: '0 auto',
    padding: '0 16px',

    [theme.breakpoints.up('lg')]: {
      padding: 0,
    }
  },
  radioGroup: {
    margin: `${theme.spacing.unit}px 0`,
  },
  speedDial: {
    position: 'relative',
    marginTop: '-30px',
    alignItems: 'flex-end'
  },
  directionDown: {},
});


export default withStyles(styles);