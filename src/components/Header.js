// Header.js
import React from 'react';
import { Link,NavLink } from 'react-router-dom';

const Header = () => {
  return (
    // <div>
    //   <a href='/' className='logo'>
    //     <span>Logo</span>
    //   </a>
    //   <nav className='navigation'>
    //     <a href='/Home'>Home</a>
    //     <a href='/products'>Products</a>
    //     <a href='/Home'>Contacts</a>
    //   </nav>
    // </div>



    <header>
      <Link to='/' className='logo'>
        <span>Logo</span>
      </Link>
      <nav className='navigation'>
        <NavLink to='/' end >Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/contact'>Contacts</NavLink>
      </nav>
    </header>
  );
};

export default Header;  // Make sure this is a default export
