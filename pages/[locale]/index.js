import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Hidden from '@mui/material/Hidden';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import BannerSlider from '~/components/Home/BannerSlider';
import Feature from '~/components/Home/Feature';
import PopularCourse from '~/components/Home/PopularCourse';
import Explore from '~/components/Home/Explore';
import About from '~/components/Home/About';
import Testimonials from '~/components/Home/Testimonials';
import Blog from '~/components/Home/Blog';
import DecoFooter from '~/components/Footer/DecorationTop';
import SubscribeForm from '~/components/SubscribeForm';
import Corner from '~/components/Home/Corner';
import Footer from '~/components/Footer';
import Notification from '~/components/Notification';
import brand from '~/public/text/brand';

function Landing(props) {
  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.education.name + ' - Home Page' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          home
        />
        <main className={classes.containerWrap}>
          <div id="home">
            <BannerSlider />
          </div>
          <section id="feature" className={classes.spaceTop}>
            <Feature />
          </section>
          <section id="popular" className={classes.spaceTopShort}>
            <PopularCourse />
          </section>
          <section id="explore">
            <Explore />
          </section>
          <section id="about" className={classes.spaceTopShort}>
            <About />
          </section>
          <section id="testimonials" className={classes.spaceTop}>
            <Testimonials />
          </section>
          <section id="blog" className={classes.spaceTop}>
            <Blog />
          </section>
        </main>
        <section id="subscribe" className={cx(classes.bottomDecoWrap, classes.spaceTop)}>
          <DecoFooter />
          <SubscribeForm />
        </section>
        <Footer toggleDir={onToggleDir} />
        <Hidden mdDown>
          <Corner />
        </Hidden>
        <Hidden lgDown>
          <Notification />
        </Hidden>
      </div>
    </React.Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;
