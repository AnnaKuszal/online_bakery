import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Homepage.module.scss';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import { getAll } from '../../../redux/categoriesRedux.js';


const Component = ({ className, categories }) => (
  <div className={clsx(className, styles.root)}>

    <div className={'container ' + styles.container} >
      <div className='row no-gutters'>

        <div className={'col-sm-3 col-md-4 col-lg-6 ' + styles.imgBox}>
          <img src='/images/cake-with-flowers.jpg' alt="Cake with flowers" />
        </div>

        <div className='col-sm-9 col-md-8 col-lg-6 '>

          <div className={styles.intro}>

            <p className={styles.title} >~ Make A Wish ~</p>
            <p className={styles.subtitle}>Welcome to your local bakery online!</p>
            <p>Since 2004 we&apos;ve been serving our customers the best quality freshly baked cakes and desserts.</p>
            <p><i>Our offer:</i></p>

            <ul className={styles.offer}>
              {categories.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>

            <ul className={styles.contact}>
              <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i>Facebook</a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i>Instagram</a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i>Twitter</a></li>
            </ul>

          </div>

        </div>
      </div>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

Component.defaultProps = {
  categories: [],
};


const mapStateToProps = state => ({
  categories: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

const HomepageContainer = connect(mapStateToProps)(Component);


export {
  // Component as Homepage,
  HomepageContainer as Homepage,
  Component as HomepageComponent,
};
