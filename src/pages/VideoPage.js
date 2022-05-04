import React from 'react';
// import { useFetch } from '../hooks/useFetch';
// import { useLocation } from 'react-router-dom';
import RelatedVideos from '../components/related_videos/RelatedVideos';
import './VideoPage.scss';

const VideoPage = () => {
  const data = require('../mocks/youtube-specific-video-mock.json');
  const error = 0;
  const loading = 0;

  // const location = useLocation();
  // const key = 'apikey';
  // const { data, loading, error } = useFetch(
  //   'https://www.googleapis.com/youtube/v3/videos?part=id, snippet,player&key=' +
  //     key +
  //     '&id=' +
  //     location.pathname.substring(1)
  // );

  const { items } = data;

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      {loading ? (
        <p>Loading!</p>
      ) : (
        <div className="video_page_container">
          <div className="video_player">
            <iframe
              title={items[0].id}
              width="480"
              height="270"
              src={`//www.youtube.com/embed/${items[0].id}`}
              frameBorder="0"
              allowFullScreen
              allow={
                'accelerometer; autoplay; clipboard-write;' +
                'encrypted-media; gyroscope; picture-in-picture'
              }
            />
            <h3>{items[0].snippet.title}</h3>
            <p>Channel: {items[0].snippet.channelTitle}</p>
            <span>Description: {items[0].snippet.description}</span>
          </div>
          <RelatedVideos />
        </div>
      )}
    </div>
  );
};

export default VideoPage;
