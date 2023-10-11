import React from 'react'
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
                    <a href='/'>H</a>
                </li>
                <li>
                    <a href='Auction'>Auction</a>
                </li>
                <li>
                    <a href='Members'>Members</a>
                </li>
                <li>
                    <a href='Collection'>Collection</a>
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
