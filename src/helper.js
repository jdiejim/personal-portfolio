import React from 'react';
import Arrow from './components/Arrow';

export const getArrow = (isLeft, callback, id) => {
  return <Arrow id={id} handleOnClick={callback} left={isLeft} />;
};

// const left = position !== 0 ? getArrow(true, this.handleDecrement) : <span />;
// const right = position !== projects.length - 1 ? getArrow(false, this.handleIncrement) : <span />;
