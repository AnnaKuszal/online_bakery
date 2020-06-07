import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './ProductBox.module.scss';

import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className, id, name, price, imageMain, alt }) => (
  <div className={clsx(className, styles.root)}>

    <div className={styles.photo}>
      <img src={imageMain} alt={alt} />
      <div className={styles.buttons}>
        <Button
          component={NavLink}
          to={`/product/${id}`}
          activeClassName="active"
          variant="text"
          className={styles.btn}>See more
        </Button>
      </div>
    </div>

    <div className={styles.content}>
      <h5>{name}</h5>
    </div>

    <div className={styles.line}></div>
    <div className={styles.actions}>

      <div className={styles.add}>

        <div className={styles.price}>
          $ {price}
        </div>

        <Button
          component={NavLink}
          to="/cart"
          activeClassName="active"
          variant="text"
          className={clsx(styles.btn, styles.cartBtn)}>
          <i className="fas fa-shopping-cart"></i>
          Add to cart
        </Button>

      </div>
    </div>

  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  imageMain: PropTypes.string,
  alt: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);


export {
  Component as ProductBox,
  // Container as ProductBox,
  Component as ProductBoxComponent,
};
