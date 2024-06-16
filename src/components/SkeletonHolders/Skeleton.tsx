// src/components/SkeletonImage.js
import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonImage = ({ src, alt, width, height,SkeletonWidth='150px', SkeletonHeight='50px' }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div style={{ width:'100%', height:"100%", position: 'relative' }} className='overflow-hidden'>
      {isLoading && <Skeleton width={SkeletonWidth} height={SkeletonHeight} className='overflow-hidden' />}
      <img
        src={src}
        width={width}
        height={height}
        onLoad={handleImageLoad}
        style={{
          display: isLoading ? 'none' : 'block',
        }}
      />
    </div>
  );
};

export default SkeletonImage;
