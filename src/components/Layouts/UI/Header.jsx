import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <header>
    <div className="container">
        <div className="grid-two-cols navbar-grid">
            <div className="Logo">
                <NavLink to="/">
                    <h1>Globe</h1>
                </NavLink>

                <nav>
                    <ul>
                        <li><NavLink to= "/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/country">Country</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
   </header>
  )
}

export default Header;