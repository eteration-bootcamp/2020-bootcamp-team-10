import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
class NavBar extends React.Component {
    render() {
        return (
            <div >
              <Navbar expand="md">
                <NavbarBrand href="/">Trip</NavbarBrand>
                <NavbarToggler />
                <Collapse navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink href="/">About Us</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/">GitHub</NavLink>
                    </NavItem>
                  </Nav>
                  <Nav>
                    <NavItem>
                      <NavLink href="/login">Login</NavLink>
                    </NavItem>
                  </Nav>
                  <Nav>
                    <NavItem>
                      <NavLink href="/sign-up">Sign Up</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          );
    }
}
    
export default NavBar;