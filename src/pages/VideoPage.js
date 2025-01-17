import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import RelatedVideos from '../components/related_videos/RelatedVideos';
import { GrChannel } from 'react-icons/gr';
import './VideoPage.scss';
import Loading from '../components/loading/Loading';

const VideoPage = () => {
  // For testing purpose
  // const data = require('../mocks/youtube-specific-video-mock.json');
  // const error = 0;
  // const loading = 0;

  const location = useLocation();

  const { data, loading, error } = useFetch(
    'https://www.googleapis.com/youtube/v3/videos?part=id, snippet,player&key=' +
      process.env.REACT_APP_YOUTUBE_API_KEY +
      '&id=' +
      location.pathname.substring(1)
  );

  const { items } = data;

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="video_page_container">
      {loading ? (
        <Loading />
      ) : (
        <div className="video_page_info_container">
          <div className="video_elements_container">
            <iframe
              title={items[0].id}
              width="100%"
              height="100%"
              src={`//www.youtube.com/embed/${items[0].id}`}
              frameBorder="0"
              allowFullScreen
              allow={
                'accelerometer; autoplay; clipboard-write;' +
                'encrypted-media; gyroscope; picture-in-picture'
              }
            />
            <div className="video_player">
              <h3>{items[0].snippet.title}</h3>
              <p className="channel_icon">
                <GrChannel /> {items[0].snippet.channelTitle}
              </p>
              <span>{items[0].snippet.description}</span>
            </div>
          </div>
          <RelatedVideos />
        </div>
      )}
    </div>
  );
};

export default VideoPage;
