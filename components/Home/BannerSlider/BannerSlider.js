import React, { useState, useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Hidden from '@mui/material/Hidden';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import link from '~/public/text/link';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import useStyles from './slider-style';

function BannerSlider() {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const slider = useRef(null);

  const [curSlide, setCurSlide] = useState(0);

  const slickOptions = {
    dots: false,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    infinite: true,
    autoplay: false,
    cssEase: 'ease-out',
    fade: isMobile,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          dots: true,
        }
      }
    ]
  };

  const handleAfterChange = currentSlide => {
    setCurSlide(currentSlide);
  };

  const gotoSlide = slide => {
    slider.current.slickGoTo(slide);
  };

  return (
    <div className={classes.bannerWrap}>
      <div className={classes.bgDeco} />
      <Container className={classes.smallDeco}>
        <div />
      </Container>
      <div className={classes.carousel}>
        <Carousel
          className={classes.slider}
          {...slickOptions}
          ref={slider}
          afterChange={handleAfterChange}
        >
          <div className={classes.slide} id="slide1">
            <div className={classes.inner}>
              <div className={cx(classes.img, classes.backgroundBanner)}>
                <img
                  className={cx('img-2d3d', classes.imgSlide1)}
                  src={imgAPI.education[26]}
                  data-2d={imgAPI.education[25]}
                  data-3d={imgAPI.education[26]}
                  alt="background"
                />
              </div>
              <Container>
                <Grid container spacing={3} alignItems="center">
                  <Grid item md={6} xs={12}>
                    <Box px={2}>
                      <div className={classes.text}>
                        <div className={cx(classes.title, classes.titleLeft)}>
                          <h4 className={cx(text.title, classes.title)}>
                            {t('education-landing.banner_title')}
                          </h4>
                        </div>
                        <h5 className={text.subtitle}>
                          {t('education-landing.banner_desc')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button color="primary" href="#" className={classes.btnText}>
                            {t('btn_detail')}
                          </Button>
                          <Button size="large" variant="contained" color="primary" href={link.education.register} className={classes.button}>
                            {t('btn_get')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <div className={classes.img}>
                      <img
                        src={imgAPI.education[20]}
                        className={cx('img-2d3d', classes.imgSlide1)}
                        data-2d={imgAPI.education[19]}
                        data-3d={imgAPI.education[20]}
                        alt="banner 1 3D"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={classes.slide} id="slide2">
            <div className={classes.inner}>
              <Container>
                <Grid container justifyContent="flex-end" alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
                  <Grid item md={6} xs={12}>
                    <div className={classes.img}>
                      <img
                        src={imgAPI.education[22]}
                        className={cx('img-2d3d', classes.imgSlide2)}
                        data-2d={imgAPI.education[21]}
                        data-3d={imgAPI.education[22]}
                        alt="banner 2 3D"
                      />
                    </div>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Box px={2}>
                      <div className={classes.text}>
                        <div className={cx(classes.title, classes.titleLeft)}>
                          <h4 className={text.title}>
                            {t('education-landing.banner_title')}
                          </h4>
                        </div>
                        <h5 className={text.subtitle}>
                          {t('education-landing.banner_desc')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button color="primary" href="#" className={classes.btnText}>
                            {t('btn_detail')}
                          </Button>
                          <Button size="large" variant="contained" color="primary" href={link.education.register} className={classes.button}>
                            {t('btn_get')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={cx(classes.slide, classes.centerContent)} id="slide3">
            <div className={classes.inner}>
              <Container>
                <Grid container justifyContent="flex-end">
                  <Grid item md={12} xs={12}>
                    <Box px={{ xs: 2, sm: 12 }}>
                      <div className={classes.text}>
                        <div className={classes.titleWrap}>
                          <div className={cx(classes.title, classes.titleCenter)}>
                            <h4 className={text.title}>
                              {t('education-landing.banner_title')}
                            </h4>
                          </div>
                        </div>
                        <h5 className={text.subtitle}>
                          {t('education-landing.banner_desc')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button color="primary" href="#" className={classes.btnText}>
                            {t('btn_detail')}
                          </Button>
                          <Button size="large" variant="contained" color="primary" href={link.education.register} className={classes.button}>
                            {t('btn_get')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <div className={cx(classes.img, classes.hBanner)}>
                      <img
                        src={imgAPI.education[24]}
                        className="img-2d3d"
                        data-2d={imgAPI.education[23]}
                        data-3d={imgAPI.education[24]}
                        alt="banner 3 3D"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        </Carousel>
      </div>
      <Hidden mdDown>
        <Container maxWidth="md">
          <nav className={classes.slideNav}>
            <ButtonBase
              className={cx(classes.btnNav, curSlide === 0 ? classes.active : '')}
              onClick={() => gotoSlide(0)}
            >
              <strong>First Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
            <Divider className={classes.divider} orientation="vertical" flexItem />
            <ButtonBase
              className={cx(classes.btnNav, curSlide === 1 ? classes.active : '')}
              onClick={() => gotoSlide(1)}
            >
              <strong>Second Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
            <Divider className={classes.divider} orientation="vertical" flexItem />
            <ButtonBase
              className={cx(classes.btnNav, curSlide === 2 ? classes.active : '')}
              onClick={() => gotoSlide(2)}
            >
              <strong>Third Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
          </nav>
        </Container>
      </Hidden>
    </div>
  );
}

export default BannerSlider;
