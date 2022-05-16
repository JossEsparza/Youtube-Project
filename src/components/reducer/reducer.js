const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return { ...state, currentToggle: action.payload };
    case 'toggle-theme':
      return { ...state, isEnabled: action.payload };
    case 'set-input':
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};

export default reducer;
