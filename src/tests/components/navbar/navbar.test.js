import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Navbar from '../../../components/navbar/Navbar';
import { ToggleContext } from '../../../state/ToggleContext';

describe('Tests the Navbar', () => {
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
          <Navbar />
        </Router>
      </ToggleContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
