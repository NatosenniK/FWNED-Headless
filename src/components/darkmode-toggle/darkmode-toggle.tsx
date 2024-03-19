import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

function DarkModeToggle() {

  const [isDarkModeOn, setIsDarkModeOn] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    if (isDarkModeOn) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkModeOn]);

  function handleToggleClick() {
    setIsDarkModeOn(prevMode => !prevMode);
  }

  return (
    <div className='mt-2'>
      <input
        type="checkbox"
        id="checkbox"
        className='checkbox'
        checked={isDarkModeOn}
        onChange={handleToggleClick}
      />
      <label htmlFor="checkbox" className="checkbox-label">
        <FontAwesomeIcon icon={faMoon} />
        <FontAwesomeIcon icon={faSun} />
        <span className="circle"></span>
      </label>
    </div>
  );
}

export default DarkModeToggle;
