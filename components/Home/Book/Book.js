import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './book-style';

function Book(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  const {
    img,
    title,
    desc,
    rating,
    price,
    href,
    color,
    expand,
    click,
  } = props;

  return (
    <div
      className={cx(classes.book, expand ? classes.expanded : classes.collapsed)}
      style={{ border: expand ? '2px solid ' + color : 'none' }}
      onKeyDown={() => {}}
      role="button"
      tabIndex={0}
      onClick={click}
    >
      <figure>
        <img src={img} alt={title} />
        <figcaption style={{ background: color }}>
          <span>
            {title}
          </span>
        </figcaption>
      </figure>
      <div className={classes.desc}>
        <div className={classes.text}>
          <Box pb={2}>
            <Typography variant="h6" noWrap className={classes.title}>
              {title}
            </Typography>
          </Box>
          <p className={text.paragraph}>
            {desc}
          </p>
        </div>
        <div>
          <div className={classes.property}>
            {rating > 0 && (
              <Rating
                name="simple-controlled"
                value={rating}
                readOnly
              />
            )}
            {price > 0 && (
              <strong>
                $
                {price}
              </strong>
            )}
          </div>
          <Button href={href} fullWidth className={classes.button} variant="outlined" color="primary">
            {t('btn_detail')}
          </Button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {

  click: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  rating: PropTypes.number,
  price: PropTypes.number,
  href: PropTypes.string,
  color: PropTypes.string,
  expand: PropTypes.bool,
};

Book.defaultProps = {
  rating: 0,
  price: 0,
  href: '#',
  color: '#6DB4A7',
  expand: false,
};

export default Book;
