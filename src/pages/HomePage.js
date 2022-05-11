import React from 'react';
import { useContext } from 'react';
import VideoCard from '../components/cards/VideoCard';
import ToggleContext from '../state/ToggleContext';
import { useFetch } from '../hooks/useFetch';
import './HomePage.scss';
import Loading from '../components/loading/Loading';

export const HomePage = () => {
  // For testing purpose:
  // const data = require('../mocks/youtube-videos-mock.json');
  // const error = 0;
  // const loading = 0;

  const { inputValue } = useContext(ToggleContext);
  const { data, loading, error } = useFetch(
    'https://www.googleapis.com/youtube/v3/search?part=id,snippet&maxResults=15&q=' +
      inputValue +
      '&key=' +
      process.env.REACT_APP_YOUTUBE_API_KEY
  );

  if (error) {
    return <p>{error.message}</p>;
  }

  const filtered_video = data?.items?.filter((video) => {
    return video.id.kind.includes('youtube#video');
  });

  return (
    <div className="info_container">
      <div className="video_container">
        {loading ? (
          <Loading />
        ) : (
          filtered_video.map((video) => <VideoCard key={video.id.videoId} {...video} />)
        )}
      </div>
    </div>
  );
};
