import { makeStyles } from 'tss-react/mui';

const testiStyles = makeStyles({ uniqId: 'testi_card' })((theme, _params, classes) => ({
  /* Testimonial Card */
  icon: {},
  text: {},
  testimonial: {
    height: 260,
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(5),
    overflow: 'visible',
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shade.light,
    padding: theme.spacing(4, 2),
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8),
    },
    [`& .${classes.icon}`]: {
      borderRadius: 20,
      background: theme.palette.primary.main,
      transform: 'rotate(45deg)',
      width: 70,
      height: 70,
      top: -30,
      left: 32,
      position: 'absolute',
      textAlign: 'center',
      lineHeight: '100px',
      direction: 'ltr',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
      '& span': {
        background: 'url(/images/education/quote.png) no-repeat transparent',
        width: 37,
        height: 37,
        display: 'block',
        transform: 'rotate(-45deg) translate(0px, 20px)',
        verticalAlign: 'top'
      }
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
    },
    [`& .${classes.text}`]: {
      marginBottom: theme.spacing(4),
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      height: theme.spacing(9),
    },
  },
  captionTitle: {
    color: theme.palette.text.secondary
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default testiStyles;
