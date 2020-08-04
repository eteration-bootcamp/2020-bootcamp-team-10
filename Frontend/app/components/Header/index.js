/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import NavBar from './Navbar';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Header() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

Header.propTypes = {};

export default memo(Header);
