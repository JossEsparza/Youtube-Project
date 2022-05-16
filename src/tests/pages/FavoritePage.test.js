import React from 'react';
import { shallow } from 'enzyme';
import { FavoritePage } from '../../pages/FavoritePage';

describe('Test in <Favorite Page />', () => {
  test('should be displayed correctly', () => {
    const wrapper = shallow(<FavoritePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
