import React from 'react';
import Media from 'react-media';
import LandingMobile from './LandingMobile';
import Landing from '../Landing';

export default function ChooseLanding() {
  return (
    <Media query="(max-width: 768px)">
      {matches => matches ? <LandingMobile /> : <Landing />}
    </Media>
  );
}
