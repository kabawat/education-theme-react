import { makeStyles } from 'tss-react/mui';

const aboutStyles = makeStyles({ uniqId: 'about' })(theme => ({
  root: {
    position: 'relative',
    '& p': {
      marginBottom: theme.spacing(5)
    }
  },
  btn: {
    minWidth: 150
  },
  illustration: {
    '& img': {
      width: '100%'
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default aboutStyles;
