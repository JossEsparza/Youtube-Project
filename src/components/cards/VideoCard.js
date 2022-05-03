import React from 'react';
import './VideoCard.scss';

const VideoCard = ({ title, description, thumbnails }) => {
  const { url } = thumbnails.high;

  return (
    <div className="card_container">
      <img src={url} alt={title} />
      <h3>{title}</h3>
      <span>{description}</span>
    </div>
  );
};

export default VideoCard;
