import React from 'react';
import { Link } from 'react-router-dom';

function NavBar ()  {
  return (
    <div>
      <Link to='/home'>Home</Link>
      <Link to='/destinations'>Destinations</Link>
    </div>
  )
}

export default NavBar;
