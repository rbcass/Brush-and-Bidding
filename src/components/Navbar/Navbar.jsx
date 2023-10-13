import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div
            className='navLogo'>
                <a href='/'/>
            </div>

            <ul className='nav-links'>
                <li className='logo'>
                <Link to="/">B&B</Link>
                </li>
                <li>
                <Link to="/Auction">Auction</Link>
                </li>
                <li>
                <Link to="/Members">Members</Link>
                </li>
                <li>
                <Link to="/Collection">Collection</Link>
                </li>
                <li>
                    <Link to="/Account">Account</Link>
                </li>

</ul>

<div className='search-box'>
    <input type='text' placeholder='Search'/>
</div>

{/* <ul className='top-buttons'>
          <li>
            <a href='/signup'>Sign Up</a>
          </li>
          <li>
            <a href='/howtosell'>How to Sell</a>
          </li>
        </ul> */}
        </nav>


      
    </div>
  )
}

export default Navbar
