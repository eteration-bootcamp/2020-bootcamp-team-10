import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prefer-stateless-function
class NavBar extends React.Component {
  render() {
    console.log(this.props.isLogin, 'ısLogin Debug');

    let loginData = false;
    if (this.props.isLogin.isLoggedIn === true) {
      loginData = true;
    } else {
      loginData = false;
    }
    return (
      <div>
        <Navbar color="dark" expand="md">
          <Link to="/">Trip</Link>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/">About Us</Link>
              </NavItem>
              <NavItem>
                <Link to="/">GitHub</Link>
              </NavItem>
            </Nav>
            {!loginData ? (
              <div>
                <Nav>
                  <NavItem>
                    <Link to="/login">Login</Link>
                  </NavItem>
                </Nav>
                <Nav>
                  <NavItem>
                    <Link to="/sign-up">Sign Up</Link>
                  </NavItem>
                </Nav>
              </div>
            ) : (
              <div>
                <Nav>
                  <NavItem>
                    <Link to="/login">LogOut</Link>
                  </NavItem>
                </Nav>
                <Nav>
                  <NavItem>
                    <Link to="/">LogOut</Link>
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
  isLogin: PropTypes.bool,
};
