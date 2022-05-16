import { shallow } from 'enzyme';
import YoutubeApp from '../YoutubeApp';

describe('Tests the YoutubeApp', () => {
  test('should be displayed correctly', () => {
    const wrapper = shallow(<YoutubeApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
