import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import Title from '../Title';
import useStyles from './faq-style';

const faqData = [
  {
    q: 'Pellentesque ac bibendum tortor?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'In mi nulla, fringilla vestibulum?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'Quisque lacinia purus ut libero?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'Quisque ut metus sit amet augue?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'Pellentesque ac bibendum tortor?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
];

function Faq() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [expanded, setExpanded] = React.useState(0);
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={6}>
          <Grid item md={6}>
            <Box mb={3}>
              <Title
                align={isMobile ? 'center' : 'left'}
                head={t('faq_title')}
                desc={t('faq_desc')}
              />
            </Box>
            <Hidden mdDown>
              <div className={classes.illustration}>
                <img
                  src={imgAPI.educationInner[7]}
                  data-2d={imgAPI.educationInner[6]}
                  data-3d={imgAPI.educationInner[7]}
                  className="img-2d3d"
                  alt="faq 3d"
                />
              </div>
            </Hidden>
          </Grid>
          <Grid item md={6}>
            <div className={classes.accordion}>
              {faqData.map((item, index) => (
                <div className={classes.item} key={index.toString()}>
                  <Accordion
                    classes={{
                      root: classes.paper
                    }}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                  >
                    <AccordionSummary
                      classes={{
                        content: classes.content,
                        expanded: classes.expanded,
                      }}
                    >
                      <Typography className={classes.heading}>{item.q}</Typography>
                      <ExpandMoreIcon className={classes.icon} />
                    </AccordionSummary>
                    <AccordionDetails
                      classes={{
                        root: classes.detail,
                      }}
                    >
                      <Typography>
                        {item.a}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Faq;
