import React from 'react';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { YoutubeAppRouter } from './router/YoutubeAppRouter';
import ToggleContext from './state/ToggleContext';

const YoutubeApp = () => {
  const [currentToggle, setCurrentToggle] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [inputValue, setInputValue] = useState('wizeline');

  return (
    <div className={isEnabled ? 'dark' : 'light'}>
      <ToggleContext.Provider
        value={{
          currentToggle,
          setCurrentToggle,
          isEnabled,
          setIsEnabled,
          inputValue,
          setInputValue,
        }}
      >
        <Navbar />
        <YoutubeAppRouter />
      </ToggleContext.Provider>
    </div>
  );
};

export default YoutubeApp;
