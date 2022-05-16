import React from 'react';
import { mount } from 'enzyme';
import { HomePage } from '../../pages/HomePage';
import { ToggleContext } from '../../state/ToggleContext';

describe('Test in <Home Page />', () => {
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
        <HomePage />
      </ToggleContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
