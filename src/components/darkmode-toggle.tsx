import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

// This component represents the dark mode toggle button that changes the background color of the website
function DarkModeToggle() {
  // Set the initial state of dark mode to off
  const [isDarkModeOn, setIsDarkModeOn] = useState(true);

  // Use effect hook to update the document body class when the state of dark mode changes
  useEffect(() => {
    if (isDarkModeOn) {
      // If dark mode is on, add the 'dark' class to the body to change the background color
      document.body.classList.add('dark');
    } else {
      // If dark mode is off, remove the 'dark' class from the body to change the background color
      document.body.classList.remove('dark');
    }
  }, [isDarkModeOn]);

  // Function to handle the toggle button click event
  function handleToggleClick() {
    // Set the state of dark mode to the opposite of its current value
    setIsDarkModeOn(!isDarkModeOn);
  }

  // Return the JSX for the toggle button
  return (
    <div className='mt-3'>
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
