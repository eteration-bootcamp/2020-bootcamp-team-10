import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

class NavBar extends React.Component {
  onClickLogOut() {
    this.props.setAuth(false);
  }

  render() {
    let loginData = false;
    if (this.props.isLogin.isLoggedIn === true) {
      loginData = true;
    }

    return (
      <div>
        <Navbar expand="md" className="navbar">
          <Link className="header" to="/">
            Tripify
          </Link>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto" navbar />
            {!loginData ? (
              <div>
                <Nav className="loginNav">
                  <NavItem className="item">
                    <Link className="link" to="/login">
                      Login
                    </Link>
                  </NavItem>
                  <NavItem className="item">
                    {' '}
                    <Link className="link" to="/sign-up">
                      Sign Up
                    </Link>
                  </NavItem>
                </Nav>
              </div>
            ) : (
              <div>
                <Nav className="logOutNav">
                  <NavItem className="item">
                    <Link className="link" to="/profile">
                      Profile
                    </Link>
                  </NavItem>
                  <NavItem className="item">
                    <Link
                      className="link"
                      to="/login"
                      onClick={this.onClickLogOut}
                    >
                      LogOut
                    </Link>
                  </NavItem>
                </Nav>
              </div>
            )}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;

Navbar.propTypes = {
  isLogin: PropTypes.object,
};
