import reducer from '../../../components/reducer/reducer';

describe('Test the reducer', () => {
  test('should return the default value', () => {
    const initialState = () => {
      return {
        inputValue: 'changuitos',
        currentToggle: false,
        isEnabled: false,
      };
    };
    const state = reducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test('should toggle the sidebar icon', () => {
    const initialState = () => {
      return {
        inputValue: 'changuitos',
        currentToggle: false,
        isEnabled: false,
      };
    };
    const action = {
      type: 'toggle',
      payload: true,
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({ currentToggle: true });
  });

  test('should toggle the theme (dark mode or light mode)', () => {
    const initialState = () => {
      return {
        inputValue: 'changuitos',
        currentToggle: false,
        isEnabled: false,
      };
    };
    const action = {
      type: 'toggle-theme',
      payload: true,
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({ isEnabled: true });
  });

  test('should set the inputValue according the search)', () => {
    const initialState = () => {
      return {
        inputValue: 'changuitos',
        currentToggle: false,
        isEnabled: false,
      };
    };
    const action = {
      type: 'set-input',
      payload: 'wizeline',
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({ inputValue: 'wizeline' });
  });
});
