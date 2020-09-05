import React from 'react';
import { InfoSection } from '../molecules/infoSection/InfoSection';

import './skillsInfo.scss';

export const SkillsInfo = () => {
  return (
    <div className='skills-info'>
      <InfoSection
        sectionTitle={'Programming Technologies'}
        technologies={'JS'}
      />
    </div>
  );
};
