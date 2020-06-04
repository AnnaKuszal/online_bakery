import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './NavBar.module.scss';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


class Component extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.string,
    pages: PropTypes.array,
  };

  static defaultProps = {
    pages: ['', 'menu', 'gallery', 'contact', 'cart'],
  };

  state = {
    menuVisible: false,
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({
      activePage: newPage,
    });
  }

  toggleMenu = () => {
    this.setState({ menuVisible: !this.state.menuVisible });
  };

  render() {
    const { menuVisible } = this.state;
    const { className, title, pages } = this.props;
    const { activePage } = this.state;

    return (

      <div className={clsx(className, styles.root)}>
        <AppBar position="static">
          <Toolbar>

            <Button className={styles.title} href="/">
              {title}
            </Button>

            <>
              <div className={styles.menu}>
                <Button
                  component={NavLink}
                  to="/"
                  activeClassName="active"
                  variant="text"
                  className={styles.btn}>HOME
                </Button>

                <Button
                  component={NavLink}
                  to="/productsList"
                  activeClassName="active"
                  variant="text"
                  className={styles.btn}>MENU&ORDER
                </Button>

                <Button
                  component={NavLink}
                  to="#"
                  activeClassName="active"
                  variant="text"
                  className={styles.btn}>GALLERY
                </Button>

                <Button
                  component={NavLink}
                  to="/contact"
                  activeClassName="active"
                  variant="text"
                  className={styles.btn}>CONTACT
                </Button>

                <Button
                  component={NavLink}
                  to="/cart"
                  activeClassName="active"
                  variant="text"
                  className={styles.btn}>
                  <i className="fas fa-shopping-cart"></i>
                </Button>
              </div>


              <div className={styles.mobileMenuBtn}>
                <IconButton edge="start" onClick={this.toggleMenu} className={styles.menuButton} aria-label="menu">
                  <MenuIcon/>
                </IconButton>
              </div>

              <div className={ `${styles.menuMobile} ${menuVisible ? 'visible' : 'hidden'}` } >
                <ul>
                  <li>
                    <Link
                      to='/'
                      className={pages[0] === activePage ? styles.active : ''}
                      onClick={() => this.handlePageChange(pages[0])}
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/productsList`}
                      className={pages[1] === activePage ? styles.active : ''}
                      onClick={() => this.handlePageChange(pages[1])}
                    >
                      MENU&ORDER
                    </Link>
                  </li>

                  <li>
                    <Link
                      to='#'
                      className={pages[2] === activePage ? styles.active : ''}
                      onClick={() => this.handlePageChange(pages[2])}
                    >
                      GALLERY
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='#'
                      className={pages[3] === activePage ? styles.active : ''}
                      onClick={() => this.handlePageChange(pages[3])}
                    >
                      CONTACT
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/cart`}
                      className={pages[4] === activePage ? styles.active : ''}
                      onClick={() => this.handlePageChange(pages[4])}
                    >
                      CART
                    </Link>
                  </li>
                </ul>
              </div>

            </>
          </Toolbar>
        </AppBar>
      </div>

    );
  }
}

// Component.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
//   title: PropTypes.string,
// };

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as NavBar,
  // Container as NavBar,
  Component as NavBarComponent,
};
