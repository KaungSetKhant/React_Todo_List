import React from 'react';
import emptySvg from '../img/empty_stage.svg';
const EmptyStage = () => {
  return (
    <div className="hidden last:flex flex-col items-center py-10">
    <img
      width={150}
      className="mb-5"
      src={emptySvg}
      alt="empty stage image"
    />
    <p className="text-sm">There is no list.</p>
  </div>
  )
}

export default EmptyStage;
