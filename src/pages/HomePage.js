import React from 'react';
import VideoCard from '../components/cards/VideoCard';
import './HomePage.scss';

export const HomePage = () => {
  const video_info = require('../mocks/youtube-videos-mock.json');
  const filtered_video = video_info.items.filter((video) => {
    return video.id.kind.includes('youtube#video');
  });
  console.log(filtered_video);
  return (
    <div className="info_container">
      <div className="video_container">
        {filtered_video.map((video) => (
          <VideoCard key={video.id.videoId} {...video.snippet} />
        ))}
      </div>
    </div>
  );
};
