import React from 'react';
import { GrChannel } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import './RelatedVideoCard.scss';

const RelatedVideoCard = ({ id, snippet }) => {
  const { videoId } = id;
  const { title, channelTitle, thumbnails } = snippet;
  const { medium } = thumbnails;
  return (
    <Link to={`/${videoId}`}>
      <div className="related_video_container">
        <img src={medium.url} alt={title} />
        <div className="related_video_content">
          <h4>{title}</h4>
          <span>
            <GrChannel /> {channelTitle}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RelatedVideoCard;
