import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { ToggleContext } from '../../../state/ToggleContext';
import { Sidebar } from '../../../components/sidebar/Sidebar.js';

describe('Tests the Sidebar', () => {
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
        <Router history={createMemoryHistory()}>
          <Sidebar />
        </Router>
      </ToggleContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
