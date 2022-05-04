import React from 'react';
// import { useFetch } from '../../hooks/useFetch';
// import { useLocation } from 'react-router-dom';
import RelatedVideoCard from '../cards/RelatedVideoCard';
import './RelatedVideos.scss';

const RelatedVideos = () => {
  const data = require('../../mocks/youtube-related-videos-mock.json');
  const error = 0;
  const loading = 0;
  // const location = useLocation();
  // const key = 'apikey';

  // const { data, loading, error } = useFetch(
  //   'https://www.googleapis.com/youtube/v3/search?part=snippet&key=' +
  //     key +
  //     '&relatedToVideoId=' +
  //     location.pathname.substring(1) +
  //     '&type=video'
  // );

  // console.log(data.items);

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
          <p>Loading!</p>
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
