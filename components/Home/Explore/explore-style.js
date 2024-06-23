import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'explore' })((theme, _params, classes) => ({
  container: {},
  root: {
    position: 'relative',
    paddingTop: theme.spacing(5),
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(5)
    },
    [`& .${classes.container}`]: {
      [theme.breakpoints.down('lg')]: {
        padding: '0 !important'
      }
    },
    '&:before': {
      content: '""',
      opacity: 0.27,
      width: 'calc(100% - 160px)',
      height: '105%',
      position: 'absolute',
      top: 0,
      left: 0,
      background: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      borderBottomLeftRadius: theme.direction === 'rtl' ? 100 : 0,
      borderBottomRightRadius: theme.direction === 'ltr' ? 100 : 0,
      [theme.breakpoints.up('sm')]: {
        top: -160
      },
      [theme.breakpoints.down('md')]: {
        width: '100%',
        borderRadius: 0
      },
    }
  },
  categoryTitle: {
    fontSize: 24,
    '& h3': {
      [theme.breakpoints.down('sm')]: {
        fontSize: 22
      },
      '& svg': {
        fill: theme.palette.text.secondary,
        width: 36,
        height: 36,
        position: 'relative',
        top: 8,
        [theme.breakpoints.down('sm')]: {
          width: 18,
          height: 18,
          top: 2
        },
      },
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(0, 4),
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  rack: {
    display: 'block',
    position: 'relative',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5),
    },
    '&:before': {
      content: '""',
      width: '100%',
      height: 60,
      position: 'absolute',
      borderRadius: 60,
      background: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
      opacity: 0.1,
      bottom: -20,
      left: 0
    }
  },
  content: {
    position: 'relative',
    display: 'flex',
    marginTop: theme.spacing(4),
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down('lg')]: {
      overflowX: 'auto',
      overflowY: 'hidden'
    }
  },
  viewAll: {
    marginBottom: 50,
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(20),
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 24
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: 0,
    },
    '& svg': {
      marginLeft: theme.spacing(),
      transform: theme.direction === 'rtl' ? 'scale(-1)' : 'scale(1)',
      [theme.breakpoints.up('sm')]: {
        fontSize: 36
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
