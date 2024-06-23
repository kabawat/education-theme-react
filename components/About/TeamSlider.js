import React, { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import ProfileCard from '../Cards/ProfileCard';
import Title from '../Title';
import useStyles from './about-style';

function PhotoSlider() {
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation('common');

  const [loaded, setLoaded] = useState(false);

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    variableWidth: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={cx(classes.teamRoot, classes.bgWrapper)}>
      <Container>
        <Box mb={3}>
          <Title
            align={isMobile ? 'center' : 'left'}
            head={t('about_team')}
            desc="Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </Box>
      </Container>
      <Box mt={5}>
        {loaded && (
          <div className={classes.carousel}>
            <Carousel {...settings}>
              {[...Array(6)].map((e, index) => (
                <div
                  key={index.toString()}
                  className={classes.item}
                >
                  <Box px={1}>
                    <ProfileCard
                      connection={100}
                      favorites={10}
                      albums={12}
                      cover={imgAPI.photo[41 + index]}
                      avatar={imgAPI.avatar[index]}
                      name="John Dalton"
                      title="Web Designer"
                      type="round"
                      orientation="landscape"
                    />
                  </Box>
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </Box>
    </div>
  );
}

export default PhotoSlider;
