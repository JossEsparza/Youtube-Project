import React from 'react';
import './RelatedVideoCard.scss';

const RelatedVideoCard = ({ snippet }) => {
  const { title, channelTitle, thumbnails } = snippet;
  const { medium } = thumbnails;
  return (
    <div className="related_video_container">
      <img src={medium.url} alt={title} />
      <div className="related_video_content">
        <h4>{title}</h4>
        <span>Channel: {channelTitle}</span>
      </div>
    </div>
  );
};

export default RelatedVideoCard;
