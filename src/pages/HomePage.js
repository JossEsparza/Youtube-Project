import React from 'react';
import VideoCard from '../components/cards/VideoCard';
// import { useFetch } from '../hooks/useFetch';
import './HomePage.scss';

export const HomePage = () => {
  const data = require('../mocks/youtube-videos-mock.json');
  // const key = 'AIzaSyABmgpPt9OIaG3TfqS9HlzmUv54cDMFUQQ';
  const error = 0;
  const loading = 0;
  // const { data, loading, error } = useFetch(
  //   'https://www.googleapis.com/youtube/v3/search?part=id,snippet&maxResults=15&q=tenis&key=' +
  //     key
  // );

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
          <p>Loading!</p>
        ) : (
          filtered_video.map((video) => <VideoCard key={video.id.videoId} {...video} />)
        )}
      </div>
    </div>
  );
};
