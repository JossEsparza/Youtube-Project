import { shallow } from 'enzyme';
import Loading from '../../../components/loading/Loading';

describe('Tests the Loading', () => {
  test('should be displayed correctly', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
