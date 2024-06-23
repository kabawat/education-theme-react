import { makeStyles } from 'tss-react/mui';

const featuredStyles = makeStyles({ uniqId: 'blog' })(theme => ({
  root: {},
  deco: {
    position: 'absolute',
    width: '80%',
    height: theme.spacing(80),
    left: 0,
    top: 180,
    border: `2px solid ${theme.palette.secondary.main}`,
    borderLeft: 'none',
    borderRadius: '0 100px 100px 0',
  },
  blogList: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(6),
    },
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(5, 0, 0)
    },
  },
  videoWrap: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 320,
      margin: '0 auto'
    }
  },
  videoCarousel: {
    boxShadow: theme.shadows[15],
    background: theme.palette.text.primary,
    height: 420,
    overflow: 'hidden',
    borderRadius: 30,
    position: 'relative',
    zIndex: 5,
    [theme.breakpoints.up('lg ')]: {
      margin: theme.spacing(0, 4),
    },
    [theme.breakpoints.down('md')]: {
      height: 360
    },
    [theme.breakpoints.down('sm')]: {
      height: 220
    },
  },
  item: {
    overflow: 'hidden',
    background: theme.palette.common.black,
    height: 420,
    [theme.breakpoints.down('md')]: {
      height: 360
    },
    [theme.breakpoints.down('sm')]: {
      height: 220
    },
    '& img': {
      width: '100%',
      minHeight: '100%',
      display: 'block'
    }
  },
  more: {
    fontSize: 18,
    padding: '0 !important',
    marginLeft: -8
  },
  playBtn: {
    borderRadius: 10,
    background: theme.palette.background.paper,
    boxShadow: theme.shade.light,
    position: 'absolute',
    width: 80,
    height: 80,
    left: 'calc(50% - 40px)',
    top: 'calc(50% - 40px)',
    padding: 0,
    '& svg': {
      fill: theme.palette.secondary.main,
      width: 80,
      height: 80,
    }
  },
  videoPopup: {
    width: 690,
    maxWidth: 'none'
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default featuredStyles;
