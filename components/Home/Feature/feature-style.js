import { makeStyles } from 'tss-react/mui';

const counterStyles = makeStyles({ uniqId: 'feature' })(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: 20
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      paddingTop: theme.spacing(5)
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 0
    }
  },
  counterItem: {
    alignItems: 'center',
    margin: theme.spacing(2.5),
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      margin: theme.spacing(2, 4)
    },
    '& figure': {
      margin: 0,
      marginRight: theme.spacing(5),
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: 10,
      width: 100,
      height: 100,
      lineHeight: '100px',
      textAlign: 'center',
      verticalAlign: 'middle',
      transform: 'rotate(45deg)',
      [theme.breakpoints.down('sm')]: {
        width: 70,
        height: 70,
        lineHeight: '70px',
      },
      '& img': {
        transform: 'translateY(10px) rotate(-45deg)',
        width: '110%',
        maxHeight: 120,
        margin: '0 auto'
      },
    },
    '& h4': {
      fontSize: 36,
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(3)
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 24
      }
    },
    '& h6': {
      color: theme.palette.text.secondary
    }
  },
  text: {
    flex: 1,
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
