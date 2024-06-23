import { makeStyles } from 'tss-react/mui';

const sliderArtStyles = makeStyles({ uniqId: 'slider_art' })(theme => ({
  deco: {
    [theme.breakpoints.up('lg')]: {
      width: 640
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& img': {
      zIndex: 5,
      position: 'relative',
      width: '100%',
      [theme.breakpoints.down('lg')]: {
        width: '70%'
      }
    },
  },
  figure: {
    height: 600,
    display: 'flex',
    alignItems: 'flex-end',
    transition: 'all 0.3s ease',
    direction: 'ltr'
  },
  fade: {
    opacity: '0.15',
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderArtStyles;
