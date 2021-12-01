import React, {Component} from 'react'

import NavBar from './NavBar';

class Header extends React.Component {
  render() {
    return (

      <header className="header mb-6">
        <NavBar/>
      </header>

    );
  }
}

export default Header;