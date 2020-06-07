import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Contact.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className }) => (

  <div className={clsx(className, styles.root)}>

    <div className={'container ' + styles.container}>
      <div className='row no-gutters'>

        <div className={'col-sm-3 col-md-4 col-lg-6 ' + styles.imgBox}>
          <img src='/images/assorted-pastry.jpg' alt="Assorted pastry" />
        </div>

        <div className='col-sm-9 col-md-8 col-lg-6 '>

          <div className={styles.intro}>

            <p className={styles.title}>Location & Hours</p>

            <div>
              <p className={styles.subtitle}>HOURS</p>
              <p>Tuesday through Saturday 8 am - 7 pm</p>
            </div>

            <div>
              <p className={styles.subtitle}>LOCATION</p>
              <p>2795 Cunningham Court<br />
                Rochester Hills 48306<br />
                Michigan<br />
              </p>

            </div>

            <div>
              <p className={styles.subtitle}>ORDER</p>
              <p>Please visit our Menu & Order page.</p>
            </div>

            <div>
              <p className={styles.subtitle} >CONTACT US</p>
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
  Component as Contact,
  // Container as Contact,
  Component as ContactComponent,
};
