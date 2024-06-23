import { makeStyles } from 'tss-react/mui';

const heroBanner = makeStyles({ uniqId: 'hero_banner' })((theme, _params, classes) => ({
  container: {},
  heroBannerWrap: {
    position: 'relative',
    [`& .${classes.container}`]: {
      position: 'relative'
    }
  },
  bgDeco: {
    position: 'absolute',
    width: '120%',
    height: 1100,
    background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    opacity: 0.27,
    transform: 'rotate(-10deg)',
    top: -560,
    left: -40,
    borderRadius: 80,
    [theme.breakpoints.down('sm')]: {
      width: '110%'
    }
  },
  smallDeco: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& > div': {
      position: 'absolute',
      width: 475,
      height: 300,
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      transform: 'rotate(-10deg)',
      top: -200,
      right: -40,
      borderRadius: 40
    }
  },
  img: {
    marginTop: theme.spacing(5)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default heroBanner;
