import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './hamburger-menu.css'

function HamburgerMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className='pt-2 menu-icon' onClick={toggleMenu}>
        {isMenuOpen ? (
            <FontAwesomeIcon icon={faX} size='xl'/>
        ) : (
            <FontAwesomeIcon icon={faBars} size='xl'/>
        )}
      </div>
      {isMenuOpen && (
        <div style={{position: 'absolute', top: 0, left: 0, zIndex: 100}} className='menu'>
            <nav id="menu-site" className="side-navigation-menu">
                <ul id="menu-features" className="side-navigation-list">
                    <li className="sidenav-elements">
                        <span className="menu-icon feature-icon icon i-work"></span>
                        <a href="/careers/" className="sidenav-link emphasized"><span>Android</span></a>
                    </li>
                
                    <li className="sidenav-elements">
                        <span className="menu-icon feature-icon icon i-menu-newsletter"></span>
                        <a href="/page/newsletter/" className="sidenav-link standard"><span>Apple</span></a>
                    </li>

                    <li className="sidenav-elements">
                        <span className="menu-icon feature-icon icon i-menu-newsletter"></span>
                        <a href="/page/newsletter/" className="sidenav-link standard"><span>Leaks</span></a>
                    </li>
                
                    <li className="sidenav-elements">
                        <span className="menu-icon feature-icon icon i-menu-advertise"></span>
                        <a href="/page/advertise/" className="sidenav-link standard"><span>Reviews</span></a>
                    </li>                                                         
                </ul>
            </nav>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
