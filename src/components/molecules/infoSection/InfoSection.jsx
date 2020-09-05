import React from 'react';
import { VerticalDivider } from '../../atoms/verticalDivider/VerticalDivider';
import { TechPresentation } from '../techPresentation/TechPresentation';

import { When } from '../../../utils/When';

import './infoSection.scss';

export const InfoSection = ({
  sectionTitle,
  sectionSubtitle,
  sectionInfo,
  technologies,
}) => {
  return (
    <div className='info-section'>
      <VerticalDivider />

      <div className='info-section__content'>
        <When predicate={sectionTitle}>
          <h1>{sectionTitle}</h1>
        </When>
        <When predicate={sectionSubtitle}>
          <h3>{sectionSubtitle}</h3>
        </When>
        <When predicate={sectionInfo}>
          <p>{sectionInfo}</p>
        </When>

        <When predicate={technologies}>
          <TechPresentation
            technologies={[
              { name: 'JS', rate: 4 },
              { name: 'CSS', rate: 4 },
              { name: 'HTML', rate: 4 },
              { name: 'SCSS', rate: 4 },
              { name: 'C#', rate: 2 },
              { name: 'NODE', rate: 4 },
            ]}
          />
        </When>
      </div>
    </div>
  );
};
