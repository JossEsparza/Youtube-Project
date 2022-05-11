import React from 'react';
import { Link } from 'react-router-dom';
import './VideoCard.scss';

const VideoCard = ({ snippet, id }) => {
  const { title, description, thumbnails } = snippet;
  const { videoId } = id;
  const { url } = thumbnails.high;

  return (
    <Link to={`/${videoId}`}>
      <div className="card_container">
        <img src={url} alt={title} />
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    </Link>
  );
};

export default VideoCard;
