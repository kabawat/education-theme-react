import React, { useState, useRef } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-slick';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import IconButton from '@mui/material/IconButton';
import NextIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import link from '~/public/text/link';
import Title from '../../Title';
import SliderArt from '../SliderArt';
import ProductCard from '../../Cards/ProductCard';
import useStyles from './popular-course-style';

const courseData = [
  {
    img: imgAPI.education[9],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[5],
    title: 'Vivamus sit amet',
    rating: 4,
    price: 10,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[3],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[4],
    title: 'Vivamus sit amet',
    rating: 3,
    price: 25,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[8],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[7],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 40,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  }
];

function PopularCourse() {
  const slider = useRef(null);
  const { t } = useTranslation('common');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { classes, cx } = useStyles();
  const [fade, setFade] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    arrows: false,
    variableWidth: true,
    afterChange: current => {
      if (current >= 1) {
        setFade(true);
      } else {
        setFade(false);
      }
    },
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };

  return (
    <div className={classes.root}>
      <Container className={classes.carouselHeader}>
        <Title
          head={t('education-landing.popular_title')}
          desc={t('education-landing.popular_desc')}
          align={isMobile ? 'center' : 'left'}
          color="secondary"
        />
        <Button
          href={link.education.product}
          color="primary"
          className={classes.viewAll}
        >
          {t('btn_seeall')}
          <NextIcon className={classes.icon} />
        </Button>
      </Container>
      <Container>
        <div className={classes.floatingArtwork}>
          <SliderArt fade={fade}>
            <ScrollAnimation animateOnce animateIn="fadeInLeftShort" offset={-60} delay={300} duration={0.5}>
              <div>
                <img
                  src={imgAPI.education[36]}
                  data-2d={imgAPI.education[35]}
                  data-3d={imgAPI.education[36]}
                  className="img-2d3d"
                  alt="services 3d"
                />
              </div>
            </ScrollAnimation>
          </SliderArt>
        </div>
      </Container>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <Carousel ref={slider} {...settings}>
            <div className={cx(classes.props, classes.itemPropsFirst)}>
              <div />
            </div>
            {courseData.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <ProductCard
                  type="round"
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  rating={item.rating}
                  price={item.price}
                  href={link.education.productDetail}
                />
              </div>
            ))}
            <div className={cx(classes.props, classes.itemPropsFirst)}>
              <div />
            </div>
          </Carousel>
        </div>
        <IconButton
          className={cx(classes.nav, classes.prev)}
          onClick={() => slider.current.slickPrev()}
          size="large"
        >
          <i className="ion-ios-arrow-left" />
        </IconButton>
        <IconButton
          className={cx(classes.nav, classes.next)}
          onClick={() => slider.current.slickNext()}
          size="large"
        >
          <i className="ion-ios-arrow-forward" />
        </IconButton>
      </div>
    </div>
  );
}

PopularCourse.propTypes = {

};

export default PopularCourse;
