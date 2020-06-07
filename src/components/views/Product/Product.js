import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Product.module.scss';

import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import { getAll } from '../../../redux/productsRedux.js';

const Component = ({ className, products, match }) => (

  <div className={clsx(className, styles.root)}>

    <div className={'container ' + styles.container} >

      {products.filter(el => el.id === match.params.id).map(el => (

        <div key={el.id} className='row no-gutters'>

          <div className='col-sm-12 col-md-6 col-lg-6'>

            <div className={styles.intro}>
              <p className={styles.title} >{el.name}</p>
              <p className={styles.subtitle}>{el.description}</p>
              <p>Size: {el.size}</p>
              <p>Price: $ {el.price}</p>
              <p>Quantity:
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  min="0"
                />
              </p>

              <p className={styles.instructions}>Please enter any special instructions for decorating your cake or cupcakes in the text box below:</p>
              <textarea
                name="instructions"
                id="instructions"
                placeholder="Your message"
                className={styles.textarea}
              >
              </textarea>

              <Button
                component={NavLink}
                to="/cart"
                activeClassName="active"
                variant="text"
                className={styles.btn}>
                <i className="fas fa-shopping-cart"></i>
                ADD TO CART
              </Button>
            </div>

          </div>

          <div className={'col-sm-12 col-md-6 col-lg-6 ' + styles.imgBox}>

            <div className={styles.imgBg}>
              <img src={el.imageMain} alt = {el.alt} />
            </div>

            <div className={'row '  + styles.imgRow}>

              <div className={'col-4 ' + styles.imgSm}>
                <img src={el.imageSm1} alt = {el.alt} />
              </div>

              <div className={'col-4 ' + styles.imgSm}>
                <img src={el.imageSm2} alt = {el.alt} />
              </div>

              <div className={'col-4 ' + styles.imgSm}>
                <img src={el.imageSm3} alt = {el.alt} />
              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      size: PropTypes.string,
      price: PropTypes.number,
      imageMain: PropTypes.string,
      imageSm1: PropTypes.string,
      imageSm2: PropTypes.string,
      imageSm3: PropTypes.string,
    })
  ),
};

Component.defaultProps = {
  products: [],
};

const mapStateToProps = state => ({
  products: getAll(state),
});


// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

const ProductContainer = connect(mapStateToProps)(Component);

export {
  // Component as Product,
  ProductContainer as Product,
  Component as ProductComponent,
};
