import React from 'react';
import './Loading.scss';

const Loading = () => {
  return (
    <div class="load-wrapp">
      <div class="load-5">
        <div class="ring-2">
          <div class="ball-holder">
            <div class="ball" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
