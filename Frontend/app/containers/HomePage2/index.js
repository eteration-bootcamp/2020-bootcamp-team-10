/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Header from '../../components/Header';
import Search from '../../components/Search';
import OSMap from '../../components/Map';
export default function HomePage() {
  return (
    <>
      <Header />
      <Search />
      <OSMap />
    </>
  );
}
