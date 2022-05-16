import { shallow } from 'enzyme';
import VideoCard from '../../../components/cards/VideoCard';

describe('Tests the Video Card', () => {
  test('should be displayed correctly', () => {
    const id = {
      videoId: 'ToI6UOZZSzo',
    };

    const snippet_info = {
      title: 'Djokovic Vs Monfils; Alcaraz, Murray & Shapovalov In Action',
      description: 'Highlights of a blockbuster day in Madrid',
      thumbnails: {
        high: {
          url: 'https://i.ytimg.com/vi/ToI6UOZZSzo/mqdefault.jpg',
        },
      },
    };
    const wrapper = shallow(<VideoCard id={id} snippet={snippet_info} />);
    expect(wrapper).toMatchSnapshot();
  });
});
