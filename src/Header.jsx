import React from 'react'
import './Header.css'

export function Header() {
  return (
    <div className=' header container d-flex align-items-center justify-content-between text-light'>
        <div>
            <span>Snig</span>
        </div>
    <nav className='navbar navbar-expand'>
       <ul className="ul navbar-nav mx-2">
        <li className="nav-item">
            <a href="#" className='nav-link text-light'>Cases</a>
        </li>
        <li className='nav-item'><a href="#" className="nav-link text-light">Contacts</a></li>
        </ul> 
        </nav>
    </div>
  )
}

export default Header