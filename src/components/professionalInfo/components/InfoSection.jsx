import React from 'react';
import { VerticalDivider } from './atoms/verticalDivider/VerticalDivider';

import { When } from '../../../utils/When';

import './infoSection.scss';

export const InfoSection = ({ sectionTitle, sectionSubtitle, sectionInfo }) => {
  console.log(sectionTitle);
  return (
    <div className='info-section'>
      <VerticalDivider />

      <div className='info-section__text'>
        <When predicate={sectionTitle}>
          <h1>{sectionTitle}</h1>
        </When>
        <When predicate={sectionSubtitle}>
          <h3>{sectionSubtitle}</h3>
        </When>
        <When predicate={sectionInfo}>
          <p>{sectionInfo}</p>
        </When>
      </div>
    </div>
  );
};
