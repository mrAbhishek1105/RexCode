import React from 'react';
import './Header.css';

function Header() {

  return (
    <header> 
    <div className='logo'>
    <h2>RexCode</h2>
    <h6>Let's run code online</h6>
    </div>

    <nav>

    <button>Documentatio</button>
    <button>About</button>
    </nav>
    </header>
  );
}

export default Header;