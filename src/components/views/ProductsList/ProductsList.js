import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './ProductsList.module.scss';

import { ProductBox } from '../../common/ProductBox/ProductBox';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux.js';

const Component = ({ className, products }) => (

  <div className={clsx(className, styles.root)}>
    <p className={styles.title} >Menu & Order</p>
    <div className={'container ' + styles.container} >
      <div  className={'row ' + styles.row}>
        {products.map(item => (
          <div key={item.id} className={'col-12 col-sm-6 col-md-4 col-lg-3 ' + styles.box}>
            <ProductBox {...item} />
          </div>
        ))}
      </div>
    </div>
  </div>

);

Component.propTypes = {
  className: PropTypes.string,
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

const ProductsListContainer = connect(mapStateToProps)(Component);

export {
  //Component as ProductsList,
  ProductsListContainer as ProductsList,
  Component as ProductsListComponent,
};
