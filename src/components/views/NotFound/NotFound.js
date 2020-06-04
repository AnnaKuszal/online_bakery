import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './NotFound.module.scss';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>

    <div className={'container ' + styles.container} >
      <div className='row no-gutters'>

        <div className={'col-sm-3 col-md-4 col-lg-6 ' + styles.imgBox}>
          <img src='/images/broken-chocolate.jpg' alt="Broken chocolate" />
        </div>

        <div className='col-sm-9 col-md-8 col-lg-6 '>

          <div className={styles.intro}>

            <h5>Sorry, <br />
            the page you&apos;re looking for <br />
            was not found :(</h5>

          </div>

        </div>
      </div>
    </div>

  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);


export {
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent,
};
