// import React from 'react';
// import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { YoutubeAppRouter } from '../../router/YoutubeAppRouter';
import { mount } from 'enzyme';
// import { YoutubeAppRouter } from '../../router/YoutubeAppRouter';
// import { ToggleContext } from '../../state/ToggleContext';
// import { useReducer } from 'react';
import { ToggleContext } from '../../state/ToggleContext';

describe('Tests the routes', () => {
  test('should display the Home Page', () => {
    const history = createMemoryHistory({ initialEntries: ['/home'] });
    expect(history.location.pathname).toBe('/home');
  });

  test('should display the Favorites Page', () => {
    const history = createMemoryHistory({ initialEntries: ['/favorites'] });
    expect(history.location.pathname).toBe('/favorites');
  });

  test('should display the Video Page', () => {
    const video_id = '8d2323jp';
    const history = createMemoryHistory({ initialEntries: ['/' + video_id] });
    expect(history.location.pathname).toBe('/8d2323jp');
  });

  test('should be displayed correctly', () => {
    const globalReducer = {
      inputValue: 'changuitos',
      currentToggle: false,
      isEnabled: false,
    };
    const wrapper = mount(
      <ToggleContext.Provider
        value={{
          globalReducer,
        }}
      >
        <YoutubeAppRouter />
      </ToggleContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('should be displayed correctly with currentToggle=true', () => {
    const globalReducer = {
      inputValue: 'changuitos',
      currentToggle: true,
      isEnabled: false,
    };
    const wrapper = mount(
      <ToggleContext.Provider
        value={{
          globalReducer,
        }}
      >
        <YoutubeAppRouter />
      </ToggleContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
