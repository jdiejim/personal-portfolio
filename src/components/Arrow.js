import React from 'react';
import './styles/Arrow.css';

function Arrow({ id, handleOnClick }) {
  if (id === 'left') {
    return (
      <button id={id} onClick={handleOnClick} className="arrow-wrapper">
        <svg className="arrow" viewBox="0 0 129 129">
          <g>
            <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"/>
          </g>
        </svg>
      </button>
    );
  }

  return (
    <button id={id} onClick={handleOnClick} className="arrow-wrapper">
      <svg className="arrow" viewBox="0 0 129 129">
        <g>
          <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>
        </g>
      </svg>
    </button>
  );
}

export default Arrow;
