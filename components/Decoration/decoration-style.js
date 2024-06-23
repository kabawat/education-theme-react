import { makeStyles } from 'tss-react/mui';

const decorationStyles = makeStyles({ uniqId: 'decoration' })(theme => ({
  topDeco: {
    borderRadius: 60,
    transform: 'rotate(45deg)',
    position: 'absolute',
    left: 20,
    top: -30,
    width: 300,
    height: 300,
    '& img': {
      transform: 'rotate(-45deg)',
      width: 400,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    '&:before': {
      content: '""',
      borderRadius: 60,
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.light,
      opacity: 0.3
    },
    [theme.breakpoints.down('sm')]: {
      width: 200,
      height: 200
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default decorationStyles;
