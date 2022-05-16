import { mount } from 'enzyme';
import { Route, MemoryRouter } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import VideoPage from '../../pages/VideoPage';
jest.mock('../../hooks/useFetch');

describe('Tests the Video Page', () => {
  test('should be displayed correctly when loading is true', () => {
    const mockLocation = {
      pathname: '/',
      search: '',
    };
    useFetch.mockReturnValue({
      data: {},
      loading: true,
      error: null,
    });
    const wrapper = mount(
      <MemoryRouter history={mockLocation}>
        <Route path="/:video_id">
          <VideoPage />
        </Route>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('should be displayed correctly when loading is false', () => {
    const mockLocation = {
      pathname: '/',
      search: '',
    };
    useFetch.mockReturnValue({
      data: {
        items: [
          {
            snippet: {
              title: 'my first video',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
                },
              },
            },
          },
        ],
      },
      loading: false,
      error: null,
    });
    const wrapper = mount(
      <MemoryRouter history={mockLocation}>
        <Route path="/:video_id">
          <VideoPage />
        </Route>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
