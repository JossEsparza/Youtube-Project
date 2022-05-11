import React from 'react';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="load-wrapp">
      <div className="load-5">
        <div className="ring-2">
          <div className="ball-holder">
            <div className="ball" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
