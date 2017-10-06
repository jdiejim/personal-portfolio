import React from 'react';
import Arrow from './components/Arrow';

export const getArrow = (isLeft, callback) => {
  return <Arrow handleOnClick={callback} left={isLeft} />;
};
