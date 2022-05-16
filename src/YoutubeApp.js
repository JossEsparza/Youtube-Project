import React, { useReducer } from 'react';
import reducer from './components/reducer/reducer';
import { YoutubeAppRouter } from './router/YoutubeAppRouter';
import { ToggleContext } from './state/ToggleContext';

const initialState = () => {
  return {
    inputValue: 'changuitos',
    currentToggle: false,
    isEnabled: false,
  };
};
const YoutubeApp = () => {
  const [globalReducer, dispatch] = useReducer(reducer, {}, initialState);

  return (
    <div className={globalReducer.isEnabled ? 'dark' : 'light'}>
      <ToggleContext.Provider
        value={{
          globalReducer,
          dispatch,
        }}
      >
        <YoutubeAppRouter />
      </ToggleContext.Provider>
    </div>
  );
};

export default YoutubeApp;
