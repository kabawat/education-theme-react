import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'next-i18next';
import HeroBanner from '../HeroBanner';
import Title from '../Title';
import useStyles from './filter-style';

function Search(props) {
  const { value, updateValue } = props;
  const { t } = useTranslation('common');
  const { classes } = useStyles();

  const handleUpdateValue = event => {
    updateValue(event.target.value);
  };

  return (
    <HeroBanner>
      <section className={classes.searchBanner}>
        <Container maxWidth="md">
          <Grid container alignItems="center" className={classes.searchBox}>
            <Grid item sm={12}>
              <Title head={t('list_title')} desc={t('list_subtitle')} color="secondary" align="center" />
              <div className={classes.search}>
                <FormControl variant="standard" component="form">
                  <OutlinedInput
                    value={value}
                    onChange={(e) => handleUpdateValue(e)}
                    className={classes.input}
                    placeholder={t('list_search')}
                    startAdornment={<SearchIcon />}
                    labelWidth={0}
                  />
                </FormControl>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </HeroBanner>
  );
}

Search.propTypes = {
  value: PropTypes.string,
  updateValue: PropTypes.func.isRequired,
};

Search.defaultProps = {
  value: ''
};

export default Search;
