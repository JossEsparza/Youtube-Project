import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import RelatedVideoCard from '../cards/RelatedVideoCard';
import './RelatedVideos.scss';
import Loading from '../loading/Loading';

const RelatedVideos = () => {
  // For testing purpose:
  // const data = require('../../mocks/youtube-related-videos-mock.json');
  // const error = 0;
  // const loading = 0;
  const location = useLocation();

  const { data, loading, error } = useFetch(
    'https://www.googleapis.com/youtube/v3/search?part=snippet&key=' +
      process.env.REACT_APP_YOUTUBE_API_KEY +
      '&relatedToVideoId=' +
      location.pathname.substring(1) +
      '&type=video' +
      '&maxResults=10'
  );

  const filtered_video = data?.items?.filter((video) => {
    return video.snippet;
  });

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <div className="related_container">
        {loading ? (
          <Loading />
        ) : (
          filtered_video.map((video) => (
            <RelatedVideoCard key={video.id.videoId} {...video} />
          ))
        )}
      </div>
    </div>
  );
};

export default RelatedVideos;
