import { shallow } from 'enzyme';
import RelatedVideoCard from '../../../components/cards/RelatedVideoCard';

describe('Tests the RelatedVideoCard', () => {
  test('should be displayed correctly', () => {
    const id = {
      videoId: 'ToI6UOZZSzo',
    };

    const snippet_info = {
      title: 'Djokovic Vs Monfils; Alcaraz, Murray & Shapovalov In Action',
      description: 'Highlights of a blockbuster day in Madrid',
      thumbnails: {
        medium: {
          url: 'https://i.ytimg.com/vi/ToI6UOZZSzo/mqdefault.jpg',
        },
      },
    };
    const wrapper = shallow(<RelatedVideoCard id={id} snippet={snippet_info} />);
    expect(wrapper).toMatchSnapshot();
  });
});
