import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './hamburger-menu.snpm css'

function HamburgerMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
 
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
  
    // Add event listener when the menu is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);
  

  return (
    <div>
      <div className='pt-2 menu-icon' onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} size='xl'/>
      </div>

        <div ref={menuRef} style={{position: 'absolute', top: 0, left: 0, zIndex: 100}} className={`menu ${isMenuOpen ? "open" : "closed"}`}>
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
  
    </div>
  );
}

export default HamburgerMenu;
