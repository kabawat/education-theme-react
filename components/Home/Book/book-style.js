import { makeStyles } from 'tss-react/mui';
const bookWidth = 190;
const bookHeight = 280;

const bookStyles = makeStyles({ uniqId: 'book' })((theme, _params, classes) => ({
  book: {
    background: theme.palette.background.paper,
    boxShadow: theme.shade.light,
    borderRadius: 24,
    padding: theme.spacing(),
    margin: theme.spacing(0, 2),
    transition: 'min-width 0.3s ease, transform 0.3s ease',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      height: 310
    },
    '& figure': {
      height: bookHeight,
      borderRadius: 24,
      overflow: 'hidden',
      width: bookWidth,
      margin: 0,
      [theme.breakpoints.down('sm')]: {
        height: 150
      },
      '& img': {
        display: 'block',
        height: '100%',
        [theme.breakpoints.up('sm')]: {
          width: bookWidth
        }
      }
    },
    '& figcaption': {
      display: 'none',
      height: 45,
      width: bookHeight - 40,
      color: '#FFF',
      fontSize: 24,
      textAlign: 'center',
      transform: 'rotate(-90deg) translate(20px, 7px)',
      transformOrigin: 'top left',
      borderRadius: 24,
      lineHeight: '45px',
      '& span': {
        transform: 'scale(-1)',
        display: 'block'
      }
    }
  },
  expanded: {
    flex: 1,
    position: 'relative',
    left: -10,
    '& figure': {
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(2),
        '& img': {
          height: 'auto',
          width: '100%'
        }
      }
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
      minWidth: 500
    }
  },
  button: {
    marginTop: theme.spacing(2)
  },
  desc: {
    padding: theme.spacing(2),
    flex: 1,
    maxWidth: 320,
    [theme.breakpoints.up('sm')]: {
      paddingRight: 0
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0
    },
    '& p': {
      overflow: 'hidden',
      height: 120,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold
    },
    [`& .${classes.button}`]: {
      width: '100%',
      padding: theme.spacing(0.5, 3)
    }
  },
  collapsed: {
    minWidth: 75,
    transform: 'rotate(-5deg)',
    transformOrigin: 'bottom left',
    cursor: 'pointer',
    '& figcaption': {
      display: 'block',
    },
    '&:hover': {
      transform: 'rotate(0deg)',
    },
    '& figure': {
      width: 'auto',
      height: 296
    },
    [`& .${classes.desc}`]: {
      overflow: 'hidden',
      width: 0,
      padding: 0,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  },
  property: {
    display: 'flex',
    justifyContent: 'space-between',
    '& strong': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 18
    }
  },
  text: {
    marginRight: theme.spacing(2)
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default bookStyles;
