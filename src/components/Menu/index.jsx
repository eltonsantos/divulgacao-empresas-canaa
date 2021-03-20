import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav  mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/cadastro">Cadastro</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
